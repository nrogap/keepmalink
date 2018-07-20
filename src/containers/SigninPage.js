import React from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../constants/routes'

class SignInPage extends React.Component {
  render() {
    return (
      <div>
        SignInPage
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

export default SignInPage
