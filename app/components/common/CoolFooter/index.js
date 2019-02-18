import React from 'react'
import MediaQuery from 'react-responsive'
import PCCoolFooter from './PCCoolFooter'
import SPCoolFooter from './SPCoolFooter'
import PropTypes from 'prop-types'

const CoolFooter = props => {
  const { userAgent, ...custom } = props
  const width = userAgent.isMobile ? 375 : 1200
  return (
    // valuesの設定値がServer Side Rendering時のdefault値となる
    <MediaQuery maxWidth={500} values={{ width: width }}>
      {matches =>
        matches ? <SPCoolFooter {...custom} /> : <PCCoolFooter {...custom} />
      }
    </MediaQuery>
  )
}

CoolFooter.propTypes = {
  userAgent: PropTypes.shape({
    userAgent: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired
  })
}

export default CoolFooter
