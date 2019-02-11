import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CoolSlider from 'app/components/common/CoolSlider'

const Item = styled.div`
  margin: auto;
`

const StyledImage = styled.img`
  width: 300px;
  margin: 0 auto;
  cursor: pointer;

  @media (max-width: 500px) {
    cursor: default;
    width: 180px;
  }
`

const Line = styled.div`
  border: 1px solid #9b9b9b;
  margin: 64px auto 48px auto;
  width: 80px;

  @media (max-width: 500px) {
    margin: 40px auto 32px auto;
    width: 64px;
  }
`

const Title = styled.span`
  width: 300px;
  display: block;
  color: #545454;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;

  @media (max-width: 500px) {
    width: 180px;
    font-size: 14px;
  }
`

class Items extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onClickImage: PropTypes.func
  }

  render () {
    const { items, onClickImage } = this.props
    const { userAgent } = this.props
    const isMobile = userAgent.isMobile

    const settings = {
      arrows: !isMobile,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1248,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 936,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 624,
          settings: {
            slidesToShow: 1.5,
            swipeToSlide: true
          }
        }
      ]
    }

    return (
      <CoolSlider settings={settings} arrowIconSize={52}>
        {items.map((item, index) => {
          return (
            <Item key={index}>
              <StyledImage
                src={item.main_image_url}
                alt={item.main_image_url}
                onClick={() => {
                  onClickImage(index)
                }}
              />
              <Line />
              <Title>{item.title}</Title>
            </Item>
          )
        })}
      </CoolSlider>
    )
  }
}

export default Items
