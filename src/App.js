import React, { Component } from 'react';
import QuoteGenerator from './quoteGenerator';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      quote: '',
      author: ''
    };
    // Binding getRandomQuote to this
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  getRandomQuote(){
    /**
     * Url for the wordpress's quote api, it returns a random quote
     */
    let quoteUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

    // Fetching the requested quote
    fetch(quoteUrl).then(response => {
      return response.json();
    })
    .then(jsonQuote => {
      // Changing the state for both quote and author
      this.setState({
        quote: jsonQuote[0].content,
        author: jsonQuote[0].title
      })
    });
  }

  componentDidMount(){
     this.getRandomQuote();
  }

  render() {
    return (
      <div id="App">
        <QuoteGenerator content={this.state.quote} author={this.state.author}/>
      </div>
    );
  }
}

export default App;
