import React, { Component } from 'react';

class QuoteContainer extends Component{

    // Method to remove any html encoded entities
    decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    render(){
        let { content, author } = this.props;
        return(
            <section className="quote-generator-container">
                <h1 className="quote-generator-heading">Quote Generator</h1>
                {/* Used replace to remove any unnecessary html tags */}
                <div id="text">{this.decodeHtml(content.replace(/(<([^>]+)>)/ig,""))}</div>
                <div id="author">{this.decodeHtml(author)}</div>
            </section>
        )
    }
}

export default QuoteContainer;