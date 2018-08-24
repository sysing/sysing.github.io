import React, { Component } from 'react';
import logo from './logo.svg';
import profile from './profile.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={profile} className="App-profile" alt="profile" />
          <h1 className="App-title">Welcome to my react.js page hosted on Github pages</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
