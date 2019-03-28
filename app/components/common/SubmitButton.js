import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import DoneIcon from '@material-ui/icons/DoneOutlined'
import ErrorIcon from '@material-ui/icons/ErrorOutlined'

const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: #9b9b9b;
  }
`

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

const StyledSubmitButton = styled.button`
  cursor: pointer;
  outline: none;
  appearance: none;
  width: 280px;
  height: 60px;
  background-color: white;
  color: #9b9b9b;
  font-size: 16px;
  padding: 0;
  margin: 50px auto 0 auto;
  border: 1px solid #9b9b9b;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid #f00;
  }

  &:active {
    border: 1px solid #00f;
  }

  @media (max-width: 500px) {
    margin: 24px auto 0 auto;
    width: 100%;
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
`

const SubmitButton = props => {
  const textMessage = () => {
    if (props.loading) {
      return <StyledCircularProgress style={{ width: 24, height: 24 }} />
    } else if (props.success) {
      return (
        <React.Fragment>
          <StyledDoneIcon />
          送信が完了しました
        </React.Fragment>
      )
    } else {
      return 'メッセージを送る'
    }
  }
  const message = textMessage()
  return (
    <ButtonComponent>
      <StyledSubmitButton type={'submit'}>{message}</StyledSubmitButton>
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
  error: PropTypes.string
}

export default SubmitButton
