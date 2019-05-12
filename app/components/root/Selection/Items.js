import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CoolSlider from 'app/components/common/CoolSlider'
import withAppContext from 'app/components/wrapper/withAppContext'

const Item = styled.div`
  margin: auto;
`

const StyledImage = styled.img`
  width: 100%;
  display: block;
  padding: 24px;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 750px) {
    cursor: default;
  }
`

const Line = styled.div`
  border: 1px solid #9b9b9b;
  margin: 0 auto;
  width: 80px;

  @media (max-width: 750px) {
    margin: 0 auto;
    width: 48px;
  }
`

const Title = styled.span`
  width: 300px;
  display: block;
  color: #545454;
  margin: 24px auto;
  text-align: center;
  font-size: 18px;

  @media (max-width: 750px) {
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

    const settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1248,
          settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 936,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 624,
          settings: {
            arrows: false,
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

export default withAppContext(Items)
