import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './containers/HomePage'
import SignupPage from './containers/SignupPage'
import SigninPage from './containers/SigninPage'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
