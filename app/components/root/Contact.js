import React from 'react'
import styled from 'styled-components'
import SectionTitle from 'app/components/common/SectionTitle'
import Input from 'app/components/common/Input'
import SendContactMessageApi from 'app/api/SendContactMessageApi'
import contactFormValidate from 'app/helpers/contactFormValidate'
import SubmitButton from 'app/components/common/SubmitButton'

const Section = styled.div``

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 50px;
  @media (max-width: 500px) {
    margin-bottom: 24px;
  }
`

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

const initialInputState = {
  focus: false,
  touched: false,
  value: '',
  error: null
}

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      requestSuccess: false,
      requestError: null,
      name: {
        ...initialInputState
      },
      email: {
        ...initialInputState
      },
      content: {
        ...initialInputState
      }
    }
  }

  handleFocus = field => () => {
    this.setState({
      [field]: {
        ...this.state[field],
        focus: true
      }
    })
  }
  handleBlur = field => () => {
    this.setState({
      [field]: {
        ...this.state[field],
        touched: true,
        focus: false
      }
    })
  }

  handleChange = field => event => {
    this.setState({
      [field]: {
        ...this.state[field],
        value: event.target.value,
        error: null
      }
    })
  }

  validate = async event => {
    event.preventDefault()
    const validates = ['name', 'email', 'content']
      .map(key => {
        const errorMessage = contactFormValidate(key, this.state[key].value)
        if (errorMessage) {
          this.setState({
            [key]: {
              error: errorMessage
            }
          })
          return errorMessage
        }
        return null
      })
      .filter(value => value)

    if (validates.length === 0) {
      await this.handleSubmit()
    }
  }

  handleSubmit = async () => {
    const { site } = this.props
    site.id = 2
    if (site.id) {
      const data = {
        siteId: site.id,
        name: this.state.name.value,
        email: this.state.email.value,
        content: this.state.content.value
      }

      try {
        this.setState({
          loading: true,
          requestSuccess: false,
          requestError: null
        })
        await SendContactMessageApi.post({ ...data })
        this.setState({
          loading: false,
          requestSuccess: true,
          name: { ...initialInputState },
          email: { ...initialInputState },
          content: { ...initialInputState }
        })
      } catch (error) {
        console.debug(error)
        this.setState({
          loading: false,
          requestError: '送信に失敗しました。再度お試しください。'
        })
      }
    }
  }

  render () {
    const { site, ...custom } = this.props
    return (
      <Section name={'contact'} {...custom}>
        <form onSubmit={this.validate} noValidate>
          <Contents>
            <StyledSectionTitle
              backgroundText={'CONTACT'}
              titleText={'お問い合わせ'}
            />
            <Input
              name={'name'}
              label={'お名前'}
              type={'text'}
              placeholder={'あなたのお名前'}
              onFocus={this.handleFocus('name')}
              onBlur={this.handleBlur('name')}
              onChange={this.handleChange('name')}
              error={this.state.name.error}
            />
            <Input
              name={'email'}
              label={'メールアドレス'}
              type={'email'}
              placeholder={'sample@sample.com'}
              onFocus={this.handleFocus('email')}
              onBlur={this.handleBlur('email')}
              onChange={this.handleChange('email')}
              error={this.state.email.error}
            />
            <Input
              type={'textarea'}
              name={'content'}
              label={'どういたしましたか？'}
              placeholder={'ご質問・ご用件などお気軽にお問い合わせください。'}
              onFocus={this.handleFocus('content')}
              onBlur={this.handleBlur('content')}
              onChange={this.handleChange('content')}
              error={this.state.content.error}
            />
            <SubmitButton
              loading={this.state.loading}
              success={this.state.requestSuccess}
              error={this.state.requestError}
            />
          </Contents>
        </form>
      </Section>
    )
  }
}
