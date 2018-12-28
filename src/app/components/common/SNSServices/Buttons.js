import React from 'react'
import styled from 'styled-components'
import SNSServices, {
  BackgroundIcon
} from './SNSServices'

const StyledSNSServices = styled(SNSServices)`
  color: #ffffff;
  display: flex;
  margin-bottom: 32px;

  ${BackgroundIcon} {
    background-color: #fcfcfa;
    border-radius: 50%;
    margin: 12px 20px 12px 0;
    min-width: 48px;
    min-height: 48px;
  }
`

export default class Buttons extends React.Component {
  render () {
    const { services } = this.props
    return <StyledSNSServices services={services} iconColor={'gray'} />
  }
}
