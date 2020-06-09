import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import dynamic from 'next/dynamic'

const SlickSlider = dynamic(import('react-slick'), {
  ssr: false,
})

const NextArrow = function (props) {
  return (
    <ArrowForward className="slick-next" isModal={props.isModal}>
      <StyledArrowForwardIcon
        style={{ fontSize: props.arrowIconSize }}
        slides={props.slidesToShow}
        current={props.currentSlide}
        count={props.slideCount}
        onClick={props.onClick}
      />
    </ArrowForward>
  )
}

const PrevArrow = function (props) {
  return (
    <ArrowBack className="slick-prev" isModal={props.isModal}>
      <StyledArrowBackIcon
        style={{ fontSize: props.arrowIconSize }}
        current={props.currentSlide}
        onClick={props.onClick}
      />
    </ArrowBack>
  )
}

class Slider extends React.Component {
  sliderRef = null

  constructor(props) {
    super(props)
    const settings = props.settings
    this.state = {
      currentSlide: 0,
      slidesToScroll: settings.slidesToScroll,
      slidesToShow: settings.slidesToShow,
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      nextArrow: <NextArrow {...this.props} {...this.state} />,
      prevArrow: <PrevArrow {...this.props} />,
      ...this.props.settings,
    }

    return (
      <SlickSlider
        ref={(el) => (this.sliderRef = el)}
        {...settings}
        className={this.props.className}
      >
        {this.props.children}
      </SlickSlider>
    )
  }
}

Slider.propTypes = {
  settings: PropTypes.object,
  arrowIconSize: PropTypes.number,
}

Slider.defaultProps = {
  arrowIconSize: 32,
}

export default Slider

/**
 * style
 **/

const ArrowForward = styled.div`
  width: auto;
  height: auto;
  cursor: pointer;
  ${(props) =>
    !props.isModal &&
    css`
      top: auto;
      bottom: 10%;
    `}

  &::before {
    font-size: 0;
  }
`

const ArrowBack = styled.div`
  width: auto;
  height: auto;
  cursor: pointer;

  ${(props) =>
    !props.isModal &&
    css`
      top: auto;
      bottom: 10%;
    `}

  &::before {
    font-size: 0;
  }
`

const StyledArrowBackIcon = styled(ArrowBackIos)`
  color: ${(props) => (props.current === 0 ? '#D1D3CF' : '#9B9B9B')};
`

const StyledArrowForwardIcon = styled(ArrowForwardIos)`
  color: ${(props) =>
    props.slides + props.current >= props.count ? '#D1D3CF' : '#9B9B9B'};
`
