import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import DoneIcon from '@material-ui/icons/DoneOutlined'
import ErrorIcon from '@material-ui/icons/ErrorOutlined'
import Button from '@material-ui/core/Button'

const StyledDoneIcon = styled(DoneIcon)`
  && {
    margin-right: 8px;
  }
`

const StyledErrorIcon = styled(ErrorIcon)`
  && {
    color: #f44336;
    margin-right: 8px;
  }
`

const StyledSubmitButton = styled(Button)`
  && {
    width: 280px;
    height: 60px;
    padding: 0;
    margin: 50px auto 0 auto;
    color: #545454;
    background-color: #fff;
    border: 1px solid #545454;
    border-radius: 50px;
    cursor: pointer;
    outline: none;
    appearance: none;
    font-size: 16px;

    &:hover {
      color: #fff;
      background-color: #545454;
      border: 1px solid #545454;
    }

    &:disabled {
      border: 1px solid
        ${props =>
    props.success === 'true' ? '#545454' : 'rgba(84, 84, 84, 0.54)'};
    }

    @media (max-width: 750px) {
      margin: 24px auto 0 auto;
      width: 100%;
    }
  }
`

const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: #9b9b9b;

    ${StyledSubmitButton}:hover {
      color: #fff;
    }
  }
`

const ErrorMessage = styled.span`
  color: #f44336;
  display: block;
  text-align: center;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonComponent = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`

const SuccessText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: fadein;
  animation-duration: 0.8s;
  color: #545454;

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const SubmitButton = props => {
  const textMessage = () => {
    if (props.loading) {
      return <StyledCircularProgress style={{ width: 24, height: 24 }} />
    } else if (props.success) {
      return (
        <SuccessText>
          <StyledDoneIcon />
          送信が完了しました
        </SuccessText>
      )
    } else {
      return 'メッセージを送る'
    }
  }
  const message = textMessage()
  return (
    <ButtonComponent>
      <StyledSubmitButton
        type={'submit'}
        variant={'outlined'}
        disabled={props.success || props.disabled}
        success={props.success.toString()}
      >
        {message}
      </StyledSubmitButton>
      {props.error && (
        <ErrorMessage>
          <StyledErrorIcon />
          {props.error}
        </ErrorMessage>
      )}
    </ButtonComponent>
  )
}

SubmitButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool.isRequired
}

SubmitButton.defaultProps = {
  loading: false,
  disabled: false
}

export default SubmitButton
