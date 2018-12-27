import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SNSServices, {
  BackgroundIcon
} from 'src/components/common/SNSServices/SNSServices'

const Contents = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  justify-subimageurls: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 500px) {
    /* SP時はSNSNavを非表示 */
    display: none;
  }
`

const StyledSNSServices = styled(SNSServices)`
  color: #ffffff;
  display: flex;
  flex-direction: column;

  ${BackgroundIcon} {
    background-color: rgba(84, 84, 84, 0.6);
    border-radius: 50%;
    margin: 12px 0;
    min-width: 48px;
    min-height: 48px;
  }
`

const StyledText = styled.div`
  font-size: 1.2em;
  color: #545454;
  padding: 12px;

  p {
    display: flex;
    align-items: center;
    transform: rotate(-90deg);
    height: 120px;
  }
`

const Line = styled.div`
  height: 15vh;
  max-height: 150px;
  border: 0.5px solid #545454;
`

export default class Navigation extends React.Component {
  static propTypes = {
    services: PropTypes.shape({
      twitter: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      pinterest: PropTypes.string
    }).isRequired
  }

  render () {
    const { services, ...props } = this.props

    return (
      <Contents {...props}>
        <StyledText>
          <p>FOLLOW US</p>
        </StyledText>
        <Line />
        <StyledSNSServices
          services={services}
          iconSize={48}
          iconColor={'white'}
        />
        <Line />
      </Contents>
    )
  }
}
