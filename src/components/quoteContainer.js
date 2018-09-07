import React, { Component } from 'react';

class QuoteContainer extends Component{
    render(){
        let { content, author } = this.props;
        return(
            <section className="quote-generator-container">
                <h1 className="quote-generator-heading">Quote Generator</h1>
                {/* Used replace to remove any unnecessary html tags */}
                <div id="text">{content.replace(/(<([^>]+)>)/ig,"")}</div>
                <div id="author">{author}</div>
                
                <a id="tweet-quote"></a>
            </section>
        )
    }
}

export default QuoteContainer;