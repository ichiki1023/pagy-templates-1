import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import Link from 'app/components/common/MyLink'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'

const Section = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 750px) {
    height: 100vh;
  }
`

const Contents = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 48px;
  margin-top: 30px;
  max-width: 400px;
  min-width: 300px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.2em;
  }
`

const BackgroundImages = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

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
  width: 100%;
  height: auto;
  margin: 0 4px;
  display: inline-block;
  background: #fdab75;
  overflow: hidden;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  transform: none;
  object-fit: cover;
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: #fff;
`

const CoordinatesSP = props => {
  const { image, ...custom } = props

  return (
    <Section name={'coordinates'} {...custom}>
      <BackgroundImages>
        <BackgroundImage>
          <StyledImage src={image} />
        </BackgroundImage>
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

CoordinatesSP.propTypes = {
  image: PropTypes.string.isRequired
}

export default CoordinatesSP
