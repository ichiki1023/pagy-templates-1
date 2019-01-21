import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;

  g > image {
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
  }

  @media (min-width: 501px) {
    ${props =>
    props.croppedSide === 'left' &&
      css`
        g {
          clip-path: url('#clipPathLeft');
        }
      `};
    ${props =>
    props.croppedSide === 'right' &&
      css`
        g {
          clip-path: url('#clipPathRight');
        }
      `};
  }
`

const StyldDefaultSVG = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
`

/**
 * 形を変形させるためのsvg。中身としては存在せず、id紐付けで指定されたpolygon値を呼び出す
 * @returns {*}
 * @constructor
 */
export const DefaultSVGClipPath = () => {
  return (
    <div>
      <StyldDefaultSVG>
        <defs>
          <clipPath id={'clipPathLeft'} clipPathUnits='objectBoundingBox'>
            <polygon points='0.2 0, 1 0, 1 1, 0 1' />
          </clipPath>
        </defs>
      </StyldDefaultSVG>
      <StyldDefaultSVG>
        <defs>
          <clipPath id={'clipPathRight'} clipPathUnits='objectBoundingBox'>
            <polygon points='0 0, 1 0, 0.8 1, 0 1' />
          </clipPath>
        </defs>
      </StyldDefaultSVG>
    </div>
  )
}

/**
 * clip-pathはIE、Edgeでは対応していないため、svgとして読み込で形を変えるようにする
 */
export default class CroppedImage extends React.Component {
  static propTypes = {
    croppedSide: PropTypes.string,
    src: PropTypes.string.isRequired
  }

  render () {
    const { src, croppedSide, ...props } = this.props

    return (
      <StyledSVG croppedSide={croppedSide} viewBox={'0 0 320 480'} {...props}>
        <g height='100%' width='100%'>
          <image xlinkHref={src} />
        </g>
      </StyledSVG>
    )
  }
}
