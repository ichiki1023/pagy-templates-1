import React from 'react'
import MediaQuery from 'react-responsive'
import CoordinatesPC from 'app/components/root/Coordinates/pc'
import CoordinatesSP from 'app/components/root/Coordinates/sp'

const Coordinates = props => {
  const { coordinates, marginTop, spMarginTop, ...custom } = props
  const images = coordinates.map(coordinate => coordinate['main_image_url'])

  return (
    <MediaQuery maxWidth={500} values={{ width: 1200 }}>
      {matches =>
        matches ? (
          <CoordinatesSP
            image={images[0]}
            spMarginTop={spMarginTop}
            {...custom}
          />
        ) : (
          <CoordinatesPC
            coordinates={coordinates}
            images={images}
            marginTop={marginTop}
            {...custom}
          />
        )
      }
    </MediaQuery>
  )
}

export default Coordinates
