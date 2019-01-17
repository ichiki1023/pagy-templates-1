import React from 'react'
import PropTypes from 'prop-types'
import One from './One'
import Two from './Two'
import Three from './Three'
import Default from './Default'

/**
 * PC用のCoordinates 出し分け用Component.
 * @param props
 * @returns {*}
 * @constructor
 */
const CoordinatesPC = props => {
  const { coordinates, images } = props

  switch (images.length) {
    case 1:
      return <One coordinate={coordinates[0]} image={images[0]} />
    case 2:
      return <Two images={images.slice(0, 2)} />
    case 3:
      return <Three images={images.slice(0, 3)} />
    case 4:
      return <Default images={images.slice(0, 4)} />
    default:
      return <Default images={images.slice(0, 5)} />
  }
}

CoordinatesPC.propTypes = {
  images: PropTypes.array.isRequired,
  coordinates: PropTypes.array.isRequired
}

export default CoordinatesPC
