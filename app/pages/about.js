import React from 'react'
import styled from 'styled-components'
import CoolHeader from 'app/components/common/CoolHeader'
import CoolFooter from 'app/components/common/CoolFooter'
import SNSNavigation from 'app/components/common/SNSServices/Navigation'
import About from 'app/components/root/About'

const paddingTop = 100
const Page = styled.div`
  background-color: #fcfcfa;
`

const StyledHeader = styled(CoolHeader)`
  top: 0;
  z-index: 1000;
`

const FooterWrapper = styled.div`
  margin-top: 224px;
  @media (max-width: 750px) {
    margin-top: 180px;
  }
`

const StyledFooter = styled(CoolFooter)`
  z-index: 1000;
  position: relative;
`

const StyledSNSNavigation = styled(SNSNavigation)`
  z-index: 2;
`

const StyledAbout = styled(About)`
  padding-top: ${paddingTop}px;
`

class AboutPage extends React.Component {
  render () {
    const { site } = this.props

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
        <StyledHeader services={services} pageName={'About'} />
        {services ? <StyledSNSNavigation services={services} /> : null}
        <StyledAbout />
        <FooterWrapper>
          <StyledFooter />
        </FooterWrapper>
      </Page>
    )
  }
}

AboutPage.getInitialProps = () => {
  return { title: 'ABOUT US' }
}

export default AboutPage
