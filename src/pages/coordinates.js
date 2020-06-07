import React from 'react'
import styled, { css } from 'styled-components'
import Header from 'src/components/common/Header'
import Footer from 'src/components/common/Footer'
import SectionTitle from 'src/components/common/SectionTitle'
import SNSNavigation from 'src/components/common/SNSServices/Navigation'
import Items from 'src/components/coordinates/Items'
import AddIcon from '@material-ui/icons/Add'

class Coordinates extends React.Component {
  render() {
    const {
      site,
      fashion: { coordinates },
    } = this.props

    const services =
      site.facebook || site.twitter || site.instagram || site.pinterest
        ? {
            facebook: site.facebook,
            twitter: site.twitter,
            instagram: site.instagram,
            pinterest: site.pinterest,
          }
        : null

    const isEmptyCoordinates = !coordinates || coordinates.length === 0

    return (
      <Page>
        <StyledHeader services={services} pageName={'coordinates'} />
        {services ? <StyledSNSNavigation services={services} /> : null}
        <Contents>
          <StyledSectionTitle
            backgroundText={'COORDINATES'}
            titleText={'おすすめコーディネート'}
          />
          {!isEmptyCoordinates ? (
            <div>
              <StyledCoordinateItems coordinates={coordinates} />
              <NextLink href={'#'}>
                <StyledAddIcon width={24} height={24} />
                もっと見る
              </NextLink>
            </div>
          ) : null}
        </Contents>
        <FooterWrapper>
          <StyledFooter
            pageName={'coordinates'}
            isEmptyCoordinates={isEmptyCoordinates}
          />
        </FooterWrapper>
      </Page>
    )
  }
}

Coordinates.getInitialProps = () => {
  return { title: 'COORDINATES' }
}

export default Coordinates

/**
 * style
 **/

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
  ${(props) =>
    props.isEmptyCoordinates &&
    css`
      position: fixed;
      bottom: 0;
    `};
`

const Contents = styled.div`
  width: 54%;
  margin: 100px auto 0 auto;

  @media (max-width: 750px) {
    width: 100%;
    margin: 0;
    padding-top: 100px;
  }
`

const StyledSectionTitle = styled(SectionTitle)`
  @media (max-width: 750px) {
    width: 90%;
    margin: 0 auto;

    h3 {
      font-size: 42px;
    }
  }
`

const StyledSNSNavigation = styled(SNSNavigation)`
  z-index: 2;
`

const StyledCoordinateItems = styled(Items)`
  margin-top: 50px;
`

const NextLink = styled.a`
  width: 80%;
  max-width: 384px;
  height: 80px;
  font-size: 24px;
  margin: 0 auto;
  color: #545454;
  text-decoration: none;
  border: 1px solid #545454;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    height: 48px;
    font-size: 16px;
  }
`

const StyledAddIcon = styled(AddIcon)`
  color: #545454;
  margin-right: 12px;
`
