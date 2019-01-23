import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
          <clipPath id={'clipPathLeft'} clipPathUnits={'objectBoundingBox'}>
            <polygon points='0.35 0, 1 0, 1 1, 0 1' />
          </clipPath>
        </defs>
      </StyldDefaultSVG>
      <StyldDefaultSVG>
        <defs>
          <clipPath id={'clipPathRight'} clipPathUnits={'objectBoundingBox'}>
            <polygon points='0 0, 1 0, 0.65 1, 0 1' />
          </clipPath>
        </defs>
      </StyldDefaultSVG>
    </div>
  )
}

const getClipPath = croppedSide => {
  switch (croppedSide) {
    case 'left':
      return "url('#clipPathLeft')"
    case 'right':
      return "url('#clipPathRight')"
    default:
      return null
  }
}

/**
 * clip-pathはIE、Edgeでは対応していないため、svgとして読み込で形を変えるようにする
 */
const CroppedImage = props => {
  const { src, width, height, croppedSide, ...custom } = props
  const clipPath = getClipPath(croppedSide)

  return (
    <svg clipPath={clipPath} viewBox={`0 0 ${width} ${height}`} {...custom}>
      <image xlinkHref={src} width={'100%'} height={'100%'} />
    </svg>
  )
}

CroppedImage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  croppedSide: PropTypes.string,
  src: PropTypes.string.isRequired
}

CroppedImage.defaultProps = {
  width: 480,
  height: 360
}

export default CroppedImage
