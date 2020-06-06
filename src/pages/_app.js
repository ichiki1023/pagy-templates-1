import React from 'react'
import App, { Container } from 'next/app'
import AppContext from 'src/context/AppContext'
import { getUserAgent } from 'src/helpers/userAgent'
import { MuiThemeProvider } from '@material-ui/core/styles'
import getPageContext from 'src/helpers/getPageContext'
import { createGlobalStyle } from 'styled-components'
import defaultData from 'src/data/default'
import Head from 'next/head'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'src/css/slick-custom.css'

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
    font-size: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    white-space: pre-wrap;
  }
`

class TemplateApp extends App {
  pageContext = null
  static async getInitialProps({ Component, ctx }) {
    const { req } = ctx
    let pageProps = {}

    // userAgent取得
    const ua = req ? req.headers["user-agent"] : window.navigator.userAgent
    const userAgent = getUserAgent(ua)

    const data = defaultData

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx, data: data })
    }

    return {
      pageProps: {
        ...data,
        ...pageProps,
      },
      userAgent
    }
  }

  componentWillMount() {
    this.pageContext = this.props.pageContext || getPageContext()
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    // https://material-ui.com/guides/server-rendering/
    const jssStyles = document.querySelector(`#jss-server-side`)
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps, userAgent } = this.props
    const { site, fashion } = pageProps
    const { pageContext } = this

    const title =
      pageProps && pageProps.title
        ? `${pageProps.title} | ${site.name}`
        : site.name

    return (
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <AppContext.Provider value={{ site, fashion, userAgent }}>
          <GlobalStyle />
          <MuiThemeProvider
            theme={pageContext.theme}
            sheetsManager={pageContext.sheetsManager}
          >
            <Component {...pageProps} />
          </MuiThemeProvider>
        </AppContext.Provider>
      </Container>
    )
  }
}

export default TemplateApp
