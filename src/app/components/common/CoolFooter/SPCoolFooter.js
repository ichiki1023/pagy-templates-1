import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll/modules'

const Footer = styled.div`
  background-color: rgba(240, 240, 240, 0.8);
  width: 100%;
  height: 192px;
  display: flex;
  flex-direction: column;
  margin-top: 126px;
`

const FooterList = styled.li`
  cursor: pointer;
  text-align: center;

  a {
    font-size: 14px;
    padding: 24px 0 30px 0;
    display: block;
    text-decoration: none;
    color: #9b9b9b;
  }
`

const FooterLists = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid #d1d3cf;

  li:first-child {
    margin-right: auto;
  }
`

const CopyRights = styled.ul`
  color: #9b9b9b;
  width: 90%;
  margin: 12px auto 30px auto;
  display: flex;
  list-style: none;
  font-size: 12px;
`

const Line = styled.li`
  margin: 0 8px;
`

const StyledCopyRightText = styled.span`
  font-size: 12px;
  padding-bottom: 12px;
  color: #9b9b9b;
  text-align: center;
`

const StyledLinkText = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const SPCoolFooter = props => {
  const { site, ...otherProps } = props

  return (
    <Footer {...otherProps}>
      <FooterLists>
        <FooterList key={site.name} isTitle>
          <ScrollLink to={'home'} smooth duration={500}>
            {site.name}
          </ScrollLink>
        </FooterList>
      </FooterLists>
      <CopyRights>
        <li>
          <Link href={'#'}>
            <StyledLinkText>プライバシーポリシー</StyledLinkText>
          </Link>
        </li>
        <Line>|</Line>
        <li>
          <Link href={'#'}>
            <StyledLinkText>利用規約</StyledLinkText>
          </Link>
        </li>
      </CopyRights>
      <StyledCopyRightText>
        Copyright © 2018 Limo SELECT SHOP. <br />
        All rights reserved.
      </StyledCopyRightText>
    </Footer>
  )
}

SPCoolFooter.propTypes = {
  site: PropTypes.object.isRequired
}

export default SPCoolFooter
