import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import GoogleMap from 'app/components/GoogleMap'
import AboutImages from './AboutImages'
import BusinessHour from './BusinessHour'

const Section = styled.div`
  position: relative;
`

const Contents = styled.div`
  width: 54%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const StyledTexts = styled.div`
  width: 100%;
  margin: 0 auto;
`

const StyledTable = styled.table`
  margin: 50px 0;
  @media (max-width: 500px) {
    width: 90%;
    margin: 30px auto;
  }

  th {
    color: #9b9b9b;
    font-size: 18px;
    font-weight: normal;
    padding-bottom: 1.5em;

    @media (max-width: 500px) {
      display: inline-block;
      font-size: 14px;
      padding: 4px 0;
    }
  }

  td {
    color: #545454;
    font-size: 18px;
    padding-bottom: 1.5em;

    @media (max-width: 500px) {
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
  @media (max-width: 500px) {
    margin-top: 24px;
  }
`

const StyledAboutImages = styled(AboutImages)`
  width: 100%;
  position: relative;
  margin-top: 48px;
`

const StyledGoogleMap = styled(GoogleMap)`
  height: calc(54vw * (724 / 1024));

  @media (max-width: 500px) {
    width: 100%;
    height: 375px;
  }
`

const AddressText = styled.span`
  display: block;
`

const HOLIDAYS = {
  mon: '月曜日',
  tue: '火曜日',
  wed: '水曜日',
  thu: '木曜日',
  fri: '金曜日',
  sat: '土曜日',
  sun: '日曜日',
  holiday: '祝日'
}

const About = props => {
  const {
    site,
    site: { address, holiday },
    ...custom
  } = props

  const holidays = Object.keys(holiday).filter(key => holiday[key])
  const holidayText =
    holidays.length !== 0
      ? holidays.map(key => HOLIDAYS[key]).join(', ')
      : 'なし'

  return (
    <Section name={'about'} {...custom}>
      <Contents>
        <StyledTexts>
          <SectionTitle
            backgroundText={'ABOUT US'}
            titleText={'私たちについて'}
          />
          <StyledDescription>{site.description}</StyledDescription>
        </StyledTexts>
        {site.photos && site.photos.length !== 0 ? (
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
          <StyledGoogleMap
            center={{
              lat: Number(address.latitude),
              lng: Number(address.longitude)
            }}
            name={'map'}
          />
        ) : null}
      </Contents>
    </Section>
  )
}

About.propTypes = {
  site: PropTypes.shape({
    description: PropTypes.string.isRequired,
    open: PropTypes.string,
    contact_email: PropTypes.string,
    contact_phone: PropTypes.string,
    photos: PropTypes.array,
    holiday: PropTypes.shape({
      mon: PropTypes.bool,
      tue: PropTypes.bool,
      wed: PropTypes.bool,
      thu: PropTypes.bool,
      fri: PropTypes.bool,
      sat: PropTypes.bool,
      sun: PropTypes.bool,
      holiday: PropTypes.bool
    }),
    business_hour: PropTypes.shape({
      mon_start: PropTypes.string,
      mon_end: PropTypes.string,
      tue_start: PropTypes.string,
      tue_end: PropTypes.string,
      wed_start: PropTypes.string,
      wed_end: PropTypes.string,
      thu_start: PropTypes.string,
      thu_end: PropTypes.string,
      fri_start: PropTypes.string,
      fri_end: PropTypes.string,
      sat_start: PropTypes.string,
      sat_end: PropTypes.string,
      sun_start: PropTypes.string,
      sun_end: PropTypes.string,
      hol_start: PropTypes.string,
      hol_end: PropTypes.string
    }),
    address: PropTypes.shape({
      postcode: PropTypes.string,
      latitude: PropTypes.string,
      longitude: PropTypes.string,
      country: PropTypes.string,
      station: PropTypes.string,
      address1: PropTypes.string,
      address2: PropTypes.string,
      address3: PropTypes.string,
      address4: PropTypes.string,
      address5: PropTypes.string
    })
  }).isRequired
}

export default About
