import React from 'react'
import IsSp from 'src/components/IsSp'
import PCCoolFooter from './PCCoolFooter'
import SPCoolFooter from './SPCoolFooter'

const CoolFooter = (props) => {
  return (
    <IsSp>
      {(matches) =>
        matches ? <SPCoolFooter {...props} /> : <PCCoolFooter {...props} />
      }
    </IsSp>
  )
}

export default CoolFooter
