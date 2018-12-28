import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaterialModal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
import Items from './Items'

const ModalHeader = styled.div`
  width: 100%;
  height: 32px;
`

const ModalContents = styled.div`
  width: 50vw;
  max-width: 1024px;
  height: 85vh;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 48px;
  margin: auto;
  top: 30%;
  background-color: #fff;
  outline: none;
`

const ModalSlick = styled.div`
  height: calc(100% - 32px);
`

const StyledCloseIcon = styled(CloseIcon)`
  color: #888888;
  float: right;
  cursor: pointer;

  svg {
    font-size: 32px;
  }
`

const Modal = props => {
  return (
    <MaterialModal
      open={props.open}
      onClose={props.handleClose}
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <ModalContents>
        <ModalHeader>
          <StyledCloseIcon
            style={{ fontSize: 32 }}
            onClick={props.handleClose}
          />
        </ModalHeader>
        <ModalSlick>
          <Items
            items={props.items}
            selectedImageIndex={props.selectedImageIndex}
          />
        </ModalSlick>
      </ModalContents>
    </MaterialModal>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  selectedImageIndex: PropTypes.number,
  items: PropTypes.array
}

Modal.defaultProps = {
  open: false,
  selectedImageIndex: 0,
  items: []
}

export default Modal
