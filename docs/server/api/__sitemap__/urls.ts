import { serverQueryContent } from '#content/server'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  const contentList = (await serverQueryContent(e).find())
  return contentList
    .filter(c => !c._path.includes('/_dir'))
    .map((c) => {
      return asSitemapUrl({
        loc: c._path,
        lastmod: c.updatedAt,
      })
    })
})
