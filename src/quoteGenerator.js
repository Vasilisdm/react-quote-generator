import React, { Component } from 'react';

class QuoteGenerator extends Component{
    render(){
        return(
            <section className="quote-generator-container">
                <h1 className="quote-generator-heading">Quote Generator</h1>
                <div id="text">{this.props.content}</div>
                <div id="author">{this.props.author}</div>
                <button id="new-quote"></button>
                <a id="tweet-quote"></a>
            </section>
        )
    }
}

export default QuoteGenerator;