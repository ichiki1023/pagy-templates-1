import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSectionTitle = styled.div`
  position: relative;
  h3 {
    color: #f0f0f0;
    font-size: 54px;
    margin: 0;
    @media (max-width: 750px) {
      font-size: 44px;
    }
  }

  span {
    color: #545454;
    font-size: 24px;
    font-weight: normal;
    position: absolute;
    margin: 0;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    @media (max-width: 750px) {
      font-size: 16px;
    }
  }
`

const SectionTitle = ({ backgroundText, titleText, ...props }) => {
  return (
    <StyledSectionTitle {...props}>
      <h3>{backgroundText}</h3>
      <span>{titleText}</span>
    </StyledSectionTitle>
  )
}

SectionTitle.propTypes = {
  backgroundText: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
}

export default SectionTitle
