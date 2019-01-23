import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import Link from 'next/link'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'
import CroppedImage, {
  DefaultSVGClipPath
} from 'app/components/root/Coordinates/CroppedImage'

const Section = styled.div`
  width: 54%;
  margin: 0 auto;
`

const Contents = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

const TextWrapper = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const StyledSectionTitle = styled(SectionTitle)`
  h1 {
    color: rgba(240, 240, 240, 0.5);
  }

  h3 {
    color: #ffffff;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 100%;
    text-align: center;
  }
`

const StyledLink = styled.a`
  z-index: 2;
  width: 32%;
  height: 68px;
  max-width: 400px;
  min-width: 300px;
  margin-top: 30px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.2em;
  }
`

const BackgroundImages = styled.div`
  width: 100%;
  overflow-y: hidden;
  position: relative;
  height: calc(54vw * (320 / 480));

  &::before {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
  }
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: #ffffff;
`

const StyledCroppedImg = styled(CroppedImage)`
  width: 55%;
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
`

const CoordinatesPC = props => {
  const { images, ...custom } = props

  return (
    <Section name={'coordinates'} {...custom}>
      <DefaultSVGClipPath />
      <Contents>
        <BackgroundImages>
          {images.map((image, index) => {
            return (
              <StyledCroppedImg
                key={index}
                src={image}
                croppedSide={index === 0 ? 'right' : 'left'}
              />
            )
          })}
        </BackgroundImages>
        <TextWrapper>
          <StyledSectionTitle
            backgroundText={'COORDINATES'}
            titleText={'おすすめコーディネート'}
          />
          <Link href={'/coordinates'}>
            <StyledLink>
              <p>さらに詳しく</p>
              <StyledArrowForwardIcon />
            </StyledLink>
          </Link>
        </TextWrapper>
      </Contents>
    </Section>
  )
}

CoordinatesPC.propTypes = {
  images: PropTypes.array.isRequired
}

export default CoordinatesPC
