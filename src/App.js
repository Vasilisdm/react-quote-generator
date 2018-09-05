import React, { Component } from 'react';
import QuoteGenerator from './quoteGenerator';
import './App.css';

class App extends Component {

  componentDidMount(){

    /**
     * Url for the wordpress's quote api, it returns a random quote
     */
    let quoteUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

    fetch(quoteUrl).then(function(response){
      if(response.ok){
        response.json().then(function(json) {
          let quote = json;
          console.log(quote);
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
