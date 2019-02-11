import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import getConfig from 'next/config'

const publicRuntimeConfig = getConfig().publicRuntimeConfig

const MyLink = props => {
  const { href, ...custom } = props
  return (
    <Link
      href={href}
      as={`${publicRuntimeConfig.proxyPath}${href}`}
      {...custom}
    >
      {props.children}
    </Link>
  )
}

MyLink.propTypes = {
  href: PropTypes.string.isRequired
}

export default MyLink
