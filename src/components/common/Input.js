import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledText = styled.p`
  font-size: 16px;
  color: #9b9b9b;
  margin-bottom: 15px;
`

const StyledInput = styled.input`
  width: 54%;
  min-width: 300px;
  margin-bottom: 30px;
  height: 60px;
  padding-left: 10px;
  border-radius: 8px;
  font-size: 1.2em;
  border: 1px solid #9b9b9b;
  outline: 0;

  @media (max-width: 500px) {
    width: 100%;
    min-width: auto;
  }

  &:focus {
    border: 1px solid #545454;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #d1d3cf;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #d1d3cf;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #d1d3cf;
  }
`

const StyledTextArea = styled.textarea`
  width: 100%;
  position: absolute;
  min-width: 400px;
  border-radius: 8px;
  height: 200px;
  resize: none;
  border: 1px solid #9b9b9b;
  outline: 0;
  font-size: 1.2em;
  padding-top: 10px;
  padding-left: 10px;

  @media (max-width: 500px) {
    width: 100%;
    min-width: auto;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #d1d3cf;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #d1d3cf;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #d1d3cf;
  }

  &:focus {
    border: 1px solid #545454;
  }
`

export default class Input extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string
  }

  static defaultProps = {
    type: 'text'
  }

  render () {
    const { title, type, placeholder } = this.props

    return (
      <div>
        <StyledText>{title}</StyledText>
        {type === 'textarea' ? (
          <StyledTextArea placeholder={placeholder} />
        ) : (
          <StyledInput type={type} placeholder={placeholder} />
        )}
      </div>
    )
  }
}
