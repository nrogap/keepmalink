import React from 'react'

class SignupPage extends React.Component {
  state = {
    email: '',
    name: '',
    password: '',
    confirm: '',
    emailInvalid: null,
    nameInvalid: null,
    passwordInvalid: null,
    confirmPasswordInvalid: null
  }

  handleEmail = (event) => {
    const value = event.target.value

    const regex = /[\w ]{3,50}/
    const result = regex.test(value)

    if (result) {
      this.setState({
        email: value,
        emailInvalid: null
      })
    } else {
      this.setState({
        email: null,
        emailInvalid: 'length is 3 - 50 characters'
      })
    }
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div className="SignupPage">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                id="inputEmail"
                type="email"
                autoComplete="email"
                onChange={this.handleEmail} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                id="inputName"
                type="text"
                autoComplete="name" />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <p className="help is-success">This name is available</p>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                id="inputPassword"
                type="password"
                autoComplete="new-password" />
              <span className="icon is-small is-left">
                <i className="fas fa-key"></i>
              </span>
            </div>
            <p className="help is-success">This password is valid</p>
          </div>

          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                id="inputConfirmPassword"
                type="password"
                autoComplete="new-password" />
              <span className="icon is-small is-left">
                <i className="fas fa-key"></i>
              </span>
            </div>
            <p className="help is-success">This confirm password is invalid</p>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignupPage
