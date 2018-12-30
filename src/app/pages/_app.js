import React from 'react'
import App, { Container } from 'next/app'
import withUserAgent from 'app/helpers/withUserAgent'
import { MuiThemeProvider } from '@material-ui/core/styles'
import getPageContext from 'app/helpers/getPageContext'

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
