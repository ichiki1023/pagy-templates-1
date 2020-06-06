import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CoolSlider from 'src/components/common/CoolSlider'

const Item = styled.div`
  margin: auto;
`

const StyledImage = styled.img`
  width: 50%;
  min-width: 240px;
  margin: 0 auto;
`

const Description = styled.span`
  width: 35%;
  min-width: 180px;
  font-size: calc(20px - 0.2em);
  color: #545454;
  margin: 0 auto;
  display: block;
  text-align: center;
`

const ModalItems = (props) => {
  const settings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: props.selectedImageIndex,
  }

  return (
    <CoolSlider settings={settings} isModal arrowIconSize={32}>
      {props.items.map((item, index) => {
        return (
          <Item key={index}>
            <StyledImage src={item.main_image_url} alt={item.main_image_url} />
            <Description>{item.description}</Description>
          </Item>
        )
      })}
    </CoolSlider>
  )
}

ModalItems.propTypes = {
  items: PropTypes.array.isRequired,
  selectedImageIndex: PropTypes.number,
}

ModalItems.defaultProps = {
  selectedImageIndex: 0,
}

export default ModalItems
