import React from 'react'

import firebaseConfig from '../firebase/firebaseConfig'

class HomePage extends React.Component {
  render() {
    console.log(process.env)
    console.log('firebaseConfig: ', firebaseConfig);
    return (<h1>Home</h1>)
  }
}

export default HomePage
