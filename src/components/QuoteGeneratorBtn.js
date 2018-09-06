import React, { Component } from 'react';

class QuoteGeneratorBtn extends Component {
    render(){
        return(
            <button id="new-quote" onClick={this.props.generateQuote}>New Quote</button>
        )
    }
}

export default QuoteGeneratorBtn;