import React from 'react'
import styled from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import Input from 'app/components/common/Input'

const Section = styled.div``

const Contents = styled.div`
  width: 54%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 500px) {
    width: 90%;
  }
`

const StyledSubmitButton = styled.input`
  && {
    -webkit-appearance: none;
  }
  width: 280px;
  height: 60px;
  margin: 280px auto 0 auto;
  border: 1px solid #9b9b9b;
  background-color: white;
  border-radius: 50px;
  color: #9b9b9b;
  font-size: 1em;

  @media (max-width: 500px) {
    margin: 260px auto 0 auto;
    width: 100%;
  }
`

export default class Contact extends React.Component {
  render () {
    const { site, ...custom } = this.props
    return (
      <Section name={'contact'} {...custom}>
        <Contents>
          <SectionTitle backgroundText={'CONTACT'} titleText={'お問い合わせ'} />
          <Input title={'お名前'} type={'text'} placeholder={'本上まなみ'} />
          <Input
            title={'メールアドレス'}
            type={'text'}
            placeholder={'sample@sample.com'}
          />
          <Input
            title={'どういたしましたか？'}
            type={'textarea'}
            placeholder={'ご質問・ご用件などお気軽にお問い合わせください。'}
          />
          <StyledSubmitButton type={'submit'} value={'メッセージを送る'} />
        </Contents>
      </Section>
    )
  }
}
