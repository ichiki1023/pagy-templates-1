import React from 'react'
import MediaQuery from 'react-responsive'
import CoordinatesPC from 'app/components/root/Coordinates/pc'
import CoordinatesSP from 'app/components/root/Coordinates/sp'

const Coordinates = props => {
  const { coordinates } = props
  const images = coordinates.map(coordinate => coordinate['main_image_url'])

  return (
    <MediaQuery maxWidth={500} values={{ width: 1200 }}>
      {matches =>
        matches ? (
          <CoordinatesSP image={images[0]} />
        ) : (
          <CoordinatesPC images={images} />
        )
      }
    </MediaQuery>
  )
}

export default Coordinates
