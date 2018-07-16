import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  state = {
    isActive: false
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div className="Header">
        <nav className="navbar has-shadow is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <strong>K</strong>eepMaLink
              </a>
              <div
                className="navbar-burger burger"
                data-target="mainNav"
                onClick={this.toggleNav}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div
              className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}
              id="mainNav"
            >
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
      </div>
    )
  }
}

export default Header
