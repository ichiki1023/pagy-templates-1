import React from 'react'
import defaultData from 'app/data/default'
import SitesApi from 'app/api/SitesApi'
import getConfig from 'next/config'

const WithSite = Page =>
  class WithSitePage extends React.Component {
    static async getInitialProps (ctx) {
      const { req } = ctx
      const publicRuntimeConfig = getConfig().publicRuntimeConfig
      const host = req ? req.headers.host : window.location.host
      let site = defaultData.site

      // POSTから取得したデータを利用する
      if (req && req.body && req.body.site) {
        site = req.body.site
      }

      // 登録済みのサイトの情報を取得する
      if (host !== publicRuntimeConfig.host) {
        try {
          site = await SitesApi.getSiteWithDomain(host)
        } catch {
          // なければdefaultの値
          site = defaultData.site
        }
      }

      if (Page.getInitialProps) {
        const props = await Page.getInitialProps(ctx)
        return { ...props, site: site }
      }
      return { site }
    }

    render () {
      return <Page {...this.props} />
    }
  }

export default WithSite
