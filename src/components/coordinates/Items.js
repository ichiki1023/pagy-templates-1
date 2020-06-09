import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const Items = (props) => {
  const { coordinates, ...otherProps } = props
  return (
    <div {...otherProps}>
      {coordinates.map((coordinate, index) => {
        const imageUrls = [coordinate.main_image_url].concat(
          coordinate.sub_image_urls,
        )

        return (
          <Item
            key={index}
            selectedIndex={0}
            description={coordinate.description}
            subImageUrls={imageUrls}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        )
      })}
    </div>
  )
}

Items.propTypes = {
  coordinates: PropTypes.array.isRequired,
}

export default Items
