import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import PostPage from './containers/PostPage'
import ProjectPage from './containers/ProjectPage'

class App extends React.Component {
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
        <Footer />
      </div>
    )
  }
}

export default App
