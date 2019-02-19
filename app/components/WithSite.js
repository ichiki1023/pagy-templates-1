import React from 'react'
import defaultData from 'app/data/default'
import SiteApi from 'app/api/SiteApi'
import FashionApi from 'app/api/FashionApi'
import SitePhotosApi from 'app/api/SitePhotosApi'
import SitePostsApi from 'app/api/SitePostsApi'
import getConfig from 'next/config'
import moment from 'moment'

const publicRuntimeConfig = getConfig().publicRuntimeConfig

const WithSite = Page =>
  class WithSitePage extends React.Component {
    static async getInitialProps (ctx) {
      const { req } = ctx
      const host = req
        ? req.headers['x-forwarded-host']
        : window.location.hostname

      let props = {}

      // Page上でgetInitialPropsが定義されていれば読み込む
      if (Page.getInitialProps) {
        props = await Page.getInitialProps(ctx)
      }

      if (!host) {
        return {
          ...props,
          ...defaultData
        }
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
      if (host !== publicRuntimeConfig.webHost) {
        try {
          const site = await SiteApi.getByDomain({ domain: host })
          const photos = await SitePhotosApi.get({ siteId: site.id })
          const posts = await SitePostsApi.get({ siteId: site.id })
          const formattedPosts = posts.map(post => {
            return {
              ...post,
              created_at: moment(post.created_at).format('YYYY/MM/DD'),
              updated_at: moment(post.updated_at).format('YYYY/MM/DD')
            }
          })
          const fashion = await FashionApi.getBySiteId({ siteId: site.id })
          return {
            ...props,
            site: {
              ...site,
              photos,
              posts: formattedPosts
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
