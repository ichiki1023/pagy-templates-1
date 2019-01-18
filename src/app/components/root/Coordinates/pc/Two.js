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
`

const StyledSectionTitle = styled(SectionTitle)`
  width: 100%;
`

const StyledLink = styled.a`
  width: 32%;
  height: 68px;
  margin-top: 30px;
  max-width: 400px;
  min-width: 300px;
  border: 1px solid #545454;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 500px) {
    height: 48px;
  }

  p {
    text-decoration: none;
    color: #545454;
    font-size: 1.2em;
  }
`

const BackgroundImages = styled.div`
  margin-top: 40px;
  display: flex;
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: #545454;
`

const StyledCroppedImg = styled(CroppedImage)`
  position: relative;
  width: 110%;
  height: auto;

  ${props =>
    props.croppedSide === 'left' &&
    css`
      float: right;
    `};

  ${props =>
    props.croppedSide === 'right' &&
    css`
      float: left;
    `};

  @media (max-width: 500px) {
    width: 100%;
    left: 0;
  }
`

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const CoordinatesPC = props => {
  const { images, ...custom } = props

  return (
    <Section name={'coordinates'} {...custom}>
      <DefaultSVGClipPath />
      <StyledSectionTitle
        backgroundText={'COORDINATES'}
        titleText={'おすすめコーディネート'}
      />
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
        <LinkWrapper>
          <Link href={'/coordinates'}>
            <StyledLink>
              <p>さらに詳しく</p>
              <StyledArrowForwardIcon />
            </StyledLink>
          </Link>
        </LinkWrapper>
      </Contents>
    </Section>
  )
}

CoordinatesPC.propTypes = {
  images: PropTypes.array.isRequired
}

export default CoordinatesPC
