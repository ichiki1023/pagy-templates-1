import React from 'react'
import styled from 'styled-components'
import Link from 'src/components/common/MyLink'

const MoreLinkArea = styled.span`
  float: right;
  position: absolute;
  right: 0;
  top: 0;
  height: 63px;
  line-height: 63px;
  @media (max-width: 750px) {
    position: relative;
    padding-right: 5%;
    text-align: right;
  }

  a {
    text-decoration: none;
    color: #9b9b9b;
  }
`

const MoreLink = (props) => {
  const { href, textType } = props
  const text = {
    list: '一覧を見る',
    detail: '詳しく見る ',
  }

  return (
    <MoreLinkArea>
      <Link href={href}>
        <a>{text[textType]} ＞</a>
      </Link>
    </MoreLinkArea>
  )
}

export default MoreLink
