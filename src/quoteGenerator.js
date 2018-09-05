import React, { Component } from 'react';

class QuoteGenerator extends Component{
    render(){
        return(
            <section className="quote-generator-container">
                <div id="text"></div>
                <div id="author"></div>
                <button id="new-quote"></button>
                <a id="tweet-quote"></a>
            </section>
        )
    }
}

export default QuoteGenerator;