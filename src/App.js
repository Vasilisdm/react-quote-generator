import React, { Component } from 'react';
import QuoteGenerator from './quoteGenerator';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function(response){
      if(response.ok){
        response.json().then(function(json) {
          let quotes = json;
          console.log(quotes);
        });
      }
    })

  }

  render() {
    return (
      <div id="App">
        <QuoteGenerator />
      </div>
    );
  }
}

export default App;
