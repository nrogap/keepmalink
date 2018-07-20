import React from 'react'

import { auth, provider } from '../firebase'

import SignUpForm from '../components/SignUpForm'

class SignUpPage extends React.Component {
  constructor(props) {
    super(props)

    this.INITIAL_STATE = {
      user: null,
      errorSignIn: null
    }

    this.state = { ...this.INITIAL_STATE }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user
        this.setState({
          user
        })
      })
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        })
      })
  }

  onSubmit = (data) => {
    auth.createUserWithEmailAndPassword(data.email, data.password)
      .then(authUser => {
        this.setState({...this.INITIAL_STATE})
      })
      .catch(error => {
        this.setState({errorSignIn: error})
      })
  }

  render() {
    return (
      <div className="SignUpPage">
        <div className="google-sigin">
          <h1>Fun Food Friends</h1>
          {this.state.user
            ? <button onClick={this.logout}>Log Out</button>
            : <button onClick={this.login}>Log In</button>
          }
        </div>
        <SignUpForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default SignUpPage
