import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import Link from 'next/link'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'

const Section = styled.div`
  width: 54%;
  margin: 0 auto;
  margin-top: 224px;
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
  width: 150%;
  position: relative;
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
  margin-top: 40px;
  width: 100%;
  overflow: hidden;
`

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: #545454;
`

const CoordinatesPC = props => {
  const { images, ...custom } = props

  return (
    <Section name={'coordinates'} {...custom}>
      <StyledSectionTitle
        backgroundText={'COORDINATES'}
        titleText={'おすすめコーディネート'}
      />
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
