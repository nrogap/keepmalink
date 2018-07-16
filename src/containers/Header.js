import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
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
      <div className="Header">
        <nav className="navbar is-white is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <b>K</b>eepMaLink
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
              id="mainNav"
              className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}
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
