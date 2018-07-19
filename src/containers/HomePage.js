import React from 'react'

class HomePage extends React.Component {
  render() {
    console.log(process.env.REACT_APP_PROJECT_ID)
    return (<h1>Home</h1>)
  }
}

export default HomePage
