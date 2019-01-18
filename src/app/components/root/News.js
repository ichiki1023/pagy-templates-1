import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'

const Section = styled.div`
  position: relative;
`

const Contents = styled.div`
  width: 54%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 500px) {
    width: 90%;
  }
`

const StyledTable = styled.div`
  margin-top: 40px;
  @media (max-width: 500px) {
    margin-top: 24px;
  }
`

const StyledTableBlock = styled.div`
  display: block;
  margin-bottom: 1.5em;
`

const StyledDateText = styled.p`
  color: #9b9b9b;
  font-size: 16px;
  font-weight: normal;
  padding: 0.6em 0;
  display: inline;
  margin-right: 38px;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const StyledDescriptionText = styled.p`
  color: #545454;
  font-size: 16px;
  width: calc(100% - 138px);
  float: right;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`

const MoreLink = styled.a`
  color: #9b9b9b;
  margin-top: calc(50px - 1.5em);
  margin-right: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: #9b9b9b;
`

const News = props => {
  const { posts, ...custom } = props

  return (
    <Section name={'news'} {...custom}>
      <Contents>
        <div>
          <SectionTitle backgroundText={'NEWS'} titleText={'ニュース'} />
        </div>
        <StyledTable>
          {posts.map((post, index) => {
            return (
              <StyledTableBlock key={index}>
                <StyledDateText>{post.created_at}</StyledDateText>
                <StyledDescriptionText>{post.title}</StyledDescriptionText>
              </StyledTableBlock>
            )
          })}
        </StyledTable>
        <MoreLink href={`#`}>
          一覧を見る
          <StyledArrowForwardIcon />
        </MoreLink>
      </Contents>
    </Section>
  )
}

News.propTypes = {
  posts: PropTypes.array.isRequired
}

export default News
