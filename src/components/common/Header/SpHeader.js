import React from 'react'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import SNSServicesBtns from 'src/components/common/SNSServices/Buttons'
import withAppContext from 'src/components/wrapper/withAppContext'

const headerHeight = 64
const offset = 20
const scrollOffset = -(headerHeight + offset)

class SpHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: props.openMenu,
    }
  }

  static defaultProps = {
    openMenu: false,
  }

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    })
  }

  handleCloseMenu = () => {
    this.setState({
      openMenu: false,
    })
  }

  render() {
    const { site, fashion, pageName, services, ...props } = this.props
    const { articles = [] } = site
    const { items = [], coordinates = [] } = fashion
    const scrollDuration = 500
    const isHome = pageName === 'home'

    return (
      <Header {...props}>
        <Drawer
          open={this.state.openMenu}
          onClose={this.handleCloseMenu}
          anchor="right"
          // use transparent background
          BackdropProps={{
            style: {
              backgroundColor: 'transparent',
            },
          }}
          // change background color
          PaperProps={{
            style: {
              backgroundColor: '#545454',
            },
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
              <Link href={'/about'}>
                <MenuTitle>ABOUT</MenuTitle>
              </Link>
              <ChildMenuTitle>
                <Link href={'/about'}>
                  <MenuTitle>− Introduce</MenuTitle>
                </Link>
                <Link href={'/about#map'}>
                  <MenuTitle>− Access</MenuTitle>
                </Link>
              </ChildMenuTitle>
              {/* Contact */}
              <Link href={'/contact'}>
                <MenuTitle>CONTACT</MenuTitle>
              </Link>
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

export default withAppContext(SpHeader)

/**
 * style
 **/

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
