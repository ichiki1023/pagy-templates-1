import React from 'react'
import styled from 'styled-components'
import CoolHeader from 'app/components/common/CoolHeader'
import CoolFooter from 'app/components/common/CoolFooter'
import SNSNavigation from 'app/components/common/SNSServices/Navigation'
import Home from 'app/components/root/Home'
import News from 'app/components/root/News'
import Selection from 'app/components/root/Selection'
import About from 'app/components/root/About'
import Coordinates from 'app/components/root/Coordinates'
import SocialMedia from 'app/components/root/SocialMedia'
import Contact from 'app/components/root/Contact'
import { animateScroll as scroll, scroller } from 'react-scroll'
import WithSite from 'app/components/WithSite'

const headerHeight = 64
const padding = 40
const sectionMargin = 224
const paddingTop = headerHeight + padding
const marginTop = sectionMargin - (headerHeight + padding)

const spHeaderHeight = 48
const spPadding = 20
const spSectionMargin = 180
const spPaddingTop = spHeaderHeight + spPadding
const spMarginTop = spSectionMargin - (spHeaderHeight + spPadding)

const StyledHeader = styled(CoolHeader)`
  z-index: 1000;
  top: 0;
  height: ${headerHeight}px;
  @media (max-width: 500px) {
    height: ${spHeaderHeight}px;
  }
`

const Page = styled.div`
  position: relative;
`

const StyledNews = styled(News)`
  padding-top: ${paddingTop}px;
  margin-top: ${marginTop}px;
  @media (max-width: 500px) {
    padding-top: ${spPaddingTop}px;
    margin-top: ${spMarginTop}px;
  }
`

const StyledSelection = styled(Selection)`
  position: relative;
  z-index: 3;
  padding-top: ${paddingTop}px;
  margin-top: ${marginTop}px;
  @media (max-width: 500px) {
    padding-top: ${spPaddingTop}px;
    margin-top: ${spMarginTop}px;
  }
`

const StyledCoordinates = styled(Coordinates)`
  position: relative;
  z-index: 3;
  padding-top: ${paddingTop}px;
  margin-top: ${marginTop}px;
  @media (max-width: 500px) {
    padding-top: ${spPaddingTop}px;
    margin-top: ${spMarginTop}px;
  }
`

const StyledAbout = styled(About)`
  padding-top: ${paddingTop}px;
  margin-top: ${marginTop}px;
  @media (max-width: 500px) {
    padding-top: ${spPaddingTop}px;
    margin-top: ${spMarginTop}px;
  }
`

const StyledSocialMedia = styled(SocialMedia)`
  padding-top: ${paddingTop}px;
  margin-top: ${marginTop}px;
  @media (max-width: 500px) {
    padding-top: ${spPaddingTop}px;
    margin-top: ${spMarginTop}px;
  }
`

const StyledContact = styled(Contact)`
  padding-top: ${paddingTop - headerHeight}px;
  margin-top: ${marginTop + headerHeight}px;
  @media (max-width: 500px) {
    padding-top: ${spPaddingTop}px;
    margin-top: ${spMarginTop}px;
  }
`

const FooterWrapper = styled.div`
  padding-top: ${paddingTop}px;
  margin-top: ${marginTop}px;
  @media (max-width: 500px) {
    padding-top: ${spPaddingTop}px;
    margin-top: ${spMarginTop}px;
  }
`

const StyledFooter = styled(CoolFooter)`
  z-index: 1000;
  position: relative;
`

const StyledSNSNavigation = styled(SNSNavigation)`
  z-index: 999;
`

// PCのHeaderを表示させる領域. wrapperより下の領域はheaderを表示させない
const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

class Index extends React.Component {
  static async getInitialProps ({ req, asPath }) {
    const anchor = req ? null : asPath
    return { anchor }
  }

  componentDidMount () {
    if (this.props.anchor) {
      try {
        const element = this.props.anchor.split('/#')[1]
        if (element) {
          scroller.scrollTo(element)
          return
        }
        scroll.scrollToTop({
          smooth: false,
          duration: 0
        })
        return
      } catch (error) {
        // splitできない場合はtopへ送る
        scroll.scrollToTop({
          smooth: false,
          duration: 0
        })
        return
      }
    }
    scroll.scrollToTop({
      smooth: false,
      duration: 0
    })
  }

  render () {
    const { site, fashion, userAgent } = this.props

    const services =
      site.facebook || site.twitter || site.instagram || site.pinterest
        ? {
          facebook: site.facebook,
          twitter: site.twitter,
          instagram: site.instagram,
          pinterest: site.pinterest
        }
        : null

    return (
      <Page>
        <Wrapper>
          <StyledHeader
            userAgent={userAgent}
            site={site}
            fashion={fashion}
            services={services}
            pageName={'home'}
          />
          <Home site={site} />
          {site.posts && site.posts.length !== 0 ? (
            <StyledNews containerId={'news'} posts={site.posts} />
          ) : null}
          {fashion.items && fashion.items.length !== 0 ? (
            <StyledSelection items={fashion.items} userAgent={userAgent} />
          ) : null}
          {fashion.coordinates && fashion.coordinates.length !== 0 ? (
            <StyledCoordinates
              coordinates={fashion.coordinates}
              marginTop={paddingTop}
            />
          ) : null}
          <StyledAbout site={site} />
          {services ? <StyledSocialMedia services={services} /> : null}
        </Wrapper>
        {site.contact_email ? <StyledContact site={site} /> : null}
        {services ? <StyledSNSNavigation services={services} /> : null}
        <FooterWrapper>
          <StyledFooter userAgent={userAgent} site={site} fashion={fashion} />
        </FooterWrapper>
      </Page>
    )
  }
}

export default WithSite(Index)
