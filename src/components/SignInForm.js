import React from 'react'

import {
  validateEmail,
  validatePasswordSignIn
} from '../helpers/validator'

class SignInForm extends React.Component {
  state = {
    email: '',
    password: '',
    emailMessage: null,
    passwordMessage: null
  }

  isValid() {
    const { email, password } = this.state

    const emailMessage = validateEmail(email)
    const passwordMessage = validatePasswordSignIn(password)

    this.setState({ emailMessage, passwordMessage })

    return !(emailMessage || passwordMessage)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.isValid()) {
      const {
        email,
        password
      } = this.state

      this.props.onSubmit({
        email,
        password
      })
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    const id = event.target.id

    this.setState({
      [id]: value
    })
  }

  render() {
    const {
      emailMessage,
      passwordMessage,
      email,
      password
    } = this.state

    return (
      <div className="SignInForm">
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

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignInForm
