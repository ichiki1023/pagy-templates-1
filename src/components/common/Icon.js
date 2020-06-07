import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ReactSVG from 'react-svg'

export const iconPaths = {
  facebook: '/icons/facebook.svg',
  google: '/icons/google.svg',
  twitter: '/icons/twitter.svg',
  pinterest: '/icons/pinterest.svg',
  instagram: '/icons/instagram.svg',
}

const Icon = (props) => {
  const { name, color, ...custom } = props
  return <StyledSVG src={iconPaths[name]} color={color} {...custom} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Icon

/**
 * style
 **/

const StyledSVG = styled(ReactSVG)`
  & path {
    ${(props) =>
      props.color &&
      css`
        fill: ${props.color};
      `};
  }
`
