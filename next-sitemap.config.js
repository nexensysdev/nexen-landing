/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nexensys.ar',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const projectEsMatch = path.match(/^\/proyectos\/([^/]+)$/)
    const projectEnMatch = path.match(/^\/en\/projects\/([^/]+)$/)

    let spanishPath = '/'
    let englishPath = '/en'

    if (projectEsMatch) {
      spanishPath = path
      englishPath = `/en/projects/${projectEsMatch[1]}`
    }

    if (projectEnMatch) {
      spanishPath = `/proyectos/${projectEnMatch[1]}`
      englishPath = path
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' || path === '/en' ? 0.9 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `${config.siteUrl}${spanishPath}`,
          hreflang: 'es-AR',
        },
        {
          href: `${config.siteUrl}${englishPath}`,
          hreflang: 'en',
        },
        {
          href: `${config.siteUrl}${spanishPath}`,
          hreflang: 'x-default',
        },
      ],
    }
  },
}
