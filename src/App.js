import React, { Component } from 'react';
import QuoteGenerator from './quoteGenerator';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    };
  }

  componentDidMount(){
    let that = this;
    /**
     * Url for the wordpress's quote api, it returns a random quote
     */
    let quoteUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

    // Fetching the requested quote
    fetch(quoteUrl).then(function(response){
      if(response.ok){
        // Converting response to json
        response.json().then(function(json) {
          // Updating state of quote
          that.setState({
            quote: json
          });
          console.log(that.state.quote)
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
