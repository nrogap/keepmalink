export function validateEmail(value) {
  const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})/

  const messages = []

  if (!value.match(regex)) {
    messages.push('Please enter a valid email address')
  }

  if (value.length > 50) {
    messages.push('The email addresss is too long')
  }

  if (messages.length === 0) {
    return null
  } else {
    return messages.join('. ')
  }
}

export function validateName(value) {
  const regex = /[A-z0-9 ]{3,50}$/

  const messages = []

  if (!value.match(regex)) {
    messages.push('Use only letters or numbers')
  }

  if (value.length > 50) {
    messages.push('Length is 3-50 character')
  }

  if (messages.length === 0) {
    return null
  } else {
    return messages.join('. ')
  }
}

export function validatePassword(value) {
  const messages = []

  if (value < 8) {
    messages.push('Use 8 characters or mores')
  }

  if (messages.length === 0) {
    return null
  } else {
    return messages.join('. ')
  }
}

export function validateConfirmPassword(password, confirmPassword) {
  const messages = []

  if (confirmPassword !== password) {
    messages.push('Does not match the password')
  }

  if (messages.length === 0) {
    return null
  } else {
    return messages.join('. ')
  }
}
