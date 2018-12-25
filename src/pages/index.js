import React from 'react'
import styled from 'styled-components'
import CoolHeader from 'src/components/common/CoolHeader'
import CoolFooter from 'src/components/common/CoolFooter'
import SNSNavigation from 'src/components/common/SNSServices/Navigation'
import Home from 'src/components/root/Home'
import News from 'src/components/root/News'
import Selection from 'src/components/root/Selection'
import About from 'src/components/root/About'
import Coordinates from 'src/components/root/Coordinates'
import SocialMedia from 'src/components/root/SocialMedia'
import Contact from 'src/components/root/Contact'
import defaultData from 'src/data/default'

const StyledHeader = styled(CoolHeader)`
  z-index: 4;
  top: 0;
`

const StyledFooter = styled(CoolFooter)`
  z-index: 4;
  position: relative;
`

const Page = styled.div`
  position: relative;
`

const StyledSelection = styled(Selection)`
  position: relative;
  z-index: 3;
`

const StyledCoordinates = styled(Coordinates)`
  position: relative;
  z-index: 3;
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
  static getInitialProps ({ req }) {
    // POSTから取得したデータを利用する
    if (req.body && req.body.site) {
      return { site: req.body.site }
    }

    // なければdefaultの値
    return { site: defaultData.site }
  }

  render () {
    const { site: site, userAgent } = this.props

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
          <StyledHeader userAgent={userAgent} site={site} services={services} pageName={'home'} />
          <Home site={site} />
          {site.posts && site.posts.length !== 0 ? (
            <News posts={site.posts} />
          ) : null}
          {site.items && site.items.length !== 0 ? (
            <StyledSelection items={site.items} userAgent={userAgent} />
          ) : null}
          {site.items && site.coordinates.length !== 0 ? (
            <StyledCoordinates coordinates={site.coordinates} />
          ) : null}
          <About site={site} />
          {services ? <SocialMedia services={services} /> : null}
        </Wrapper>
        {site.contact_email ? <Contact site={site} /> : null}
        {services ? <StyledSNSNavigation services={services} /> : null}
        <StyledFooter userAgent={userAgent} site={site} />
      </Page>
    )
  }
}
