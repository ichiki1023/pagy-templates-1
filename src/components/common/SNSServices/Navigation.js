import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SNSServices, { BackgroundIcon } from './SNSServices'
import IsSp from 'src/components/IsSp'

const Navigation = (props) => {
  const { services, className } = props

  return (
    <IsSp maxWidth={1024}>
      {(matches) =>
        !matches && (
          <Contents className={className}>
            <WrapperText>
              <StyledText>FOLLOW US</StyledText>
            </WrapperText>
            <FirstLine />
            <StyledSNSServices
              services={services}
              iconSize={48}
              iconColor={'white'}
            />
            <Line />
          </Contents>
        )
      }
    </IsSp>
  )
}

Navigation.propTypes = {
  services: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    pinterest: PropTypes.string,
  }).isRequired,
}

export default Navigation

/**
 * style
 **/

const Contents = styled.div`
  position: fixed;
  top: calc(50% + 32px); /* headerの半分を追加して調整 */
  transform: translateY(-50%);
  right: 0;
  margin-right: 10%;
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledSNSServices = styled(SNSServices)`
  color: #ffffff;
  display: flex;
  flex-direction: column;

  ${BackgroundIcon} {
    background-color: rgba(84, 84, 84, 0.6);
    border-radius: 50%;
    margin-bottom: 24px;
  }
`

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
`

const StyledText = styled.p`
  display: block;
  font-size: 1.2em;
  color: #545454;
  transform: rotate(-90deg);
`

const Line = styled.div`
  height: 6vw;
  min-height: 50px;
  max-height: 120px;
  width: 2px;
  background-color: #545454;
`

const FirstLine = styled(Line)`
  margin: 24px 0;
`
