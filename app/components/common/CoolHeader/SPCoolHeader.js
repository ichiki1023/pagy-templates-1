import React from 'react'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import LanguageDropDown from 'app/components/common/LanguageDropDown'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import LanguageIcon from '@material-ui/icons/Language'
import Drawer from '@material-ui/core/Drawer'
import SNSServicesBtns from 'app/components/common/SNSServices/Buttons'
import PlanType from 'app/helpers/planType'

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

const StyledLanguageIcon = styled(LanguageIcon)`
  color: #ffffff;
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

const LanguageArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const headerHeight = 64
const offset = 20
const scrollOffset = -(headerHeight + offset)

export default class SPCoolHeader extends React.Component {
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
    const { site, fashion, services, ...props } = this.props
    const { articles = [] } = site
    const { items = [], coordinates = [] } = fashion
    const scrollDuration = 500
    const languageOptions = [
      { value: 'ja', label: 'Japanese' },
      { value: 'en', label: 'English' }
    ]

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
              <ScrollLink
                to={'home'}
                offset={scrollOffset}
                smooth
                duration={scrollDuration}
              >
                <MenuTitle>HOME</MenuTitle>
              </ScrollLink>
              {/* News */}
              {articles && articles.length !== 0 ? (
                <ScrollLink
                  to={'news'}
                  offset={scrollOffset}
                  smooth
                  duration={scrollDuration}
                >
                  <MenuTitle>NEWS</MenuTitle>
                </ScrollLink>
              ) : null}
              {/* Selection */}
              {items && items.length !== 0 ? (
                <ScrollLink
                  to={'selection'}
                  offset={scrollOffset}
                  smooth
                  duration={scrollDuration}
                >
                  <MenuTitle>SELECTION</MenuTitle>
                </ScrollLink>
              ) : null}
              {/* Coordinates */}
              {coordinates && coordinates.length !== 0 ? (
                <ScrollLink to={'coordinates'} smooth duration={scrollDuration}>
                  <MenuTitle>COORDINATES</MenuTitle>
                </ScrollLink>
              ) : null}
              <ScrollLink
                to={'about'}
                smooth
                offset={scrollOffset}
                duration={scrollDuration}
              >
                <MenuTitle>ABOUT</MenuTitle>
              </ScrollLink>
              <ChildMenuTitle>
                <ScrollLink to={'about'} smooth duration={scrollDuration}>
                  <MenuTitle>− Introduce</MenuTitle>
                </ScrollLink>
                <ScrollLink to={'map'} smooth duration={scrollDuration}>
                  <MenuTitle>− Access</MenuTitle>
                </ScrollLink>
              </ChildMenuTitle>
              {/* Contact */}
              {site.plan.id !== PlanType.trial && (
                <ScrollLink
                  to={'contact'}
                  offset={scrollOffset}
                  smooth
                  duration={scrollDuration}
                >
                  <MenuTitle>CONTACT</MenuTitle>
                </ScrollLink>
              )}
              <SectionTitle>LANGUAGE</SectionTitle>
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
              </LanguageArea>
              {services ? (
                <div>
                  <SectionTitle>FOLLOW US</SectionTitle>
                  <SNSServicesBtns services={services} />
                </div>
              ) : null}
            </MenuList>
          </SlideMenu>
        </Drawer>
        <ScrollLink to={'home'} smooth duration={scrollDuration}>
          <SiteName>{site.name}</SiteName>
        </ScrollLink>
        <MenuIconArea onClick={this.handleOpenMenu}>
          <Menu />
          <MenuText>MENU</MenuText>
        </MenuIconArea>
      </Header>
    )
  }
}
