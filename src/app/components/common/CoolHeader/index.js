import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import PCCoolHeader from './PCCoolHeader'
import SPCoolHeader from './SPCoolHeader'

const CoolHeader = props => {
  const { userAgent } = props
  const width = userAgent.isMobile ? 1024 : 1920
  return (
    <MediaQuery maxWidth={1024} values={{ width: width }}>
      {matches =>
        matches ? <SPCoolHeader {...props} /> : <PCCoolHeader {...props} />
      }
    </MediaQuery>
  )
}

CoolHeader.propTypes = {
  userAgent: PropTypes.shape({
    userAgent: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired
  })
}

export default CoolHeader
