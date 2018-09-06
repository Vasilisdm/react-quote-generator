import React, { Component } from 'react';

class QuoteGenerator extends Component{
    render(){
        return(
            <section className="quote-generator-container">
                <h1 className="quote-generator-heading">Quote Generator</h1>
                {/* Used replace to remove any unnecessary html tags */}
                <div id="text">{this.props.content.replace(/(<([^>]+)>)/ig,"")}</div>
                <div id="author">{this.props.author}</div>
                <button id="new-quote"></button>
                <a id="tweet-quote"></a>
            </section>
        )
    }
}

export default QuoteGenerator;