import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import ErrorIcon from '@material-ui/icons/ErrorOutlined'

const Input = (props) => {
  const { className, label, type, placeholder, value, error } = props

  return (
    <div className={className}>
      <Label error={error}>{label}</Label>
      <FormControl type={type}>
        {type === 'textarea' ? (
          <InputWrapper>
            <StyledTextArea
              type={type}
              placeholder={placeholder}
              value={value}
              error={!!error}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
              onChange={props.onChange}
            />
            {!!error && <StyledTextAreaErrorIcon />}
          </InputWrapper>
        ) : (
          <InputWrapper>
            <StyledInput
              type={type}
              placeholder={placeholder}
              value={value}
              error={!!error}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
              onChange={props.onChange}
            />
            {!!error && <StyledTextErrorIcon />}
          </InputWrapper>
        )}
        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </FormControl>
    </div>
  )
}

const InputWrapper = styled.div`
  position: relative;
`

const StyledErrorIcon = styled(ErrorIcon)`
  && {
    position: absolute;
    font-size: 24px;
    color: #f44336;
    right: 0;
  }
`

const StyledTextErrorIcon = styled(StyledErrorIcon)`
  && {
    top: 50%;
    transform: translateY(-50%);
    padding: 0 14px;
  }
`

const StyledTextAreaErrorIcon = styled(StyledErrorIcon)`
  && {
    bottom: 0;
    padding: 14px;
    transform: none;
  }
`

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

const inputStyle = css`
  width: 100%;
  height: 60px;
  padding: 0 14px;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 18px;
  border: 1px solid #9b9b9b;
  outline: 0;

  &:hover {
    border: 1px solid #545454;
  }

  &:focus {
    border: 1px solid #545454;
    box-shadow: 0px 0px 12px rgba(84, 84, 84, 0.16);
  }

  ${(props) =>
    props.error &&
    css`
      border-color: #f44336;
      padding-right: 52px;

      &:hover,
      &:focus {
        border: 1px solid #d32f2f;
      }
      $:focus {
        box-shadow: 0px 0px 12px rgba(211, 47, 47, 0.16);
      }
    `}

  ::placeholder {
    color: #d1d3cf;
  }

  @media (max-width: 750px) {
    width: 100%;
    min-width: auto;
    font-size: 16px;
  }
`

const StyledInput = styled.input`
  ${inputStyle}
`

const StyledTextArea = styled.textarea`
  ${inputStyle}
  height: 200px;
  resize: none;
  padding-top: 10px;
  padding-left: 10px;
`

const Label = styled.p`
  font-size: 20px;
  color: #9b9b9b;
  margin-bottom: 15px;

  ${(props) =>
    props.error &&
    css`
      color: #f44336;
    `}

  @media (max-width: 750px) {
    font-size: 18px;
  }
`

const FormControl = styled.div`
  margin-bottom: 30px;
  width: 54%;
  min-width: 300px;
  ${(props) =>
    props.type === 'textarea' &&
    css`
      margin-bottom: 0;
      width: 100%;
      min-width: 400px;
    `}

  @media (max-width: 750px) {
    width: 100%;
    min-width: auto;
  }
`

const ErrorMessage = styled.span`
  display: block;
  margin: 8px 12px 0;
  color: #f44336;
`

export default Input
