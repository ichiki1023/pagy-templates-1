import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll/modules'
import withAppContext from 'src/components/wrapper/withAppContext'
import moment from 'moment'

const SpFooter = (props) => {
  const { site, ...otherProps } = props
  const createdYear = moment(site.created_at).year()

  return (
    <Footer {...otherProps}>
      <FooterLists>
        <FooterList key={site.name} isTitle>
          <ScrollLink to={'home'} smooth duration={500}>
            {site.name}
          </ScrollLink>
        </FooterList>
      </FooterLists>
      <StyledCopyRightText>
        Copyright © {createdYear} {site.name}. All rights reserved.
      </StyledCopyRightText>
    </Footer>
  )
}

SpFooter.propTypes = {
  site: PropTypes.object.isRequired,
}

export default withAppContext(SpFooter)

/**
 * style
 **/

const Footer = styled.div`
  background-color: rgba(240, 240, 240, 0.8);
  width: 100%;
  display: flex;
  flex-direction: column;
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

const StyledCopyRightText = styled.p`
  text-align: center;
  font-size: 12px;
  padding: 24px 0;
  box-sizing: border-box;
  color: #9b9b9b;
`
