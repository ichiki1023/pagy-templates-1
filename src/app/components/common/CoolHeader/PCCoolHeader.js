import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
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
const scrollDuration = 500

const PCCoolHeader = props => {
  const { site, pageName, ...custom } = props
  const { posts, items, coordinates } = site
  const languageOptions = [
    { value: 'ja', label: 'Japanese' },
    { value: 'en', label: 'English' }
  ]
  const isHome = pageName === 'home'

  return (
    <Header {...custom}>
      <HeaderLists>
        <HeaderList key={'home'} isTitle>
          {isHome ? (
            <ScrollLink
              to={'home'}
              smooth
              offset={-headerHeight}
              duration={scrollDuration}
            >
              {site.name}
            </ScrollLink>
          ) : (
            <Link href={'/'}>
              <a>{site.name}</a>
            </Link>
          )}
        </HeaderList>
        {/* News */}
        {posts && posts.length !== 0 ? (
          <HeaderList key={'news'}>
            {isHome ? (
              <ScrollLink
                to={'news'}
                smooth
                spy
                hashSpy
                duration={scrollDuration}
              >
                NEWS
              </ScrollLink>
            ) : (
              <Link href={'/#news'}>
                <a>NEWS</a>
              </Link>
            )}
          </HeaderList>
        ) : null}
        {/* Selection */}
        {items && items.length !== 0 ? (
          <HeaderList key={'selection'}>
            {isHome ? (
              <ScrollLink
                to={'selection'}
                smooth
                spy
                hashSpy
                duration={scrollDuration}
              >
                SELECTION
              </ScrollLink>
            ) : (
              <Link href={'/#selection'}>
                <a>SELECTION</a>
              </Link>
            )}
          </HeaderList>
        ) : null}
        {/* Coordinates */}
        {coordinates && coordinates.length !== 0 ? (
          <HeaderList key={'coordinates'}>
            <Link href={'/coordinates'}>
              <a>COORDINATES</a>
            </Link>
          </HeaderList>
        ) : null}
        <HeaderList key={'about'}>
          {isHome ? (
            <ScrollLink
              to={'about'}
              smooth
              spy
              hashSpy
              duration={scrollDuration}
            >
              ABOUT US
            </ScrollLink>
          ) : (
            <Link href={'/#about'}>
              <a>ABOUT US</a>
            </Link>
          )}
        </HeaderList>
        {/* Contact */}
        {site.contact_email ? (
          <HeaderList key={'contact'}>
            {isHome ? (
              <ScrollLink
                to={'contact'}
                smooth
                spy
                hashSpy
                duration={scrollDuration}
              >
                CONTACT
              </ScrollLink>
            ) : (
              <Link href={'/#contact'}>
                <a>CONTACT</a>
              </Link>
            )}
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
