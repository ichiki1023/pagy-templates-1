import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Icon from 'app/components/common/Icon'

/**
 * 拡張用のstyled-component. 親のComponentで${BackgroundIcon}する
 */
export const BackgroundIcon = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  ${props =>
    props.iconSize &&
    css`
      width: ${props.iconSize}px;
      height: ${props.iconSize}px;
    `};
`

export const StyledIcon = styled(Icon)`
  & svg {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`

const snsServices = {
  facebook: {
    name: 'Facebook',
    url: 'https://www.facebook.com'
  },
  twitter: {
    name: 'Twitter',
    url: 'https://twitter.com'
  },
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com'
  },
  pinterest: {
    name: 'Pinterest',
    url: 'https://www.pinterest.com'
  }
}

const SNSServices = props => {
  const { iconSize, iconColor, services, hasText, ...otherProps } = props

  // service objectから指定されているidのみ抽出
  const formattedServices = Object.keys(services)
    .map(serviceName => {
      const serviceId = services[serviceName]
      if (serviceId) {
        return {
          id: serviceId,
          url: `${snsServices[serviceName].url}/${serviceId}`,
          iconName: serviceName,
          iconColor: iconColor,
          name: snsServices[serviceName].name
        }
      }
    })
    .filter(service => service)

  return (
    <div {...otherProps}>
      {formattedServices.map(service => {
        return (
          <BackgroundIcon key={service.id} iconSize={iconSize}>
            <a href={`${service.url}`} target={'_blank'}>
              <StyledIcon name={service.iconName} color={service.iconColor} />
              {hasText ? <p>{service.name}</p> : null}
            </a>
          </BackgroundIcon>
        )
      })}
    </div>
  )
}

SNSServices.propTypes = {
  services: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    pinterest: PropTypes.string
  }),
  iconSize: PropTypes.number,
  iconColor: PropTypes.string
}

SNSServices.defaultProps = {
  hasText: false
}

export default SNSServices
