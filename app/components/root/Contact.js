import React from 'react'
import styled from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import Input from 'app/components/common/Input'
import SendContactMessageApi from 'app/api/SendContactMessageApi'

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
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      requestSuccess: false,
      requestError: null
    }
  }

  componentDidUpdate () {
    console.log(this.state)
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { site } = this.props
    if (!site.id) {
      const data = {
        siteId: site.id,
        name: event.target.name.value,
        email: event.target.email.value,
        content: event.target.content.value
      }

      try {
        this.setState({
          loading: true,
          requestSuccess: false,
          requestError: null
        })
        await SendContactMessageApi.post({ ...data })
        this.setState({ loading: false, requestSuccess: true })
      } catch (error) {
        console.debug(error)
        this.setState({ loading: false, requestError: '送信に失敗しました' })
      }
    }
  }

  render () {
    const { site, ...custom } = this.props
    return (
      <Section name={'contact'} {...custom}>
        <form onSubmit={this.handleSubmit}>
          <Contents>
            <SectionTitle
              backgroundText={'CONTACT'}
              titleText={'お問い合わせ'}
            />
            <Input
              name={'name'}
              title={'お名前'}
              type={'text'}
              placeholder={'あなたのお名前'}
              required
              maxLength={128}
            />
            <Input
              name={'email'}
              title={'メールアドレス'}
              type={'email'}
              placeholder={'sample@sample.com'}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" // eslint-disable-line
            />
            <Input
              name={'content'}
              title={'どういたしましたか？'}
              type={'textarea'}
              placeholder={'ご質問・ご用件などお気軽にお問い合わせください。'}
              required
              maxLength={1000}
            />
            <StyledSubmitButton type={'submit'} value={'メッセージを送る'} />
          </Contents>
        </form>
      </Section>
    )
  }
}
