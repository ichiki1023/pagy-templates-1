import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ReactSVG from 'react-svg'

const StyledSVG = styled(ReactSVG)`
  & path {
    ${props =>
    props.color &&
      css`
        fill: ${props.color};
      `};
  }
`

export const iconPaths = {
  facebook: '/static/icons/facebook.svg',
  google: '/static/icons/google.svg',
  twitter: '/static/icons/twitter.svg',
  pinterest: '/static/icons/pinterest.svg',
  instagram: '/static/icons/instagram.svg'
}

const Icon = props => {
  const { name, color, ...custom } = props
  return <StyledSVG src={iconPaths[name]} color={color} {...custom} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Icon
