import React from 'react'
import styled, { css } from 'styled-components'
import CoolHeader from 'app/components/common/CoolHeader'
import CoolFooter from 'app/components/common/CoolFooter'
import SectionTitle from 'app/components/common/SectionTitle'
import SNSNavigation from 'app/components/common/SNSServices/Navigation'
import Items from 'app/components/coordinates/Items'
import defaultData from 'app/data/default'
import AddIcon from '@material-ui/icons/Add'
import getConfig from 'next/config'
import SitesApi from '../api/SitesApi'

const StyledHeader = styled(CoolHeader)`
  top: 0;
  z-index: 4;
`

const FooterWrapper = styled.div`
  margin-top: 224px;
  @media (max-width: 500px) {
    margin-top: 180px;
  }
`

const StyledFooter = styled(CoolFooter)`
  z-index: 4;
  position: relative;
  ${props =>
    props.isEmptyCoordinates &&
    css`
      position: fixed;
      bottom: 0;
    `};
`

const Contents = styled.div`
  width: 54%;
  margin: 100px auto 0 auto;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const StyledSectionTitle = styled(SectionTitle)`
  @media (max-width: 500px) {
    width: 90%;
    margin: 0 auto;

    h1 {
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

  @media (max-width: 500px) {
    height: 48px;
    font-size: 16px;
  }
`

const StyledAddIcon = styled(AddIcon)`
  color: #545454;
  margin-right: 12px;
`

export default class Coordinates extends React.Component {
  static async getInitialProps ({ req }) {
    const publicRuntimeConfig = getConfig().publicRuntimeConfig
    const host = req ? req.headers.host : window.location.host

    // POSTから取得したデータを利用する
    if (req && req.body && req.body.site) {
      return { site: req.body.site }
    }

    // 登録済みのサイトの情報を取得する
    if (host !== publicRuntimeConfig.host) {
      try {
        const site = await SitesApi.getSiteWithDomain(host)
        return { site: site }
      } catch {
        // なければdefaultの値
        return { site: defaultData.site }
      }
    }

    // なければdefaultの値
    return { site: defaultData.site }
  }

  render () {
    const {
      site,
      site: { coordinates },
      userAgent
    } = this.props

    const services =
      site.facebook || site.twitter || site.instagram || site.pinterest
        ? {
          facebook: site.facebook,
          twitter: site.twitter,
          instagram: site.instagram,
          pinterest: site.pinterest
        }
        : null

    const isEmptyCoordinates = !coordinates || coordinates.length === 0

    return (
      <div>
        {/* FIXME: 画面遷移をする */}
        <StyledHeader
          userAgent={userAgent}
          site={site}
          services={services}
          pageName={'coordinates'}
        />
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
            userAgent={userAgent}
            site={site}
            isEmptyCoordinates={isEmptyCoordinates}
          />
        </FooterWrapper>
      </div>
    )
  }
}
