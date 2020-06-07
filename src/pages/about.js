import React from 'react'
import styled from 'styled-components'
import Header from 'src/components/common/Header'
import Footer from 'src/components/common/Footer'
import SNSNavigation from 'src/components/common/SNSServices/Navigation'
import About from 'src/components/root/About'
import withAppContext from 'src/components/wrapper/withAppContext'

class AboutPage extends React.Component {
  render() {
    const { site } = this.props

    const services =
      site.facebook || site.twitter || site.instagram || site.pinterest
        ? {
            facebook: site.facebook,
            twitter: site.twitter,
            instagram: site.instagram,
            pinterest: site.pinterest,
          }
        : null

    return (
      <Page>
        <StyledHeader services={services} pageName={'about'} />
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

export default withAppContext(AboutPage)

/**
 * style
 **/

const paddingTop = 100
const Page = styled.div`
  background-color: #fcfcfa;
`

const StyledHeader = styled(Header)`
  top: 0;
  z-index: 1000;
`

const FooterWrapper = styled.div`
  margin-top: 224px;
  @media (max-width: 750px) {
    margin-top: 180px;
  }
`

const StyledFooter = styled(Footer)`
  z-index: 1000;
  position: relative;
`

const StyledSNSNavigation = styled(SNSNavigation)`
  z-index: 2;
`

const StyledAbout = styled(About)`
  padding-top: ${paddingTop}px;
`
