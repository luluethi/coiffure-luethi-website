"""Check built pages, local references, fragments, fonts, and logo assets."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import xml.etree.ElementTree as ET

ROOT = Path('dist')

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
        target = ROOT / unquote(url.path).lstrip('/') if url.path.startswith('/') else path.parent / unquote(url.path) if url.path else path
        if target.is_dir():
            target /= 'index.html'
        assert target.is_file(), f'{path}: missing {ref}'
        if url.fragment:
            assert unquote(url.fragment) in Page(target.read_text()).ids, f'{path}: missing anchor {ref}'
        count += 1
for css in (ROOT / 'assets').glob('*.css'):
    for url in re.findall(r'url\([\'"]?([^\)\'\"]+)', css.read_text()):
        target = ROOT / url.lstrip('/') if url.startswith('/') else css.parent / url
        assert target.is_file(), f'Missing CSS resource: {url}'
for svg in [ROOT / 'assets/luethi.svg', *sorted((ROOT / 'assets/brand').glob('*.svg'))]:
    tree = ET.parse(svg)
    assert not tree.findall('.//{http://www.w3.org/2000/svg}image'), f'Raster content in {svg}'
print(f'PASS: {len(pages)} pages, {count} local links/assets/anchors, CSS resources and vector logos')
