import React from 'react'
import IsSp from 'app/components/IsSp'
import PCCoolHeader from './PCCoolHeader'
import SPCoolHeader from './SPCoolHeader'

const CoolHeader = props => {
  return (
    <IsSp>
      {matches =>
        matches ? <SPCoolHeader {...props} /> : <PCCoolHeader {...props} />
      }
    </IsSp>
  )
}

export default CoolHeader
