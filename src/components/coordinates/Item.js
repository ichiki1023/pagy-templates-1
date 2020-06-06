import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const StyledItem = styled.div`
  display: flex;
  margin-bottom: 80px;
  overflow-x: hidden;
  ${(props) =>
    props.imagePosition === 'right' &&
    css`
      flex-direction: row-reverse;
    `} @media (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 60px;
  }
`

const StyledDescription = styled.p`
  color: #545454;
  font-size: 1em;
  padding: 0 30px;
  margin-bottom: 60px;

  @media (max-width: 750px) {
    padding: 80px 16px 0 16px;
    margin-bottom: 0;
  }
`

const StyledMainImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 750px) {
    width: 100vw;
    height: calc((100vw * 4) / 3);
    border-radius: 0;
  }
`

const StyledSubPhotoImages = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-left: -50px;
  width: calc(100% + 50px);
  overflow-x: scroll;

  ${(props) =>
    props.imagePosition === 'right' &&
    css`
      flex-direction: row-reverse;
      margin-right: -50px;
      margin-left: 0px;
    `}

  @media (max-width: 750px) {
    margin: 0 auto;
    position: absolute;
    top: -30px;
    flex-direction: row;
    width: 100%;
  }
`

const ImageFilter = styled.p`
  background-color: ${(props) =>
    props.isSelectedImage ? 'transparent' : 'white'};
  margin: 0 12px;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 750px) {
    margin: 0 6px;
  }
`

const StyledSubPhotoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  opacity: ${(props) => (props.isSelectedImage ? '1' : '0.5')};

  @media (max-width: 750px) {
    width: 76px;
    height: 76px;
  }
`

const Contents = styled.div`
  position: relative;
  width: calc(100% - 300px);
  @media (max-width: 750px) {
    width: 100%;
    margin: 0 auto;
  }
`

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 100%;

  ${(props) =>
    props.imagePosition === 'right' &&
    css`
      right: 0px;
    `} @media (max-width: 750px) {
    position: inherit;
  }
`

// FIXME: 複数枚のsubImageUrlsに対応する
export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: props.selectedIndex,
    }
  }

  static propTypes = {
    description: PropTypes.string,
    subImageUrls: PropTypes.arrayOf(PropTypes.string),
    imagePosition: PropTypes.string,
    selectedIndex: PropTypes.number.isRequired,
  }

  onClickImage(index) {
    this.setState({
      selectedIndex: index,
    })
  }

  render() {
    const { description, subImageUrls, imagePosition } = this.props
    const selectedImageUrl = subImageUrls[this.state.selectedIndex]

    return (
      <StyledItem imagePosition={imagePosition}>
        <StyledMainImage src={selectedImageUrl} />
        <Contents>
          <Bottom imagePosition={imagePosition}>
            <StyledDescription>{description}</StyledDescription>
            <StyledSubPhotoImages imagePosition={imagePosition}>
              {subImageUrls.map((subPhotoUrl, index) => {
                const isSelectedImage = this.state.selectedIndex === index
                return (
                  <ImageFilter key={index} isSelectedImage={isSelectedImage}>
                    <StyledSubPhotoImage
                      onClick={() => {
                        this.onClickImage(index)
                      }}
                      isSelectedImage={isSelectedImage}
                      src={subPhotoUrl}
                    />
                  </ImageFilter>
                )
              })}
            </StyledSubPhotoImages>
          </Bottom>
        </Contents>
      </StyledItem>
    )
  }
}
