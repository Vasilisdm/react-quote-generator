import React, { Component } from 'react';
import QuoteGenerator from './quoteGenerator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <QuoteGenerator />
      </div>
    );
  }
}

export default App;
