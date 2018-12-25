import React from 'react'
import PropTypes from 'prop-types'

export const iconPaths = {
  facebook: '/static/icons/facebook.svg',
  facebookWhite: '/static/icons/facebook_white.svg',
  facebookGray: '/static/icons/facebook_gray.svg',
  google: '/static/icons/google.svg',
  twitter: '/static/icons/twitter.svg',
  twitterWhite: '/static/icons/twitter_white.svg',
  twitterGray: '/static/icons/twitter_gray.svg',
  instagramWhite: '/static/icons/instagram_white.svg',
  instagramGray: '/static/icons/instagram_gray.svg',
  pinterestWhite: '/static/icons/pinterest_white.svg',
  pinterestGray: '/static/icons/pinterest_gray.svg',
  news: '/static/icons/news.svg',
  coordinate: '/static/icons/coordinate.svg',
  item: '/static/icons/item.svg'
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
