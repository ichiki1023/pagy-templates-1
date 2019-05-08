import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GoogleMap extends Component {
  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  }

  static defaultProps = {
    center: {
      lat: 35.678634,
      lng: 139.767374
    }
  }

  render () {
    const { center, className } = this.props

    return (
      <iframe
        className={className}
        frameborder='0'
        src={`https://maps.google.co.jp/maps?output=embed&q=${center.lat},${
          center.lng
        }`}
      />
    )
  }
}

export default GoogleMap
