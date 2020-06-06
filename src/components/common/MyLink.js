import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import AppContext from 'src/context/AppContext'

const LinkComponent = (props) => {
  const { href, hostName, ...custom } = props
  // テンプレートのpreviewの場合はproxyPathを付ける
  const proxyPath = process.env.PROXY_PATH
  const isTemplate = hostName ? hostName === process.env.WEB_HOST : true
  const asPath = isTemplate ? `${proxyPath}${href}` : href
  return (
    <Link href={href} as={asPath} {...custom}>
      {props.children}
    </Link>
  )
}

const LinkContainer = (props) => {
  return (
    <AppContext.Consumer>
      {({ hostName }) => {
        return <LinkComponent {...props} hostName={hostName} />
      }}
    </AppContext.Consumer>
  )
}

LinkContainer.propTypes = {
  href: PropTypes.string.isRequired,
}

export default LinkContainer
