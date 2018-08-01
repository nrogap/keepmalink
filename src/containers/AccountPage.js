import React from 'react'

import AuthUserContext from '../components/AuthUserContext'
import { PasswordForgetForm } from './PasswordForgetPage'
import PasswordChangeForm from '../components/PasswordChageForm'

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: </h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
    {/* {authUser => console.log('authUser: ', authUser)} */}
  </AuthUserContext.Consumer>

export default AccountPage
