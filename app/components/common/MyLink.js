import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const MyLink = props => {
  const { href, ...custom } = props
  const host = window.location.hostname
  // テンプレートのpreviewの場合はproxyPathを付ける
  const asPath =
    host === process.env.WEB_HOST && `${process.env.PROXY_PATH}${href}`
  return (
    <Link href={href} as={asPath} {...custom}>
      {props.children}
    </Link>
  )
}

MyLink.propTypes = {
  href: PropTypes.string.isRequired
}

export default MyLink
