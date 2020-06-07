import React from 'react'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import withAppContext from 'src/components/wrapper/withAppContext'
import LanguageIcon from '@material-ui/icons/Language'
import LanguageDropDown from 'src/components/common/LanguageDropDown'

const headerHeight = 64
const scrollDuration = 500

const PCCoolHeader = (props) => {
  const { site, fashion, pageName, className } = props
  const { articles = [] } = site
  const { items = [], coordinates = [] } = fashion
  const languageOptions = [
    { value: 'ja', label: 'Japanese' },
    { value: 'en', label: 'English' },
  ]
  const isHome = pageName === 'home'

  return (
    <Header className={className}>
      <HeaderContent>
        <ShopName key={'home'} isTitle>
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
        </ShopName>
        <HeaderLists>
          {/* News */}
          {articles && articles.length !== 0 ? (
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
          {/* About */}
          <HeaderList key={'about'}>
            <Link href={'/about'}>
              <a>ABOUT US</a>
            </Link>
          </HeaderList>
          {/* Contact */}
          <HeaderList key={'contact'}>
            <Link href={'/contact'}>
              <a>CONTACT</a>
            </Link>
          </HeaderList>
          <HeaderList key={'language'}>
            <Languages>
              <StyledLanguageIcon width={24} height={24} />
              <LanguageDropDown
                options={languageOptions}
                value={languageOptions[0]}
                onChange={() => {
                  // TODO: Change language
                }}
              />
            </Languages>
          </HeaderList>
        </HeaderLists>
      </HeaderContent>
    </Header>
  )
}

export default withAppContext(PCCoolHeader)

/**
 * style
 **/

const Header = styled.div`
  background-color: #000000;
  width: 100%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  display: table;
`

const HeaderContent = styled.div`
  height: 64px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  & > * {
    margin: 0 4vw;
  }
`

const HeaderLists = styled.ul`
  display: inline-block;
  list-style-type: none;
`

const HeaderList = styled.li`
  cursor: pointer;
  display: inline-block;
  padding: 0px 12px;

  a {
    font-size: 18px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
  }
`

const ShopName = styled.div`
  cursor: pointer;
  display: inline-block;

  a {
    font-size: 24px;
    display: inline-block;
    box-sizing: border-box;
    color: #ffffff;
    text-decoration: none;
  }

  &::after {
    content: '';
    position: absolute;
    padding-right: 8vw !important;
  }
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
