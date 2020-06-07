import React from 'react'
import IsSp from 'src/components/IsSp'
import PcFooter from './PcFooter'
import SpFooter from './SpFooter'

const Footer = (props) => {
  return (
    <IsSp>
      {(matches) =>
        matches ? <SpFooter {...props} /> : <PcFooter {...props} />
      }
    </IsSp>
  )
}

export default Footer
