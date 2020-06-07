function nameValidate(value) {
  // Required
  if (!value) {
    return ErrorMessages.required
  }

  // Max 128 character
  if (value.length > 80) {
    return ErrorMessages.maxLength(80)
  }
  return null
}

function emailValidate(value) {
  // Required
  if (!value) {
    return ErrorMessages.required
  }

  // Validate email
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return ErrorMessages.invalidEmail
  }
  return null
}

function contentValidate(value) {
  // Required
  if (!value) {
    return ErrorMessages.required
  }

  // Max 1600 character
  if (value.length > 1600) {
    return ErrorMessages.maxLength(1600)
  }
  return null
}

export default function contactFormValidate(key, value) {
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
  static get required() {
    return '入力必須です'
  }

  static get invalidEmail() {
    return 'メールアドレスが正しくありません'
  }

  static maxLength(maxLength) {
    return `${maxLength}文字以下で入力してください`
  }
}
