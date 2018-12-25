import React from 'react'
import App, { Container } from 'next/app'
import withUserAgent from 'src/helpers/withUserAgent'

class TemplateApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, userAgent } = this.props
    const props = {
      ...pageProps,
      userAgent
    }

    return (
      <Container>
        <Component {
          ...props
        } />
      </Container>
    )
  }
}

export default withUserAgent(TemplateApp)
