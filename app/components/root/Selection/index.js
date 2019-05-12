import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import Items from './Items'
import Modal from './Modal'
import withAppContext from 'app/components/wrapper/withAppContext'

// Contents幅に合わせて幅の調整を行っている(54% + 100%-contents size)
const StyledSectionTitle = styled(SectionTitle)`
  width: 54vw;
  margin: 0 auto 80px auto;

  @media (max-width: 750px) {
    width: 90%;
    margin: 0 auto 48px auto;
  }
`

const Contents = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

class Selection extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      openModal: false,
      selectedImageIndex: 0
    }
  }

  handleOpenModal = selectedImageIndex => {
    if (this.props.userAgent.isMobile) {
      return
    }
    this.setState({
      selectedImageIndex: selectedImageIndex,
      openModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      openModal: false
    })
  }

  render () {
    const { items, userAgent, className } = this.props
    return (
      <div name={'selection'} className={className}>
        <Contents>
          <StyledSectionTitle
            backgroundText={'SELECTION'}
            titleText={'おすすめアイテム'}
          />
          <Items
            userAgent={userAgent}
            items={items}
            onClickImage={this.handleOpenModal}
          />
          {!userAgent.isMobile && (
            <Modal
              open={this.state.openModal}
              selectedImageIndex={this.state.selectedImageIndex}
              handleClose={this.handleCloseModal}
              items={items}
            />
          )}
        </Contents>
      </div>
    )
  }
}

export default withAppContext(Selection)
