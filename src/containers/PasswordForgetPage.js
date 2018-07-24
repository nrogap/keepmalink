import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../firebase'

import * as routes from '../constants/routes'

const PasswordForgetPage = () =>
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>

const INITIAL_STATE = {
  email: '',
  error: null
}

export class PasswordForgetForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const { email } = this.state

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }))
      })
      .catch(error => {
        this.setState(() => ({ error }))
      })

    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    const {
      email,
      error
    } = this.state

    const isInvalid = email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={this.handleChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage
