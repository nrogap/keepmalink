import React from 'react'
import { withRouter } from 'react-router-dom'

import { auth } from '../firebase'

import * as routes from '../constants/routes'

import SignInForm from '../components/SignInForm'
import { SignUpLink } from '../containers/SignUpPage'
import { PasswordForgetLink } from '../containers/PasswordForgetPage'

class SignInPage extends React.Component {
  constructor(props) {
    super(props)

    this.INITIAL_STATE = {
      user: null,
      error: null
    }
  }
  onSubmit = (data) => {
    auth.signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        this.setState(() => ({ ...this.INITIAL_STATE }))
        this.props.history.push(routes.HOME)
      })
      .catch(error => {
        this.setState(() => ({ error }))
      })
  }

  render() {
    return (
      <div className="SignInPage">
        Sign In
        <SignInForm onSubmit={this.onSubmit} />
        <SignUpLink />
        <PasswordForgetLink />
      </div>
    )
  }
}

export default withRouter(SignInPage)
