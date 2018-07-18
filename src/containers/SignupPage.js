import React from 'react'

class SignupPage extends React.Component {
  state = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    emailMessage: null,
    nameMessage: null,
    passwordMessage: null,
    confirmPasswordMessage: null
  }

  handleChange = (event) => {
    const value = event.target.value
    const id = event.target.id

    this.setState({
      [id]: value
    })
  }

  validate() {
    const {
      email,
      name,
      password,
      confirmPassword
    } = this.state
    const regexEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})/
    let emailMessage = null
    if (!email.match(regexEmail)) {
      emailMessage = 'Please enter a valid email address'
    }

    const regexName = /[A-z0-9 ]{3,50}$/
    let nameMessage = null
    if (!name.match(regexName)) {
      nameMessage = 'Can only contain letters and numbers'
    }

    let passwordMessage = null
    if (password.length < 8) {
      passwordMessage = 'Use 8 characters or mores'
    }

    let confirmPasswordMessage = null
    if (confirmPassword !== password) {
      confirmPasswordMessage = 'does not match the password'
    }

    this.setState({
      emailMessage,
      nameMessage,
      passwordMessage,
      confirmPasswordMessage
    })
  }

  // length is 3-50 characters
  handleSubmit = (event) => {
    event.preventDefault()

    this.validate()
  }

  render() {
    const {
      emailMessage,
      nameMessage,
      passwordMessage,
      confirmPasswordMessage
    } = this.state

    return (
      <div className="SignupPage">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${emailMessage ? 'is-danger' : ''}`}
                id="email"
                type="email"
                autoComplete="email"
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

export default SignupPage
