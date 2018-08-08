import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Create Target Package for App-header</h1>
        </header>
        <p className="App-intro">
          Components for App-intro <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
