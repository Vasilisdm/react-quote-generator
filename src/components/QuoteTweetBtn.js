import React, { Component } from 'react';

class QuoteTweetBtn extends Component{
    render(){
        return(
            <section className="tweet-btn-container">
                <a id="tweet-quote" rel="noopener noreferrer" 
                className="twitter-share-button" 
                href="https://twitter.com/intent/tweet">Tweet</a>
            </section>
        )
    }
}

export default QuoteTweetBtn;