import React from 'react'
import App, { Container } from 'next/app'
import { getUserAgent } from 'app/helpers/userAgent'
import { MuiThemeProvider } from '@material-ui/core/styles'
import getPageContext from 'app/helpers/getPageContext'
import { createGlobalStyle } from 'styled-components'
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

    // userAgent取得
    const ua = req ? req.headers['user-agent'] : window.navigator.userAgent
    const userAgent = getUserAgent(ua)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps: {
        ...pageProps,
        userAgent
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
  }

  render () {
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
