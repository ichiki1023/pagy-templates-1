import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionTitle from 'src/components/common/SectionTitle'
import Link from 'src/components/common/MyLink'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'

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
  z-index: 2;
  width: 32%;
  height: 68px;
  margin-top: 30px;
  max-width: 400px;
  min-width: 300px;
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
  width: 150%;
  position: relative;

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
  left: -7%;
`

const BackgroundImage = styled.div`
  width: 25%;
  height: auto;
  margin: 0 4px;
  display: inline-block;
  background: #fdab75;
  transform: skewX(-15deg);
  overflow: hidden;
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  transform: skewX(15deg) scale(2);
  object-fit: cover;
`

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: #ffffff;
`

const CoordinatesPC = (props) => {
  const { images, ...custom } = props

  return (
    <Section id={'coordinates'} {...custom}>
      <Contents>
        <ImageWrapper>
          <BackgroundImages>
            {images.map((image, index) => {
              return (
                <BackgroundImage key={index}>
                  <StyledImage src={image} />
                </BackgroundImage>
              )
            })}
          </BackgroundImages>
        </ImageWrapper>
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
  images: PropTypes.array.isRequired,
}

export default CoordinatesPC
