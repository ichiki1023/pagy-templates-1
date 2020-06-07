import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  setBusinessHour,
  isEqualAllBusinessHour,
} from 'src/helpers/businessHourUtils'

const BusinessHour = (props) => {
  const businessHour = props.businessHour
  const isEqualBusinessHour = isEqualAllBusinessHour(businessHour)
  return (
    <React.Fragment>
      {isEqualBusinessHour ? (
        <BusinessHourText>
          {setBusinessHour(businessHour.mon_start)} ~{' '}
          {setBusinessHour(businessHour.mon_end)}
        </BusinessHourText>
      ) : (
        <React.Fragment>
          {businessHour.mon_start && businessHour.mon_end ? (
            <BusinessHourText>{`月曜日 ${setBusinessHour(
              businessHour.mon_start,
            )} ~ ${setBusinessHour(businessHour.mon_end)}`}</BusinessHourText>
          ) : null}
          {businessHour.tue_start && businessHour.tue_end ? (
            <BusinessHourText>{`火曜日 ${setBusinessHour(
              businessHour.tue_start,
            )} ~ ${setBusinessHour(businessHour.tue_end)}`}</BusinessHourText>
          ) : null}
          {businessHour.wed_start && businessHour.wed_end ? (
            <BusinessHourText>{`水曜日 ${setBusinessHour(
              businessHour.wed_start,
            )} ~ ${setBusinessHour(businessHour.wed_end)}`}</BusinessHourText>
          ) : null}
          {businessHour.thu_start && businessHour.thu_end ? (
            <BusinessHourText>{`木曜日 ${setBusinessHour(
              businessHour.thu_start,
            )} ~ ${setBusinessHour(businessHour.thu_end)}`}</BusinessHourText>
          ) : null}
          {businessHour.fri_start && businessHour.fri_end ? (
            <BusinessHourText>{`金曜日 ${setBusinessHour(
              businessHour.fri_start,
            )} ~ ${setBusinessHour(businessHour.fri_end)}`}</BusinessHourText>
          ) : null}
          {businessHour.sat_start && businessHour.sat_end ? (
            <BusinessHourText>{`土曜日 ${setBusinessHour(
              businessHour.sat_start,
            )} ~ ${setBusinessHour(businessHour.sat_end)}`}</BusinessHourText>
          ) : null}
          {businessHour.sun_start && businessHour.sun_end ? (
            <BusinessHourText>{`日曜日 ${setBusinessHour(
              businessHour.sun_start,
            )} ~ ${setBusinessHour(businessHour.sun_end)}`}</BusinessHourText>
          ) : null}
          {businessHour.hol_start && businessHour.hol_end ? (
            <BusinessHourText>{`祝日 ${setBusinessHour(
              businessHour.hol_start,
            )} ~ ${setBusinessHour(businessHour.hol_end)}`}</BusinessHourText>
          ) : null}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

BusinessHour.propTypes = {
  businessHour: PropTypes.object,
}

export default BusinessHour

/**
 * style
 **/

const BusinessHourText = styled.span`
  display: block;
  color: #545454;
`
