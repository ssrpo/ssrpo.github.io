// Runs after `vite build` and the SSR build. Writes one static HTML page per
// language and section, plus sitemap.xml, robots.txt and 404.html.
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssrEntry = pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href
const { routes, render, head, sitemap, htmlLang } = await import(ssrEntry)

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-->') || !template.includes('<!--head-->')) {
  throw new Error('index.html must contain <!--head--> and <!--app--> placeholders')
}

let count = 0
for (const r of routes()) {
  const html = template
    .replace('<html lang="en">', '<html lang="' + htmlLang(r.lang) + '">')
    .replace('<!--head-->', head(r))
    .replace('<!--app-->', render(r.lang, r.id))
  const dir = path.join(dist, r.path)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(path.join(dir, 'index.html'), html)
  if (r.path === '/') await fs.writeFile(path.join(dist, '404.html'), html)
  count += 1
}

await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap())
await fs.writeFile(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: https://suziesr.xyz/sitemap.xml\n')
await fs.rm(path.resolve('dist-ssr'), { recursive: true, force: true })
console.log('Prerendered ' + count + ' pages, sitemap.xml and robots.txt')
