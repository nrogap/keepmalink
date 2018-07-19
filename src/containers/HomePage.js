import React from 'react'

import config from '../firebase/config'

class HomePage extends React.Component {
  render() {
    console.log(config.authDomain)
    return (<h1>Home</h1>)
  }
}

export default HomePage
