import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import CroppedImage, {
  DefaultSVGClipPath
} from 'app/components/root/Coordinates/CroppedImage'
import IsSp from 'app/components/IsSp'

const StyledImage = styled.img`
  width: 54%;
  min-width: 400px;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: 750px) {
    width: 100%;
    min-width: auto;
  }
`

const StyledMultipleImage = styled.div``

const StyledCroppedImg = styled(CroppedImage)`
  width: 60%;
  height: auto;

  ${props =>
    props.croppedSide === 'left' &&
    css`
      position: relative;
      float: right;
    `};

  ${props =>
    props.croppedSide === 'right' &&
    css`
      position: absolute;
      float: left;
    `};

  @media (max-width: 750px) {
    width: 100%;
    position: relative;
  }
`

const AboutImages = props => {
  const { photos, ...photosProps } = props
  const imageWidth = window.innerWidth * 0.54 * 0.6

  const Image = props => {
    return <StyledImage src={props.photo.url} />
  }

  const MultipleImages = props => {
    return (
      <StyledMultipleImage>
        <IsSp>
          {matches => {
            return (
              <React.Fragment>
                <StyledCroppedImg
                  src={props.photos[0].url}
                  croppedSide={matches ? null : 'right'}
                  width={imageWidth}
                  height={(imageWidth * 3) / 4}
                />
                <StyledCroppedImg
                  src={props.photos[1].url}
                  croppedSide={matches ? null : 'left'}
                  width={imageWidth}
                  height={(imageWidth * 3) / 4}
                />
              </React.Fragment>
            )
          }}
        </IsSp>
      </StyledMultipleImage>
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
