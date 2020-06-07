import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionTitle from 'src/components/common/SectionTitle'
import Link from 'next/link'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'

const screenSize = 640

const CoordinatesPC = (props) => {
  const { images, marginTop, ...custom } = props

  return (
    <Section id={'coordinates'} {...custom}>
      <BackgroundImages marginTop={marginTop}>
        {images.map((image, index) => {
          return (
            <BackgroundImage key={index}>
              <StyledImage src={image} />
            </BackgroundImage>
          )
        })}
      </BackgroundImages>
      <Contents>
        <div>
          <StyledSectionTitle
            backgroundText={'COORDINATES'}
            titleText={'おすすめコーディネート'}
          />
        </div>
        <Link href={'/coordinates'}>
          <StyledLink>
            <p>さらに詳しく</p>
            <StyledArrowForwardIcon />
          </StyledLink>
        </Link>
      </Contents>
    </Section>
  )
}

CoordinatesPC.propTypes = {
  images: PropTypes.array.isRequired,
  marginTop: PropTypes.number.isRequired,
}

export default CoordinatesPC

/**
 * style
 **/

const Section = styled.div`
  height: ${screenSize}px;
  position: relative;
  overflow: hidden;
  @media (max-width: 750px) {
    height: 100vh;
  }
`

const Contents = styled.div`
  z-index: 2;
  width: 54%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    width: 90%;
  }
`

const StyledSectionTitle = styled(SectionTitle)`
  h3 {
    color: rgba(240, 240, 240, 0.5);
  }

  span {
    color: #ffffff;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 100%;
    text-align: center;
  }
`

const StyledLink = styled.a`
  width: 32%;
  height: 68px;
  margin-top: 30px;
  max-width: 400px;
  min-width: 300px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 750px) {
    height: 48px;
  }

  p {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.2em;
  }
`

const BackgroundImages = styled.div`
  position: absolute;
  display: flex;
  width: calc(100vw + (${screenSize}px / 4));
  height: ${screenSize}px;
  top: 0;
  left: -6%;
  margin-top: ${(props) => props.marginTop}px;

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

const BackgroundImage = styled.div`
  width: 25%;
  height: auto;
  margin: 0 4px;
  display: inline-block;
  background: #fdab75;
  transform: skewX(-15deg);
  overflow: hidden;

  @media (max-width: 750px) {
    width: 100%;
    transform: none;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: ${screenSize}px;
  transform: skewX(15deg) scale(2);
  object-fit: cover;

  @media (max-width: 750px) {
    transform: none;
  }
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: #ffffff;
`
