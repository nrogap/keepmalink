import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { auth } from '../firebase'

import withAuthentication from '../components/withAuthentication'

import Header from '../components/Header'
import Footer from '../components/Footer'

import AccountPage from './AccountPage'
import HomePage from './HomePage'
import LandingPage from './LandingPage'
import PasswordForgetPage from './PasswordForgetPage'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'

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
        <Header/>
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

export default withAuthentication(App)
