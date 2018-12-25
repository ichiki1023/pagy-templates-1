import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'src/components/slick-custom.css'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'

const ArrowForward = styled.div`
  width: auto;
  height: auto;
  cursor: pointer;

  &::before {
    font-size: 0;
  }
`

const ArrowBack = styled.div`
  width: auto;
  height: auto;
  cursor: pointer;

  &::before {
    font-size: 0;
  }
`

const StyledArrowBackIcon = styled(ArrowBackIos)`
  color: ${props => (props.current === 0 ? '#D1D3CF' : '#9B9B9B')};
`

const StyledArrowForwardIcon = styled(ArrowForwardIos)`
  color: ${props =>
    props.slides + props.current === props.count ? '#D1D3CF' : '#9B9B9B'};
`

const NextArrow = function (props) {
  return (
    <ArrowForward className='slick-next'>
      <StyledArrowForwardIcon
        style={{ fontSize: props.arrowIconSize }}
        slides={props.settings.slidesToShow}
        current={props.currentSlide}
        count={props.slideCount}
        onClick={props.onClick}
      />
    </ArrowForward>
  )
}

const PrevArrow = function (props) {
  return (
    <ArrowBack className='slick-prev'>
      <StyledArrowBackIcon
        style={{ fontSize: props.arrowIconSize }}
        current={props.currentSlide}
        onClick={props.onClick}
      />
    </ArrowBack>
  )
}

const CoolSlider = props => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    nextArrow: <NextArrow {...props} />,
    prevArrow: <PrevArrow {...props} />,
    ...props.settings
  }

  return <Slider {...settings}>{props.children}</Slider>
}

CoolSlider.propTypes = {
  settings: PropTypes.object,
  arrowIconSize: PropTypes.number
}

CoolSlider.defaultProps = {
  arrowIconSize: 32
}

export default CoolSlider
