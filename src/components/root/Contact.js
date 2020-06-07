import React from 'react'
import styled from 'styled-components'
import SectionTitle from 'src/components/common/SectionTitle'
import Input from 'src/components/common/Input'
import contactFormValidate from 'src/helpers/contactFormValidate'
import SubmitButton from 'src/components/common/SubmitButton'
import withAppContext from 'src/components/wrapper/withAppContext'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      requestSuccess: false,
      requestError: null,
      name: {
        ...initialInputState,
      },
      email: {
        ...initialInputState,
      },
      content: {
        ...initialInputState,
      },
    }
  }

  handleFocus = (field) => () => {
    this.setState({
      [field]: {
        ...this.state[field],
        focus: true,
      },
    })
  }

  handleBlur = (field) => (event) => {
    const errorMessage = contactFormValidate(field, event.target.value)
    this.setState({
      [field]: {
        ...this.state[field],
        error: errorMessage,
        touched: true,
        focus: false,
      },
    })
  }

  handleChange = (field) => (event) => {
    if (this.state.requestSuccess) {
      this.setState({
        requestSuccess: false,
      })
    }
    const errorMessage = contactFormValidate(field, event.target.value)
    const touched = this.state[field].touched
    this.setState({
      [field]: {
        ...this.state[field],
        value: event.target.value,
        error: touched ? errorMessage : null,
      },
    })
  }

  validate = async (event) => {
    event.preventDefault()
    this.setState({
      requestSuccess: false,
      requestError: null,
    })
    const validates = ['name', 'email', 'content']
      .map((key) => {
        const errorMessage = contactFormValidate(key, this.state[key].value)
        if (errorMessage) {
          this.setState({
            [key]: {
              ...this.state[key],
              error: errorMessage,
            },
          })
          return errorMessage
        }
        return null
      })
      .filter((value) => value)

    if (validates.length === 0) {
      await this.handleSubmit()
    }
  }

  handleSubmit = async () => {
    const { site } = this.props
    if (site.id) {
      try {
        this.setState({
          loading: true,
        })
        // TODO: Send to contact message api
        this.setState({
          loading: false,
          requestSuccess: true,
          name: { ...initialInputState },
          email: { ...initialInputState },
          content: { ...initialInputState },
        })
      } catch (error) {
        console.debug(error)
        this.setState({
          loading: false,
          requestError: '送信に失敗しました。再度お試しください。',
        })
      }
    }
  }

  render() {
    const { className } = this.props
    const disabled =
      !this.state.name.value ||
      !this.state.email.value ||
      !this.state.content.value

    return (
      <div id={'contact'} className={className}>
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
              value={this.state.name.value}
              onFocus={this.handleFocus('name')}
              onBlur={this.handleBlur('name')}
              onChange={this.handleChange('name')}
              error={this.state.name.error}
            />
            <Input
              name={'email'}
              label={'メールアドレス'}
              type={'email'}
              value={this.state.email.value}
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
              value={this.state.content.value}
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
              disabled={disabled}
            />
          </Contents>
        </form>
      </div>
    )
  }
}

export default withAppContext(Contact)

/**
 * style
 **/

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 50px;
  @media (max-width: 750px) {
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

  @media (max-width: 750px) {
    width: 90%;
  }
`

const initialInputState = {
  focus: false,
  touched: false,
  value: '',
  error: null,
}
