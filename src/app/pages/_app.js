import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import withUserAgent from 'app/helpers/withUserAgent'
import slick from 'slick-carousel/slick/slick.css'
import slickTheme from 'slick-carousel/slick/slick-theme.css'
import slickCustom from 'app/components/slick-custom.css'
import { MuiThemeProvider } from '@material-ui/core/styles'
import getPageContext from 'app/helpers/getPageContext'
import { createGlobalStyle } from 'styled-components'

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
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
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
    const { Component, pageProps, userAgent } = this.props
    const { pageContext } = this
    const props = {
      ...pageProps,
      userAgent
    }

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <style dangerouslySetInnerHTML={{ __html: slick }} />
          <style dangerouslySetInnerHTML={{ __html: slickTheme }} />
          <style dangerouslySetInnerHTML={{ __html: slickCustom }} />
        </Head>
        <MuiThemeProvider
          theme={pageContext.theme}
          sheetsManager={pageContext.sheetsManager}
        >
          <Component {...props} />
        </MuiThemeProvider>
      </Container>
    )
  }
}

export default withUserAgent(TemplateApp)
