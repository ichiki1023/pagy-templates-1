import React from 'react'
import PropTypes from 'prop-types'

const GoogleMap = (props) => {
  const { center, className } = props

  return (
    <iframe
      className={className}
      frameBorder="0"
      src={`https://maps.google.co.jp/maps?output=embed&q=${center.lat},${center.lng}`}
    />
  )
}
GoogleMap.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
}

GoogleMap.defaultProps = {
  center: {
    lat: 35.678634,
    lng: 139.767374,
  },
}

export default GoogleMap
