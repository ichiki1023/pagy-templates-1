import React from 'react'
import App, { Container } from 'next/app'
import { getUserAgent } from 'app/helpers/userAgent'
import { MuiThemeProvider } from '@material-ui/core/styles'
import getPageContext from 'app/helpers/getPageContext'
import { createGlobalStyle } from 'styled-components'
import { getData } from 'app/helpers/data'
import Error from 'next/error'

// next.jsのバグ。_app.jsでcssを読み込まないとcssをimportしている画面へ遷移できない
// https://spectrum.chat/next-js/general/bounty-for-issues~2183fc55-236d-42cb-92b9-3ab10acc6303?m=MTUzODU2NDg2ODA2Mg==
import 'app/css/empty.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, 'BlinkMacSystemFont',  Sans-Serif;

    input[type="button"], input[type="submit"] {
      -webkit-appearance: none;
    }
  }
  html, #__next {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

class TemplateApp extends App {
  pageContext = null
  static async getInitialProps ({ Component, ctx }) {
    const { req } = ctx
    let pageProps = {}

    const hostName = req
      ? req.headers['x-forwarded-host']
      : window.location.hostname

    // userAgent取得
    const ua = req ? req.headers['user-agent'] : window.navigator.userAgent
    const userAgent = getUserAgent(ua)

    try {
      const data = await getData(ctx, hostName)

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ...ctx, data: data })
      }

      return {
        pageProps: {
          ...data,
          ...pageProps,
          userAgent
        },
        hostName: hostName
      }
    } catch (error) {
      console.debug(error)
      return {
        pageProps: {
          ...pageProps,
          statusCode: 500
        }
      }
    }
  }

  componentWillMount () {
    this.pageContext = this.props.pageContext || getPageContext()
  }

  componentDidMount () {
    // Remove the server-side injected CSS.
    // https://material-ui.com/guides/server-rendering/
    const jssStyles = document.querySelector(`#jss-server-side`)
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
    const { site, fashion } = this.props.pageProps
    window['__SITE_DATA__'] = {
      site,
      fashion
    }
  }

  render () {
    // エラー画面の表示
    if (this.props.pageProps.statusCode) {
      return (
        <Container>
          <Error statusCode={this.props.pageProps.statusCode} />
        </Container>
      )
    }

    const { Component, pageProps } = this.props
    const { pageContext } = this

    return (
      <Container>
        <GlobalStyle />
        <MuiThemeProvider
          theme={pageContext.theme}
          sheetsManager={pageContext.sheetsManager}
        >
          <Component {...pageProps} />
        </MuiThemeProvider>
      </Container>
    )
  }
}

export default TemplateApp
