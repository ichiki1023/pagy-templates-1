import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'
import getPageContext from 'app/helpers/getPageContext'

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

export default class TemplateDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet() // for styled-component
    const pageContext = getPageContext() // for material-ui
    const styleTags = sheet.getStyleElement()
    return {
      ...initialProps,
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
        <Head>
          <GlobalStyle />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
