import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ReactSVG from 'react-svg'

const staticPath = process.env.STATIC_HOST

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
  facebook: `${staticPath}/icons/facebook.svg`,
  google: `${staticPath}/icons/google.svg`,
  twitter: `${staticPath}/icons/twitter.svg`,
  pinterest: `${staticPath}/icons/pinterest.svg`,
  instagram: `${staticPath}/icons/instagram.svg`
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
