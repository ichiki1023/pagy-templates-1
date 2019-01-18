import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import LanguageIcon from '@material-ui/icons/Language'
import LanguageDropDown from 'app/components/common/LanguageDropDown'

const Header = styled.div`
  background-color: #000000;
  width: 100%;
  height: 64px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
`

const HeaderList = styled.li`
  cursor: pointer;

  a {
    font-size: 18px;
    padding: 4px 12px;
    text-decoration: none;
    color: #ffffff;
  }

  ${props =>
    props.isTitle &&
    css`
      a {
        font-size: 24px;
        margin-right: calc(6vw + 8px);
      }
    `};
`

const HeaderLists = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style-type: none;
`

const Languages = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledLanguageIcon = styled(LanguageIcon)`
  color: #ffffff;
`

const headerHeight = 64
const offset = 40
const scrollOffset = -(headerHeight + offset)

const PCCoolHeader = props => {
  const { site, ...otherProps } = props
  const { posts, items, coordinates } = site
  const scrollDuration = 500
  const languageOptions = [
    { value: 'ja', label: 'Japanese' },
    { value: 'en', label: 'English' }
  ]

  return (
    <Header {...otherProps}>
      <HeaderLists>
        <HeaderList key={'home'} isTitle>
          <ScrollLink to={'home'} smooth duration={scrollDuration}>
            {site.name}
          </ScrollLink>
        </HeaderList>
        {/* News */}
        {posts && posts.length !== 0 ? (
          <HeaderList key={'news'}>
            <ScrollLink
              to={'news'}
              offset={scrollOffset}
              smooth
              duration={scrollDuration}
            >
              NEWS
            </ScrollLink>
          </HeaderList>
        ) : null}
        {/* Selection */}
        {items && items.length !== 0 ? (
          <HeaderList key={'selection'}>
            <ScrollLink
              to={'selection'}
              offset={scrollOffset}
              smooth
              duration={scrollDuration}
            >
              SELECTION
            </ScrollLink>
          </HeaderList>
        ) : null}
        {/* Coordinates */}
        {coordinates && coordinates.length !== 0 ? (
          <HeaderList key={'coordinates'}>
            <ScrollLink
              to={'coordinates'}
              offset={scrollOffset}
              smooth
              duration={scrollDuration}
            >
              COORDINATES
            </ScrollLink>
          </HeaderList>
        ) : null}
        <HeaderList key={'about'}>
          <ScrollLink
            to={'about'}
            offset={scrollOffset}
            smooth
            duration={scrollDuration}
          >
            ABOUT US
          </ScrollLink>
        </HeaderList>
        {/* Contact */}
        {site.contact_email ? (
          <HeaderList key={'contact'}>
            <ScrollLink
              to={'contact'}
              offset={-offset}
              smooth
              duration={scrollDuration}
            >
              CONTACT
            </ScrollLink>
          </HeaderList>
        ) : null}
        <HeaderList key={'language'}>
          <Languages>
            <StyledLanguageIcon width={24} height={24} />
            <LanguageDropDown
              options={languageOptions}
              value={languageOptions[0]}
              onChange={option => {
                // TODO: 多言語対応の実装は別途対応する
                // const queryString = serialize(site)
                // Router.push(`/templates/fashions/cool?ln=${option.value}&${queryString}`)
              }}
            />
          </Languages>
        </HeaderList>
      </HeaderLists>
    </Header>
  )
}

PCCoolHeader.propTypes = {
  site: PropTypes.object.isRequired
}

export default PCCoolHeader
