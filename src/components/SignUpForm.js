import React from 'react'

import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword
} from '../helpers/validator'

class SignUpForm extends React.Component {
  state = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    emailMessage: null,
    nameMessage: null,
    passwordMessage: null,
    confirmPasswordMessage: null,
    user: null
  }

  handleChange = (event) => {
    const value = event.target.value
    const id = event.target.id

    this.setState({
      [id]: value
    })
  }

  isValid() {
    const {
      email,
      name,
      password,
      confirmPassword
    } = this.state

    const emailMessage = validateEmail(email)
    const nameMessage = validateName(name)
    const passwordMessage = validatePassword(password)
    const confirmPasswordMessage = validateConfirmPassword(password, confirmPassword)

    this.setState({
      emailMessage,
      nameMessage,
      passwordMessage,
      confirmPasswordMessage
    })

    return !(emailMessage || nameMessage || passwordMessage || confirmPasswordMessage)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.isValid()) {
      console.log('Do register')
    }
  }

  render() {
    const {
      emailMessage,
      nameMessage,
      passwordMessage,
      confirmPasswordMessage,
      email,
      name,
      password,
      confirmPassword
    } = this.state

    return (
      <div className="SignUpPage">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${emailMessage ? 'is-danger' : ''}`}
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            {emailMessage
              ? <p className="help is-danger">{emailMessage}</p>
              : null
            }
          </div>

          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${nameMessage ? 'is-danger' : ''}`}
                id="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
            {nameMessage
              ? <p className="help is-danger">{nameMessage}</p>
              : null
            }
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${passwordMessage ? 'is-danger' : ''}`}
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-key"></i>
              </span>
            </div>
            {passwordMessage
              ? <p className="help is-danger">{passwordMessage}</p>
              : null
            }
          </div>

          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${confirmPasswordMessage ? 'is-danger' : ''}`}
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-key"></i>
              </span>
            </div>
            {confirmPasswordMessage
              ? <p className="help is-danger">{confirmPasswordMessage}</p>
              : null
            }
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUpForm
