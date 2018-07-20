import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { auth } from '../firebase'

import Header from './Header'
import Footer from './Footer'

import AccountPage from '../containers/AccountPage'
import HomePage from '../containers/HomePage'
import LandingPage from '../containers/LandingPage'
import PasswordForgetPage from '../containers/PasswordForgetPage'
import SignInPage from '../containers/SignInPage'
import SignUpPage from '../containers/SignUpPage'

import * as routes from '../constants/routes'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }))
    })
  }

  render() {
    return (
      <div className="App">
        <Header authUser={this.state.authUser} />
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
