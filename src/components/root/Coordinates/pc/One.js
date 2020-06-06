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
  height: 100%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
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

  @media (max-width: 750px) {
    height: 48px;
  }

  p {
    text-decoration: none;
    color: #545454;
    font-size: 1.2em;
  }
`

const StyledImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`

const Texts = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 300px);
`

const Description = styled.p`
  color: #545454;
  font-size: 18px;
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: #545454;
`

const CoordinatesPC = (props) => {
  const { coordinate, image, ...custom } = props
  const description = coordinate.description
  return (
    <Section id={'coordinates'} {...custom}>
      <StyledSectionTitle
        backgroundText={'COORDINATES'}
        titleText={'おすすめコーディネート'}
      />
      <Contents>
        <Texts>
          <Description>
            {description.split('\n').map((desc, index) => {
              return (
                <span key={index}>
                  {desc}
                  <br />
                </span>
              )
            })}
          </Description>
          <Link href={'/coordinates'}>
            <StyledLink>
              <p>さらに詳しく</p>
              <StyledArrowForwardIcon />
            </StyledLink>
          </Link>
        </Texts>
        <StyledImage src={image} />
      </Contents>
    </Section>
  )
}

CoordinatesPC.propTypes = {
  coordinate: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
}

export default CoordinatesPC
