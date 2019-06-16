import React from 'react'
import styled from 'styled-components'
import CoolHeader from 'app/components/common/CoolHeader'
import CoolFooter from 'app/components/common/CoolFooter'
import SNSNavigation from 'app/components/common/SNSServices/Navigation'
import Contact from 'app/components/root/Contact'

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

const StyledContact = styled(Contact)`
  padding-top: ${paddingTop}px;
`

class ContactPage extends React.Component {
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
        <StyledHeader services={services} pageName={'contact'} />
        {services ? <StyledSNSNavigation services={services} /> : null}
        <StyledContact />
        <FooterWrapper>
          <StyledFooter />
        </FooterWrapper>
      </Page>
    )
  }
}

ContactPage.getInitialProps = () => {
  return { title: 'CONTACT' }
}

export default ContactPage
