import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Input = props => {
  const { className, label, type, placeholder, value, error } = props

  return (
    <div className={className}>
      <Label>{label}</Label>
      <FormControl type={type}>
        {type === 'textarea' ? (
          <StyledTextArea
            type={type}
            placeholder={placeholder}
            value={value}
            error={!!error}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onChange={props.onChange}
          />
        ) : (
          <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            error={!!error}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onChange={props.onChange}
          />
        )}
        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </FormControl>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

const inputStyle = css`
  width: 100%;
  height: 60px;
  padding-left: 10px;
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

  ${props =>
    props.error &&
    css`
      border-color: #f44336;

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

  @media (max-width: 500px) {
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

  @media (max-width: 500px) {
    font-size: 18px;
  }
`

const FormControl = styled.div`
  margin-bottom: 30px;
  width: 54%;
  min-width: 300px;
  ${props =>
    props.type === 'textarea' &&
    css`
      margin-bottom: 0;
      width: 100%;
      min-width: 400px;
    `}
`

const ErrorMessage = styled.span`
  display: block;
  margin: 8px 12px 0;
  color: #f44336;
`

export default Input
