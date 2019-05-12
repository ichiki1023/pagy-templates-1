import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaterialModal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/CloseOutlined'
import Items from './Items'

const ModalContainer = styled.div`
  background-color: #fff;
  outline: none;
  border-radius: 8px;
  box-sizing: border-box;
  width: 50vw;
  max-width: 1024px;
  height: 85vh;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 750px) {
    width: 80%;
  }
`

const ModalHeader = styled.div`
  width: 100%;
`

const StyledCloseIcon = styled(CloseIcon)`
  && {
    color: #888888;
    cursor: pointer;
    font-size: 32px;
    padding: 12px;
    margin: 12px;
    float: right;
  }
`

const ModalContents = styled.div`
  width: 100%;
  padding: 48px;
  overflow-y: auto;
  box-sizing: border-box;
`

const ModalSlick = styled.div`
  height: calc(100% - 32px);
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
      <ModalContainer>
        <ModalHeader>
          <StyledCloseIcon onClick={props.handleClose} />
        </ModalHeader>
        <ModalContents>
          <ModalSlick>
            <Items
              items={props.items}
              selectedImageIndex={props.selectedImageIndex}
            />
          </ModalSlick>
        </ModalContents>
      </ModalContainer>
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
