import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles'

export default class TemplateDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

TemplateDocument.getInitialProps = async (ctx) => {
  const styledComponentsSheet = new ServerStyleSheet()
  const materialSheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(
            materialSheets.collect(<App {...props} />),
          ),
      })
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {materialSheets.getStyleElement()}
          {styledComponentsSheet.getStyleElement()}
        </React.Fragment>
      ),
    }
  } finally {
    styledComponentsSheet.seal()
  }
}
