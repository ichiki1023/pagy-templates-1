import React from 'react'
import IsSp from 'src/components/IsSp'
import PcHeader from './PcHeader'
import SpHeader from './SpHeader'

const Header = (props) => {
  return (
    <IsSp>
      {(matches) =>
        matches ? <SpHeader {...props} /> : <PcHeader {...props} />
      }
    </IsSp>
  )
}

export default Header
