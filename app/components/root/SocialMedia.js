import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import SNSServices, {
  BackgroundIcon
} from 'app/components/common/SNSServices/SNSServices'

const Section = styled.div``

const StyledSectionTitle = styled(SectionTitle)`
  h3 {
    @media (max-width: 750px) {
      font-size: 40px;
    }
  }
`

const Contents = styled.div`
  width: 54%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 750px) {
    width: 90%;
  }
`

const StyledSNSServices = styled(SNSServices)`
  color: #545454;
  width: 100%;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  ${BackgroundIcon} {
    width: 160px;
    margin: 0 20px;

    @media (max-width: 1024px) {
      margin: 20px 0;
    }

    a {
      display: flex;
      width: 100%;
      text-decoration: none;
      color: #545454;
      font-size: 1em;
    }

    svg {
      width: 48px;
      height: 48px;
      position: relative;
      float: left;
    }

    p {
      float: left;
      margin-left: 12px;
      display: block;
      height: 50px;
      line-height: 50px;
    }
  }
`

const FollowUs = styled.div`
  width: 100%;

  span {
    color: #545454;
    font-size: 1.4em;
    display: block;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`

const SocialMedia = props => {
  const { services, ...custom } = props
  return (
    <Section id={'socialMedia'} {...custom}>
      <Contents>
        <StyledSectionTitle
          backgroundText={'SOCIAL MEDIA'}
          titleText={'ソーシャルメディア'}
        />
        <FollowUs>
          <span>FOLLOW US</span>
          <StyledSNSServices
            services={services}
            iconSize={48}
            iconColor={'gray'}
            hasText
          />
        </FollowUs>
      </Contents>
    </Section>
  )
}

SocialMedia.propTypes = {
  services: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    pinterest: PropTypes.string
  }).isRequired
}

export default SocialMedia
