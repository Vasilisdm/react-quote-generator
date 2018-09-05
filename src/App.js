import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="text"></div>
        <div id="author"></div>
        <button id="new-quote"></button>
        <a id="tweet-quote"></a>
      </div>
    );
  }
}

export default App;
