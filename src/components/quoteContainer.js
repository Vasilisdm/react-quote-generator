import React, { Component } from 'react';

class QuoteContainer extends Component{
    render(){
        return(
            <section className="quote-generator-container">
                <h1 className="quote-generator-heading">Quote Generator</h1>
                {/* Used replace to remove any unnecessary html tags */}
                <div id="text">{this.props.content.replace(/(<([^>]+)>)/ig,"")}</div>
                <div id="author">{this.props.author}</div>
                
                <a id="tweet-quote"></a>
            </section>
        )
    }
}

export default QuoteContainer;