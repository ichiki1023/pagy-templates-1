import React from 'react'
import defaultData from 'app/data/default'
import SiteApi from 'app/api/SiteApi'
import FashionApi from 'app/api/FashionApi'
import SitePhotosApi from 'app/api/SitePhotosApi'
import getConfig from 'next/config'

const publicRuntimeConfig = getConfig().publicRuntimeConfig

const WithSite = Page =>
  class WithSitePage extends React.Component {
    static async getInitialProps (ctx) {
      const { req } = ctx
      const host = req ? req.headers.host : window.location.host
      let props = {}

      // Page上でgetInitialPropsが定義されていれば読み込む
      if (Page.getInitialProps) {
        props = await Page.getInitialProps(ctx)
      }

      // POSTでデータを取得するケース
      if (req && req.body && req.body.site) {
        const site = req.body.site

        // ファッションの情報を持っているか
        if (
          req.body.fashion &&
          req.body.fashion.items &&
          req.body.fashion.coordinates
        ) {
          const fashion = req.body.fashion
          return {
            ...props,
            site,
            fashion
          }
        }
        return {
          ...props,
          site,
          fashion: {
            items: [],
            coordinates: []
          }
        }
      }

      // 登録済みの店舗用サイトのケース
      if (host !== publicRuntimeConfig.host) {
        try {
          const site = await SiteApi.getByDomain({ domain: host })
          const photos = await SitePhotosApi.get({ siteId: site.id })
          const fashion = await FashionApi.getBySiteId({ siteId: site.id })
          return {
            ...props,
            site: {
              ...site,
              photos
            },
            fashion: {
              items: fashion['fashion_items'],
              coordinates: fashion['fashion_coordinates']
            }
          }
        } catch (error) {
          // TODO: なければ404 error
          return {
            ...props,
            ...defaultData
          }
        }
      }

      return {
        ...props,
        ...defaultData
      }
    }

    render () {
      return <Page {...this.props} />
    }
  }

export default WithSite
