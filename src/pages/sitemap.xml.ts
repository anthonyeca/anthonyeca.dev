import type { APIRoute } from 'astro'

const routes = ['', 'en/']

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://anthonyeca.dev')).href
  const lastmod = new Date().toISOString().split('T')[0]

  const urls = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${base}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
