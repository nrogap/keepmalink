import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Line Today!</h1>
        </header>
        <p className="App-intro">
          When you meet the challenge things, just say <code>Try me! If you can</code>
          test! when remove double quote in .travis.ym
        </p>
      </div>
    );
  }
}

export default App;
