import React from 'react'

import { auth, provider } from '../firebase/firebase'

import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword
} from '../helpers/validator'

class SignUpPage extends React.Component {
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

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user
        this.setState({
          user
        })
      })
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        })
      })
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

    this.setState({
      emailMessage: validateEmail(email),
      nameMessage: validateName(name),
      passwordMessage: validatePassword(password),
      confirmPasswordMessage: validateConfirmPassword(password, confirmPassword)
    })
  }

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
      <div className="SignUpPage">
        <div className="google-sigin">
          <h1>Fun Food Friends</h1>
          {this.state.user
            ? <button onClick={this.logout}>Log Out</button>
            : <button onClick={this.login}>Log In</button>
          }
        </div>
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

export default SignUpPage
