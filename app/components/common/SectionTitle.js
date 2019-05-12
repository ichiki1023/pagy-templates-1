import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSectionTitle = styled.div`
  position: relative;
  h1 {
    color: #f0f0f0;
    font-size: 54px;
    margin: 0;
    @media (max-width: 480px) {
      font-size: 44px;
    }
  }

  h3 {
    color: #545454;
    font-size: 24px;
    font-weight: normal;
    position: absolute;
    margin: 0;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`

export default class SectionTitle extends React.Component {
  static propTypes = {
    backgroundText: PropTypes.string.isRequired,
    titleText: PropTypes.string.isRequired
  }

  render () {
    const { backgroundText, titleText, ...props } = this.props
    return (
      <StyledSectionTitle {...props}>
        <h1>{backgroundText}</h1>
        <h3>{titleText}</h3>
      </StyledSectionTitle>
    )
  }
}
