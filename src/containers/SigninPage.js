import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../firebase'

import * as routes from '../constants/routes'

import SignInForm from '../components/SignInForm'

class SignInPage extends React.Component {
  constructor(props) {
    super(props)

    this.INITIAL_STATE = {
      user: null,
      errorSignIn: null
    }
  }
  onSubmit = (data) => {
    auth.signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        this.setState(() => ({ ...this.INITIAL_STATE }))
        this.props.history.push(routes.HOME)
      })
      .catch(error => {
        this.setState({ errorSignIn: error })
      })
  }

  render() {
    return (
      <div className="SignInPage">
        Sign In
        <SignInForm onSubmit={this.onSubmit} />
        <SignUpLink />
      </div>
    )
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignInPage)
