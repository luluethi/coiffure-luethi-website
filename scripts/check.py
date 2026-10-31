"""Check built pages, local references, fragments, fonts, and logo assets."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import os
import xml.etree.ElementTree as ET

ROOT = Path('dist')
BASE_PATH = os.environ.get('BASE_PATH', '').rstrip('/')

def resolve_local(url_path, source):
    path = unquote(url_path)
    if not path:
        return source
    if path.startswith('/'):
        if BASE_PATH:
            assert path.startswith(BASE_PATH + '/'), f'URL outside deployment path: {path}'
            path = path[len(BASE_PATH):]
        return ROOT / path.lstrip('/')
    return source.parent / path


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = set()
        self.refs = []
        self.headings = 0
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f'Duplicate ID: {attrs["id"]}'
            self.ids.add(attrs['id'])
        if 'srcset' in attrs:
            self.refs.extend(candidate.strip().split()[0] for candidate in attrs['srcset'].split(','))
        if tag == 'h1':
            self.headings += 1
        for key in ('href', 'src'):
            if key in attrs:
                self.refs.append(attrs[key])

pages = list(ROOT.rglob('*.html'))
assert pages, 'Run npm run build before checking the output.'
count = 0
for path in pages:
    page = Page(path.read_text())
    assert page.headings == 1, f'{path}: expected one primary heading'
    for ref in page.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        target = resolve_local(url.path, path)
        if target.is_dir():
            target /= 'index.html'
        assert target.is_file(), f'{path}: missing {ref}'
        if url.fragment:
            assert unquote(url.fragment) in Page(target.read_text()).ids, f'{path}: missing anchor {ref}'
        count += 1
for css in (ROOT / 'assets').glob('*.css'):
    for url in re.findall(r'url\([\'"]?([^\)\'\"]+)', css.read_text()):
        target = resolve_local(url, css)
        assert target.is_file(), f'Missing CSS resource: {url}'
for svg in [ROOT / 'assets/luethi.svg', *sorted((ROOT / 'assets/brand').glob('*.svg'))]:
    tree = ET.parse(svg)
    assert not tree.findall('.//{http://www.w3.org/2000/svg}image'), f'Raster content in {svg}'
print(f'PASS: {len(pages)} pages, {count} local links/assets/anchors, CSS resources and vector logos')
