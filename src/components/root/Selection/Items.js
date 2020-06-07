import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'src/components/common/Slider'
import withAppContext from 'src/components/wrapper/withAppContext'

class Items extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onClickImage: PropTypes.func,
  }

  render() {
    const { items, onClickImage } = this.props

    const displayNum = 8
    const displayItems = items.slice(0, displayNum)

    const settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1248,
          settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 936,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 624,
          settings: {
            arrows: false,
            slidesToShow: 1.5,
            swipeToSlide: true,
          },
        },
      ],
    }

    return (
      <Slider settings={settings} arrowIconSize={52}>
        {displayItems.map((item, index) => {
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
      </Slider>
    )
  }
}

export default withAppContext(Items)

/**
 * style
 **/

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
