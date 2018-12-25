import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'

class GoogleMap extends Component {
  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    }),
    zoom: PropTypes.number
  }

  static defaultProps = {
    center: {
      lat: 35.678634,
      lng: 139.767374
    },
    zoom: 16
  }

  renderMarkers (map, maps) {
    const { lat, lng } = this.props.center
    const latLng = new maps.LatLng(lat, lng)
    let marker = new maps.Marker({
      position: latLng,
      map
    })
    marker.setMap(map)
  }

  render () {
    const { center, zoom, ...props } = this.props

    return (
      <div {...props}>
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        />
      </div>
    )
  }
}

export default GoogleMap
