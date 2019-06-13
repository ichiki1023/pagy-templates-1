import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withAppContext from 'app/components/wrapper/withAppContext'

const Section = styled.div`
  background: url(${props => props.store_front_image_url}) no-repeat center;
  background-size: cover;
  position: relative;
  height: 100vh;

  &::before {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
  }
`

const Page = styled.div`
  position: absolute;
  width: 100%;
`

const Contents = styled.div`
  width: 54%;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    width: 90%;
  }
`

const TitleContents = styled.div`
  color: #ffffff;
  h3 {
    font-size: 48px;

    @media (max-width: 750px) {
      font-size: 22px;
    }
  }
  span {
    font-size: 24px;
    font-weight: normal;
    @media (max-width: 750px) {
      font-size: 18px;
    }
  }
`

const Home = props => {
  const { site } = props
  return (
    <Section id={'home'} store_front_image_url={site.store_front_image_url}>
      <Page>
        <Contents>
          <TitleContents>
            <h3>{site.name}</h3>
            <span>{site.catch_phrase}</span>
          </TitleContents>
        </Contents>
      </Page>
    </Section>
  )
}

Home.propTypes = {
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    catch_phrase: PropTypes.string,
    store_front_image_url: PropTypes.string
  }).isRequired
}

export default withAppContext(Home)
