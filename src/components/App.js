import React from 'react'
import { Route, Switch } from 'react-router-dom'

import * as routes from '../constants/routes'

import Header from './Header'
import Footer from './Footer'

import AccountPage from '../containers/AccountPage'
import HomePage from '../containers/HomePage'
import LandingPage from '../containers/LandingPage'
import PasswordForgetPage from '../containers/PasswordForgetPage'
import SignInPage from '../containers/SignInPage'
import SignUpPage from '../containers/SignUpPage'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path={routes.LANDING} component={LandingPage} />
            <Route path={routes.HOME} component={HomePage} />
            <Route path={routes.SIGN_UP} component={SignUpPage} />
            <Route path={routes.SIGN_IN} component={SignInPage} />
            <Route path={routes.ACCOUNT} component={AccountPage} />
            <Route path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
