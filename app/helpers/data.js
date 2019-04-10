import SiteApi from 'app/api/SiteApi'
import FashionApi from 'app/api/FashionApi'
import SitePhotosApi from 'app/api/SitePhotosApi'
import SiteArticlesApi from 'app/api/SiteArticlesApi'
import defaultData from 'app/data/default'
import getConfig from 'next/config'
import mapper from 'app/helpers/mapper'
import validate from 'app/helpers/validate'

const isServer = typeof window === 'undefined'
const publicRuntimeConfig = getConfig().publicRuntimeConfig

export async function getData (ctx, hostName) {
  const { req } = ctx
  const data = defaultData

  // クライアント側でのみ動作する
  if (!isServer) {
    if (!window['__SITE_DATA__']) {
      return { ...data }
    }
    return {
      ...window['__SITE_DATA__']
    }
  }

  // 以下はサーバー側でのみ動作する

  // ローカルのデバック用
  if (!hostName) {
    return {
      ...data
    }
  }

  // [POST]のテンプレート表示
  if (req && req.body && Object.keys(req.body).length !== 0) {
    if (!validate({ ...req.body })) throw new Error('bodyが正しくありません')
    const postData = mapper({ ...req.body })
    return {
      ...postData
    }
  }

  // 登録済みのサイト表示
  if (publicRuntimeConfig.webHost !== hostName) {
    const site = await SiteApi.getByDomain({ domain: hostName })
    const photos = await SitePhotosApi.get({ siteId: site.id })
    const articles = await SiteArticlesApi.get({ siteId: site.id })
    const fashion = await FashionApi.getBySiteId({ siteId: site.id })
    const apiData = mapper({
      site: {
        ...site,
        photos,
        articles
      },
      fashion: {
        id: fashion.id,
        items: fashion['fashion_items'],
        coordinates: fashion['fashion_coordinates']
      }
    })
    return {
      ...apiData
    }
  }

  // [GET]のテンプレート表示
  return {
    ...data
  }
}
