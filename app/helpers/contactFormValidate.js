function nameValidate (value) {
  // 必須
  if (!value) {
    return ErrorMessages.required
  }

  // 128文字以下
  if (value > 128) {
    return ErrorMessages.maxLength(128)
  }
  return null
}

function emailValidate (value) {
  // 必須
  if (!value) {
    return ErrorMessages.required
  }

  // メール
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return ErrorMessages.invalidEmail
  }
  return null
}

function contentValidate (value) {
  // 必須
  if (!value) {
    return ErrorMessages.required
  }

  // 1000文字以下
  if (value > 1000) {
    return ErrorMessages.maxLength(1000)
  }
  return null
}

export default function contactFormValidate (key, value) {
  switch (key) {
    case 'name':
      return nameValidate(value)
    case 'email':
      return emailValidate(value)
    case 'content':
      return contentValidate(value)
    default:
      throw new Error('予期せぬエラー')
  }
}

class ErrorMessages {
  static get required () {
    return '入力必須です'
  }

  static get invalidEmail () {
    return 'メールアドレスが正しくありません'
  }

  static maxLength (maxLength) {
    return `${maxLength}文字以下で入力してください`
  }
}
