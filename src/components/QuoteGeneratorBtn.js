import React, { Component } from 'react';

class QuoteGeneratorBtn extends Component {
    render(){
        return(
            <section className="quote-btn-container">
                <button id="new-quote" onClick={this.props.generateQuote}>New Quote</button>
            </section>
        )
    }
}

export default QuoteGeneratorBtn;