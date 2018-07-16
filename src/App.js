import React from 'react'
import { Route, Switch } from 'react-router-dom'

import 'bulma/css/bulma.css'

import Header from './containers/Header'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import PostPage from './containers/PostPage'
import ProjectPage from './containers/ProjectPage'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/posts" component={PostPage} />
            <Route path="/projects" component={ProjectPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
