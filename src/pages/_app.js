import React from 'react'
import { Container } from 'next/app'
import AppContext from 'src/context/AppContext'
import { getUserAgent } from 'src/helpers/userAgent'
import { ThemeProvider } from '@material-ui/styles'
import { createGlobalStyle } from 'styled-components'
import defaultData from 'src/data/default'
import Head from 'next/head'
import theme from 'src/helpers/theme'

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

const TemplateApp = (props) => {
  const { Component, pageProps, userAgent } = props
  const { site, fashion } = pageProps

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const title = React.useMemo(() => {
    if (pageProps && pageProps.title) {
      return `${pageProps.title} | ${site.name}`
    }
    return site.name
  }, [pageProps, site.name])

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <AppContext.Provider value={{ site, fashion, userAgent }}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContext.Provider>
    </Container>
  )
}

TemplateApp.getInitialProps = async ({ Component, ctx }) => {
  const { req } = ctx
  let pageProps = {}

  // userAgent取得
  const ua = req ? req.headers['user-agent'] : window.navigator.userAgent
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
    userAgent,
  }
}

export default TemplateApp
