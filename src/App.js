import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import PostPage from './components/PostPage'
import ProjectPage from './components/ProjectPage'

import 'bulma/css/bulma.css'

class App extends React.Component {
  render() {
    return (
      <div className="my-app">
        <nav className="navbar is-light" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <b>K</b>eepMaLink
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
                <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>
                <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
                <a
                  className="navbar-item"
                  href="https://github.com/nrogapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Star on <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="App container">
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/posts" component={PostPage} />
          <Route path="/projects" component={ProjectPage} />
        </div>
      </div>
    )
  }
}

export default App
