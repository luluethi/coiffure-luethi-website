import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';

// Source files use root URLs for local development. A project-site deployment
// can prefix those URLs without changing the source or Netlify's root build.
const basePath = (process.env.BASE_PATH ?? '').replace(/\/$/, '');
if (basePath && !/^\/[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*$/.test(basePath)) {
  throw new Error('BASE_PATH must be empty or a URL path such as /coiffure-luethi-website');
}
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'team', 'preise', 'salon']) {
  await cp(file, `dist/${file}`, { recursive: true });
}
await mkdir('dist/assets', { recursive: true });
for (const file of ['site.css', 'site.js', 'luethi.svg', 'favicon.svg', 'images', 'fonts', 'brand']) {
  await cp(`assets/${file}`, `dist/assets/${file}`, { recursive: true });
}
async function prefixUrls(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) {
      await prefixUrls(path);
    } else if (entry.name.endsWith('.html')) {
      const html = await readFile(path, 'utf8');
      const prefixed = html
        .replace(/\b(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
        .replace(/\bsrcset="([^"]*)"/g, (_, candidates) =>
          `srcset="${candidates.split(',').map(candidate =>
            candidate.trim().replace(/^\/(?!\/)/, `${basePath}/`)
          ).join(', ')}"`);
      await writeFile(path, prefixed);
    } else if (entry.name.endsWith('.css')) {
      const css = await readFile(path, 'utf8');
      await writeFile(path, css.replace(/url\((['"]?)\/(?!\/)/g, `url($1${basePath}/`));
    }
  }
}
if (basePath) await prefixUrls('dist');
// Pages should serve the built files directly, without a Jekyll transformation.
await writeFile('dist/.nojekyll', '');
console.log(`Built four static pages into dist/ (base path: ${basePath || '/'})`);
