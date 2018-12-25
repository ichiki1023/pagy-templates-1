import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionTitle from 'src/components/common/SectionTitle'
import Items from './Items'
import Modal from './Modal'

const Section = styled.div`
  margin-top: 224px;

  @media (max-width: 500px) {
    margin-top: 128px;
  }
`

// Contents幅に合わせて幅の調整を行っている(54% + 100%-contents size)
const StyledSectionTitle = styled(SectionTitle)`
  width: 59%;
  margin: 0 auto 80px auto;

  @media (max-width: 500px) {
    width: 90%;
    margin: 0 auto 48px auto;
  }
`

const Contents = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
  }
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
    const { items, userAgent, ...props } = this.props
    return (
      <Section name={'selection'} {...props}>
        <Contents>
          <StyledSectionTitle
            backgroundText={'SELECTION'}
            titleText={'おすすめアイテム'}
          />
          <Items userAgent={userAgent} items={items} onClickImage={this.handleOpenModal} />
          {!userAgent.isMobile && (
            <Modal
              open={this.state.openModal}
              selectedImageIndex={this.state.selectedImageIndex}
              handleClose={this.handleCloseModal}
              items={items}
            />
          )}
        </Contents>
      </Section>
    )
  }
}

export default Selection
