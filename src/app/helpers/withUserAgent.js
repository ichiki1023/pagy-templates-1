import React from 'react'
import MobileDetect from 'mobile-detect'

const getUserAgent = userAgent => {
  const md = new MobileDetect(userAgent)
  let isMobile = false
  if (md.mobile()) {
    isMobile = true
  }
  return {
    userAgent: userAgent,
    isMobile: isMobile
  }
}

const withUserAgent = Page =>
  class UserAgentPage extends React.Component {
    static async getInitialProps (ctx) {
      const {
        ctx: { req }
      } = ctx
      const ua = req ? req.headers['user-agent'] : window.navigator.userAgent
      const userAgent = getUserAgent(ua)
      if (Page.getInitialProps) {
        const props = await Page.getInitialProps(ctx)
        return {
          ...props,
          userAgent: { ...userAgent }
        }
      }
      return {
        userAgent: { ...userAgent }
      }
    }
    render () {
      return <Page {...this.props} />
    }
  }

export default withUserAgent
