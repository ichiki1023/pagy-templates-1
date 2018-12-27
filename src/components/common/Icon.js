import React from 'react'
import PropTypes from 'prop-types'

const staticPath = process.env.STATIC_HOST

export const iconPaths = {
  facebookWhite: `${staticPath}/icons/facebook_white.svg`,
  facebookGray: `${staticPath}/icons/facebook_gray.svg`,
  twitterWhite: `${staticPath}/icons/twitter_white.svg`,
  twitterGray: `${staticPath}/icons/twitter_gray.svg`,
  instagramWhite: `${staticPath}/icons/instagram_white.svg`,
  instagramGray: `${staticPath}/icons/instagram_gray.svg`,
  pinterestWhite: `${staticPath}/icons/pinterest_white.svg`,
  pinterestGray: `${staticPath}/icons/pinterest_gray.svg`
}

export default class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string
  }

  render () {
    // TODO SVG iconはclient側で色制御したい
    const { name, ...props } = this.props
    return <img {...props} src={iconPaths[name]} />
  }
}
