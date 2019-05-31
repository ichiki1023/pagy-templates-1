import React from 'react'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'app/components/common/MyLink'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import SNSServicesBtns from 'app/components/common/SNSServices/Buttons'
import PlanType from 'app/helpers/planType'
import withAppContext from 'app/components/wrapper/withAppContext'
// import LanguageDropDown from 'app/components/common/LanguageDropDown'
// import LanguageIcon from '@material-ui/icons/Language'

const Header = styled.div`
  background-color: #000000;
  width: 100%;
  height: 48px;
  line-height: 48px;
  position: fixed;
`

const MenuIconArea = styled.div`
  float: right;
  width: 20px;
  margin-right: 16px;
  text-align: right;
`

const Menu = styled(MenuIcon)`
  color: #ffffff;
`

const Close = styled(CloseIcon)`
  color: #ffffff;
  float: right;
  height: 16px;
  margin: 16px 16px 18px 0;
`

const MenuText = styled.p`
  color: #ffffff;
  font-size: 10px;
  transform: scale(0.6);
  transform-origin: left center;
  margin-left: 2.5px;
  margin-top: -38px;
`

const SiteName = styled.span`
  vertical-align: middle;
  color: #ffffff;
  margin-left: 16px;
  font-size: 14px;
`

const SlideMenu = styled.div`
  width: 80%;
  min-width: 300px;
  background-color: #545454;
`

const MenuList = styled.div`
  margin-left: 24px;
  clear: right;
`

const FirstSectionTitle = styled.p`
  color: rgba(252, 252, 250, 0.54);
  font-size: 16px;
  margin-bottom: 24px;
`

const SectionTitle = styled.p`
  color: rgba(252, 252, 250, 0.54);
  font-size: 16px;
  margin-top: 48px;
  margin-bottom: 24px;
`

const MenuTitle = styled.li`
  list-style: none;
  color: #fcfcfa;
  margin-bottom: 20px;
`

const ChildMenuTitle = styled.div`
  margin-left: 16px;
`

// const LanguageArea = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `
// const StyledLanguageIcon = styled(LanguageIcon)`
//   color: #ffffff;
// `

const headerHeight = 64
const offset = 20
const scrollOffset = -(headerHeight + offset)

class SPCoolHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      openMenu: props.openMenu
    }
  }

  static defaultProps = {
    openMenu: false
  }

  handleOpenMenu = () => {
    this.setState({
      openMenu: true
    })
  }

  handleCloseMenu = () => {
    this.setState({
      openMenu: false
    })
  }

  render () {
    const { site, fashion, pageName, services, ...props } = this.props
    const { articles = [] } = site
    const { items = [], coordinates = [] } = fashion
    const scrollDuration = 500
    // const languageOptions = [
    //   { value: 'ja', label: 'Japanese' },
    //   { value: 'en', label: 'English' }
    // ]
    const isHome = pageName === 'home'

    return (
      <Header {...props}>
        <Drawer
          open={this.state.openMenu}
          onClose={this.handleCloseMenu}
          anchor='right'
          // use transparent background
          BackdropProps={{
            style: {
              backgroundColor: 'transparent'
            }
          }}
          // change background color
          PaperProps={{
            style: {
              backgroundColor: '#545454'
            }
          }}
        >
          <SlideMenu>
            <Close onClick={this.handleCloseMenu} />
            <MenuList>
              <FirstSectionTitle>MENU</FirstSectionTitle>
              {isHome ? (
                <ScrollLink
                  to={'home'}
                  offset={scrollOffset}
                  smooth
                  duration={scrollDuration}
                >
                  <MenuTitle>HOME</MenuTitle>
                </ScrollLink>
              ) : (
                <Link href={'/'}>
                  <MenuTitle>HOME</MenuTitle>
                </Link>
              )}
              {/* News */}
              {articles && articles.length !== 0 ? (
                isHome ? (
                  <ScrollLink
                    to={'news'}
                    offset={scrollOffset}
                    smooth
                    spy
                    hashSpy
                    duration={scrollDuration}
                  >
                    <MenuTitle>NEWS</MenuTitle>
                  </ScrollLink>
                ) : (
                  <Link href={'/#news'}>
                    <MenuTitle>NEWS</MenuTitle>
                  </Link>
                )
              ) : null}
              {/* Selection */}
              {items && items.length !== 0 ? (
                isHome ? (
                  <ScrollLink
                    to={'selection'}
                    offset={scrollOffset}
                    smooth
                    spy
                    hashSpy
                    duration={scrollDuration}
                  >
                    <MenuTitle>SELECTION</MenuTitle>
                  </ScrollLink>
                ) : (
                  <Link href={'/#selection'}>
                    <MenuTitle>SELECTION</MenuTitle>
                  </Link>
                )
              ) : null}
              {/* Coordinates */}
              {coordinates && coordinates.length !== 0 ? (
                <Link href={'/coordinates'}>
                  <MenuTitle>COORDINATES</MenuTitle>
                </Link>
              ) : null}
              {/* About */}
              {isHome ? (
                <ScrollLink
                  to={'about'}
                  offset={scrollOffset}
                  smooth
                  spy
                  hashSpy
                  duration={scrollDuration}
                >
                  <MenuTitle>ABOUT</MenuTitle>
                </ScrollLink>
              ) : (
                <Link href={'/#about'}>
                  <MenuTitle>ABOUT</MenuTitle>
                </Link>
              )}

              <ChildMenuTitle>
                {isHome ? (
                  <ScrollLink
                    to={'about'}
                    offset={scrollOffset}
                    smooth
                    spy
                    hashSpy
                    duration={scrollDuration}
                  >
                    <MenuTitle>− Introduce</MenuTitle>
                  </ScrollLink>
                ) : (
                  <Link href={'/#about'}>
                    <MenuTitle>− Introduce</MenuTitle>
                  </Link>
                )}
                {isHome ? (
                  <ScrollLink
                    to={'map'}
                    offset={scrollOffset}
                    smooth
                    spy
                    hashSpy
                    duration={scrollDuration}
                  >
                    <MenuTitle>− Access</MenuTitle>
                  </ScrollLink>
                ) : (
                  <Link href={'/#map'}>
                    <MenuTitle>− Access</MenuTitle>
                  </Link>
                )}
              </ChildMenuTitle>
              {/* Contact */}
              {site.plan.id !== PlanType.trial &&
                (isHome ? (
                  <ScrollLink
                    to={'contact'}
                    offset={scrollOffset}
                    smooth
                    spy
                    hashSpy
                    duration={scrollDuration}
                  >
                    <MenuTitle>CONTACT</MenuTitle>
                  </ScrollLink>
                ) : (
                  <Link href={'/#contact'}>
                    <MenuTitle>CONTACT</MenuTitle>
                  </Link>
                ))}
              {/* TODO: 多言語対応が実装されるまで非表示にする */}
              {/* <SectionTitle>LANGUAGE</SectionTitle>
              <LanguageArea>
                <StyledLanguageIcon width={'28px'} height={'28px'} />
                <LanguageDropDown
                  options={languageOptions}
                  value={languageOptions[0]}
                  onChange={option => {
                    // TODO: 多言語対応の実装は別途対応する
                    // const queryString = serialize(site)
                    // Router.push(`/templates/fashions/cool?ln=${option.value}&${queryString}`)
                  }}
                  backgroundColor={'transparent'}
                  color={'#FCFCFA'}
                />
              </LanguageArea> */}
              {services ? (
                <div>
                  <SectionTitle>FOLLOW US</SectionTitle>
                  <SNSServicesBtns services={services} />
                </div>
              ) : null}
            </MenuList>
          </SlideMenu>
        </Drawer>
        {isHome ? (
          <ScrollLink
            to={'home'}
            offset={scrollOffset}
            smooth
            duration={scrollDuration}
          >
            <SiteName>{site.name}</SiteName>
          </ScrollLink>
        ) : (
          <Link href={'/'}>
            <SiteName>{site.name}</SiteName>
          </Link>
        )}
        <MenuIconArea onClick={this.handleOpenMenu}>
          <Menu />
          <MenuText>MENU</MenuText>
        </MenuIconArea>
      </Header>
    )
  }
}

export default withAppContext(SPCoolHeader)
