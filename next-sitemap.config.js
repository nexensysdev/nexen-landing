const siteUrl = 'https://nexensys.ar'

function getAlternatePaths(path) {
  const projectEsMatch = path.match(/^\/proyectos\/([^/]+)$/)
  const projectEnMatch = path.match(/^\/en\/projects\/([^/]+)$/)

  if (path === '/' || path === '/en') {
    return {
      spanishPath: '/',
      englishPath: '/en',
    }
  }

  if (projectEsMatch) {
    return {
      spanishPath: path,
      englishPath: `/en/projects/${projectEsMatch[1]}`,
    }
  }

  if (projectEnMatch) {
    return {
      spanishPath: `/proyectos/${projectEnMatch[1]}`,
      englishPath: path,
    }
  }

  return {
    spanishPath: path,
    englishPath: path,
  }
}

function alternateRefs(spanishPath, englishPath) {
  return [
    {
      href: `${siteUrl}${spanishPath}`,
      hreflang: 'es-AR',
      hrefIsAbsolute: true,
    },
    {
      href: `${siteUrl}${englishPath}`,
      hreflang: 'en',
      hrefIsAbsolute: true,
    },
    {
      href: `${siteUrl}${spanishPath}`,
      hreflang: 'x-default',
      hrefIsAbsolute: true,
    },
  ]
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const { spanishPath, englishPath } = getAlternatePaths(path)

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' || path === '/en' ? 0.9 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: alternateRefs(spanishPath, englishPath),
    }
  },
}
