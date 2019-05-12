import React from 'react'
import IsSp from 'app/components/IsSp'
import PCCoolFooter from './PCCoolFooter'
import SPCoolFooter from './SPCoolFooter'

const CoolFooter = props => {
  const { ...custom } = props
  return (
    <IsSp>
      {matches =>
        matches ? <SPCoolFooter {...custom} /> : <PCCoolFooter {...custom} />
      }
    </IsSp>
  )
}

export default CoolFooter
