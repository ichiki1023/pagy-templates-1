import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import CroppedImage, {
  DefaultSVGClipPath
} from 'src/components/root/Coordinates/CroppedImage'

const StyledImage = styled.img`
  width: 60%;
  min-width: 400px;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100%;
    min-width: auto;
  }
`

const StyledCroppedImg = styled(CroppedImage)`
  position: relative;
  width: 50%;
  height: auto;

  ${props =>
    props.croppedSide === 'left' &&
    css`
      float: right;
      left: -4.6%;
    `};

  ${props =>
    props.croppedSide === 'right' &&
    css`
      left: 4.6%;
      float: left;
    `};

  @media (max-width: 500px) {
    width: 100%;
    left: 0;
  }
`

const AboutImages = props => {
  const { photos, ...photosProps } = props

  const Image = props => {
    return <StyledImage src={props.photo.url} />
  }

  const MultipleImages = props => {
    return (
      <div>
        <StyledCroppedImg src={props.photos[0].url} croppedSide={'right'} />
        <StyledCroppedImg src={props.photos[1].url} croppedSide={'left'} />
      </div>
    )
  }

  return (
    <div {...photosProps}>
      <DefaultSVGClipPath />
      {photos && photos.length === 1 ? (
        <Image photo={photos[0]} />
      ) : (
        <MultipleImages photos={photos} />
      )}
    </div>
  )
}

AboutImages.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  )
}

export default AboutImages
