import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as ScrollLink } from 'react-scroll/modules'
import Link from 'app/components/common/MyLink'
import PlanType from 'app/helpers/planType'
// import LanguageIcon from '@material-ui/icons/Language'
// import LanguageDropDown from 'app/components/common/LanguageDropDown'

const Footer = styled.div`
  background-color: rgba(240, 240, 240, 0.8);
  width: 100%;
  height: 192px;
  display: flex;
  flex-direction: column;
  bottom: 0;
`

const Contents = styled.div`
  width: 64%;
  height: 128px;
  margin: 0 auto;
`

const FooterList = styled.li`
  cursor: pointer;
  text-align: center;

  a {
    font-size: 12px;
    display: block;
    padding: 0 8px;
    text-decoration: none;
    color: #9b9b9b;
    font-weight: bold;
  }

  ${props =>
    props.isTitle &&
    css`
      a {
        font-size: 14px;
      }
    `};
`

const FooterLists = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid #d1d3cf;

  li:first-child {
    margin-right: auto;
  }
`

const CopyRights = styled.ul`
  color: #9b9b9b;
  margin: 16px 0;
  display: flex;
  justify-content: flex-start;
  list-style: none;

  li {
    font-size: 12px;
  }

  li:last-of-type {
    font-size: 14px;
    margin-left: auto;
  }
`

const Line = styled.li`
  margin: 0 8px;
`

// const LanguageFooterList = styled(FooterList)`
//   padding: 12px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `

// const StyledLanguageIcon = styled(LanguageIcon)`
//   color: #9b9b9b;
// `

const PCCoolFooter = props => {
  const { site, fashion, pageName, ...otherProps } = props
  const { articles = [] } = site
  const { items = [], coordinates = [] } = fashion
  const scrollDuration = 500
  // const languageOptions = [
  //   { value: 'ja', label: 'Japanese' },
  //   { value: 'en', label: 'English' }
  // ]
  const isHome = pageName === 'home'

  return (
    <Footer {...otherProps}>
      <Contents>
        <FooterLists>
          <FooterList key={'name'} isTitle>
            <ScrollLink to={'home'} smooth duration={scrollDuration}>
              {site.name}
            </ScrollLink>
          </FooterList>
          {/* News */}
          {articles && articles.length !== 0 ? (
            <FooterList key={'news'}>
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
            </FooterList>
          ) : null}
          {/* Selection */}
          {items && items.length !== 0 ? (
            <FooterList key={'selection'}>
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
            </FooterList>
          ) : null}
          {/* Coordinates */}
          {coordinates && coordinates.length !== 0 ? (
            <FooterList key={'coordinates'}>
              <Link href={'/coordinates'}>
                <a>COORDINATES</a>
              </Link>
            </FooterList>
          ) : null}
          <FooterList key={'about'}>
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
          </FooterList>
          {/* Contact */}
          {site.plan.id !== PlanType.trial && (
            <FooterList key={'contact'}>
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
            </FooterList>
          )}
          {/* TODO: 多言語対応が実装されるまで非表示にする */}
          {/* <LanguageFooterList key={'language'}>
            <StyledLanguageIcon width={24} height={24} />
            <LanguageDropDown
              options={languageOptions}
              value={languageOptions[0]}
              onChange={option => {
                // TODO: 多言語対応の実装は別途対応する
                // const queryString = serialize(site)
                // Router.push(`/templates/fashions/cool?ln=${option.value}&${queryString}`)
              }}
              backgroundColor={'transparent'}
              color={'#9B9B9B'}
            />
          </LanguageFooterList> */}
        </FooterLists>
        <CopyRights>
          <li>プライバシーポリシー</li>
          <Line>|</Line>
          <li>利用規約</li>
          <li>Copyright © 2018 Limo SELECT SHOP. All rights reserved.</li>
        </CopyRights>
      </Contents>
    </Footer>
  )
}

PCCoolFooter.propTypes = {
  site: PropTypes.object.isRequired
}

export default PCCoolFooter
