import React from 'react'
import IsSp from 'src/components/IsSp'
import CoordinatesPC from 'src/components/root/Coordinates/pc'
import CoordinatesSP from 'src/components/root/Coordinates/sp'

const Coordinates = (props) => {
  const { coordinates, marginTop, spMarginTop, ...custom } = props
  const images = coordinates.map((coordinate) => coordinate.main_image_url)

  return (
    <IsSp>
      {(matches) =>
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
    </IsSp>
  )
}

export default Coordinates
