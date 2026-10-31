import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'team', 'preise', 'salon']) await cp(file, `dist/${file}`, { recursive: true });
await mkdir('dist/assets', { recursive: true });
for (const file of ['site.css', 'site.js', 'luethi.svg', 'favicon.svg', 'images', 'fonts', 'brand']) await cp(`assets/${file}`, `dist/assets/${file}`, { recursive: true });
console.log('Built four static pages into dist/');
