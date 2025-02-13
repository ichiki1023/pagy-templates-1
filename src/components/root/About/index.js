import React from 'react'
import styled from 'styled-components'
import SectionTitle from 'src/components/common/SectionTitle'
import GoogleMap from 'src/components/GoogleMap'
import AboutImages from './AboutImages'
import BusinessHour from './BusinessHour'
import withAppContext from 'src/components/wrapper/withAppContext'
import MoreLink from 'src/components/common/MoreLink'

const HOLIDAYS = {
  mon: '月曜日',
  tue: '火曜日',
  wed: '水曜日',
  thu: '木曜日',
  fri: '金曜日',
  sat: '土曜日',
  sun: '日曜日',
  holiday: '祝日',
}

const About = (props) => {
  const {
    site,
    site: { address, holiday },
    className,
    pageName,
  } = props
  const isHome = pageName === 'home'

  const holidays = Object.keys(holiday).filter((key) => holiday[key])
  const holidayText =
    holidays.length !== 0
      ? holidays.map((key) => HOLIDAYS[key]).join(', ')
      : 'なし'

  return (
    <Section id={'about'} className={className}>
      <Contents>
        <StyledTexts>
          <StyledSectionTitle
            backgroundText={'ABOUT US'}
            titleText={'私たちについて'}
          />
          {!isHome && <StyledDescription>{site.description}</StyledDescription>}
        </StyledTexts>
        {!isHome && site.photos && site.photos.length !== 0 ? (
          <StyledAboutImages photos={site.photos} />
        ) : null}
        <StyledTable>
          <tbody>
            <tr>
              <th valign={'top'}>営業時間</th>
              <td>
                <BusinessHour businessHour={site.business_hour} />
              </td>
            </tr>
            <tr>
              <th>定休日</th>
              <td>{holidayText}</td>
            </tr>
            {address && address.postcode ? (
              <tr>
                <th valign={'top'}>住所</th>
                <td>
                  <AddressText>〒{address.postcode}</AddressText>
                  {address.address1 && (
                    <AddressText>{address.address1}</AddressText>
                  )}
                  {address.address2 && (
                    <AddressText>{address.address2}</AddressText>
                  )}
                  {address.address3 && (
                    <AddressText>{address.address3}</AddressText>
                  )}
                  {address.address4 && (
                    <AddressText>{address.address4}</AddressText>
                  )}
                  {address.address5 && (
                    <AddressText>{address.address5}</AddressText>
                  )}
                </td>
              </tr>
            ) : null}
            {address && address.station ? (
              <tr>
                <th>最寄り駅</th>
                <td>{address.station}</td>
              </tr>
            ) : null}
            {site.contact_phone ? (
              <tr>
                <th>電話</th>
                <td>{site.contact_phone}</td>
              </tr>
            ) : null}
            {site.contact_email && site.contact_email.email ? (
              <tr>
                <th>EMAIL</th>
                <td>{site.contact_email.email}</td>
              </tr>
            ) : null}
          </tbody>
        </StyledTable>
        {site.address && address.latitude && address.longitude ? (
          <MapArea id={'map'}>
            <StyledGoogleMap
              center={{
                lat: Number(address.latitude),
                lng: Number(address.longitude),
              }}
            />
          </MapArea>
        ) : null}

        {isHome && <MoreLink href={'/about'} textType={'detail'} />}
      </Contents>
    </Section>
  )
}

export default withAppContext(About)

/**
 * style
 **/

const Section = styled.div`
  position: relative;
`

const StyledSectionTitle = styled(SectionTitle)`
  @media (max-width: 750px) {
    width: 90%;
    margin: 0 auto 48px auto;
  }
`

const Contents = styled.div`
  width: 54%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 750px) {
    width: 100%;
  }
`

const StyledTexts = styled.div`
  width: 100%;
  margin: 0 auto;
`

const StyledTable = styled.table`
  margin: 50px 0;
  @media (max-width: 750px) {
    width: 90%;
    margin: 30px auto;
  }

  th {
    color: #9b9b9b;
    font-size: 18px;
    font-weight: normal;
    padding-bottom: 1.5em;
    text-align: left;

    @media (max-width: 750px) {
      display: inline-block;
      font-size: 14px;
      padding: 4px 0;
    }
  }

  td {
    color: #545454;
    font-size: 18px;
    padding-bottom: 1.5em;

    @media (max-width: 750px) {
      display: block;
      font-size: 16px;
      padding: 0;
      margin-bottom: 20px;
    }
  }
`

const StyledDescription = styled.div`
  color: #545454;
  margin-top: 40px;
  @media (max-width: 750px) {
    width: 90%;
    margin: 24px auto auto;
  }
`

const StyledAboutImages = styled(AboutImages)`
  width: 100%;
  position: relative;
  margin-top: 48px;
`

const MapArea = styled.div`
  padding-top: 70px;
  margin-top: -70px;
  width: 100%;
`

const StyledGoogleMap = styled(GoogleMap)`
  height: calc(54vw * (724 / 1024));
  width: 100%;

  @media (max-width: 750px) {
    width: 100%;
    height: 375px;
  }
`

const AddressText = styled.span`
  display: block;
`
