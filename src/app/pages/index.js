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
import defaultData from 'app/data/default'
import SitesApi from 'app/api/SitesApi'
import getConfig from 'next/config'
import { animateScroll as scroll, scroller } from 'react-scroll'

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
  z-index: 4;
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
  z-index: 4;
  position: relative;
`

const StyledSNSNavigation = styled(SNSNavigation)`
  z-index: 2;
`

// PCのHeaderを表示させる領域. wrapperより下の領域はheaderを表示させない
const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

export default class Index extends React.Component {
  static async getInitialProps ({ req, asPath }) {
    const anchor = req ? null : asPath
    const publicRuntimeConfig = getConfig().publicRuntimeConfig
    const host = req ? req.headers.host : window.location.host

    // POSTから取得したデータを利用する
    if (req && req.body && req.body.site) {
      return { site: req.body.site, anchor }
    }

    // 登録済みのサイトの情報を取得する
    if (host !== publicRuntimeConfig.host) {
      try {
        const site = await SitesApi.getSiteWithDomain(host)
        return { site: site, anchor }
      } catch {
        // なければdefaultの値
        return { site: defaultData.site, anchor }
      }
    }
    // なければdefaultの値
    return { site: defaultData.site, anchor }
  }

  componentDidMount () {
    if (this.props.anchor) {
      try {
        const element = this.props.anchor.split('/#')[1]
        if (element) {
          scroller.scrollTo(element)
          return
        }
        scroll.scrollToTop()
        return
      } catch (error) {
        // splitできない場合はtopへ送る
        scroll.scrollToTop()
        return
      }
    }
    scroll.scrollToTop()
  }

  render () {
    const { site, userAgent } = this.props

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
            services={services}
            pageName={'home'}
          />
          <Home site={site} />
          {site.posts && site.posts.length !== 0 ? (
            <StyledNews containerId={'news'} posts={site.posts} />
          ) : null}
          {site.items && site.items.length !== 0 ? (
            <StyledSelection items={site.items} userAgent={userAgent} />
          ) : null}
          {site.items && site.coordinates.length !== 0 ? (
            <StyledCoordinates
              coordinates={site.coordinates}
              marginTop={paddingTop}
            />
          ) : null}
          <StyledAbout site={site} />
          {services ? <StyledSocialMedia services={services} /> : null}
        </Wrapper>
        {site.contact_email ? <StyledContact site={site} /> : null}
        {services ? <StyledSNSNavigation services={services} /> : null}
        <FooterWrapper>
          <StyledFooter userAgent={userAgent} site={site} />
        </FooterWrapper>
      </Page>
    )
  }
}
