import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import getPageContext from 'app/helpers/getPageContext'

export default class TemplateDocument extends Document {
  static async getInitialProps () {
    const sheet = new ServerStyleSheet() // for styled-component
    const pageContext = getPageContext() // for material-ui
    const styleTags = sheet.getStyleElement()
    return {
      pageContext,
      styleTags,
      styles: (
        <style
          id='jss-server-side'
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString()
          }}
        />
      )
    }
  }

  render () {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
