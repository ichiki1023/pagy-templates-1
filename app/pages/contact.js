import React from 'react'
import styled, { css } from 'styled-components'
import CoolHeader from 'app/components/common/CoolHeader'
import CoolFooter from 'app/components/common/CoolFooter'
import SNSNavigation from 'app/components/common/SNSServices/Navigation'
import Contact from 'app/components/root/Contact'
import PlanType from 'app/helpers/planType'

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
  ${props =>
    !props.isDisplayContact &&
    css`
      position: fixed;
      bottom: 0;
    `};
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

    const isDisplayContact = site.plan.id !== PlanType.trial

    return (
      <Page>
        <StyledHeader services={services} pageName={'Contact'} />
        {services ? <StyledSNSNavigation services={services} /> : null}
        {isDisplayContact && <StyledContact />}
        <FooterWrapper>
          <StyledFooter isDisplayContact={isDisplayContact} />
        </FooterWrapper>
      </Page>
    )
  }
}

ContactPage.getInitialProps = () => {
  return { title: 'CONTACT' }
}

export default ContactPage
