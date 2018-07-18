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
      <div className="header">
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
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <NavLink to="/signin" activeClassName="is-active" className="navbar-item">
                        Sign In
                      </NavLink>
                    </p>
                    <p className="control">
                      <NavLink to="/signup" className="button is-info is-outlined is-hovered">
                        Sign up
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
