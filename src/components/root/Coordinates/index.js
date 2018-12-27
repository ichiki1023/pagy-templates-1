import React from 'react'
import styled from 'styled-components'
import SectionTitle from 'src/components/common/SectionTitle'
import Link from 'next/link'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'
import MediaQuery from 'react-responsive'

const Section = styled.div`
  height: 60vh;
  min-height: 400px;
  margin-top: 224px;
  position: relative;
  overflow: hidden;
  @media (max-width: 500px) {
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
  @media (max-width: 500px) {
    width: 90%;
  }
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

  @media (max-width: 500px) {
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
  top: 0;
  display: flex;
  width: calc(100vw + (100vh / 4));
  left: -6%;

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
  width: calc(25%);
  height: auto;
  margin: 0 4px;
  display: inline-block;
  background: #fdab75;
  transform: skewX(-15deg);
  overflow: hidden;

  @media (max-width: 500px) {
    width: 100%;
    transform: none;
  }
`

const StyledImage = styled.img`
  width: 100%;
  transform: skewX(15deg) scale(2);

  @media (max-width: 500px) {
    transform: none;
  }
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: #fff;
`

export default class Coordinates extends React.Component {
  render () {
    const images = [
      `${process.env.STATIC_HOST}/images/shutterstock_730631257.jpg`,
      `${process.env.STATIC_HOST}/images/shutterstock_342317609.jpg`,
      `${process.env.STATIC_HOST}/images/shutterstock_793633075.jpg`,
      `${process.env.STATIC_HOST}/images/shutterstock_713504557.jpg`,
      `${process.env.STATIC_HOST}/images/shutterstock_1182188362.jpg`
    ]

    return (
      <Section name={'coordinates'} {...this.props}>
        <BackgroundImages>
          <MediaQuery maxWidth={500} values={{ width: 1200 }}>
            {matches =>
              matches ? (
                <BackgroundImage>
                  <StyledImage src={images[0]} />
                </BackgroundImage>
              ) : (
                images.map((image, index) => {
                  return (
                    <BackgroundImage key={index}>
                      <StyledImage src={image} />
                    </BackgroundImage>
                  )
                })
              )
            }
          </MediaQuery>
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
}
