import React from 'react'
import Dropdown from 'react-dropdown'
import styled from 'styled-components'

/**
 * react-dropdownのlibraryを利用しているため、cssべた書きしています。
 * @type {StyledComponentClass<any, any, *>}
 */
const StyledDropDown = styled(Dropdown)`
  .Dropdown-control {
    position: relative;
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : 'black'};
    color: ${(props) => (props.color ? props.color : 'white')};
    cursor: default;
    outline: none;
    padding: 8px 28px 8px 0px;
    transition: all 200ms ease;
    font-size: 14px;
    margin-left: 8px;
  }

  .Dropdown-arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: ' ';
    display: block;
    height: 0;
    margin-top: -ceil(2.5);
    position: absolute;
    right: 10px;
    top: 18px;
    width: 0;
  }

  .Dropdown-menu {
    background-color: white;
    border: 1px solid #9b9b9b;
    margin-top: -1px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
  }

  .Dropdown-menu .Dropdown-group > .Dropdown-title {
    padding: 8px 10px;
    color: rgba(51, 51, 51, 1);
    font-weight: bold;
  }

  .Dropdown-option {
    color: rgba(51, 51, 51, 0.8);
    cursor: pointer;
    padding: 8px 10px;
  }

  .Dropdown-option:hover {
    background-color: #f2f9fc;
    color: #545454;
  }

  .Dropdown-option.is-selected {
    background-color: #f2f9fc;
    color: #545454;
  }
`

export default (props) => {
  return <StyledDropDown {...props} />
}
