import React, {Component} from 'react';
class QuoteCard extends Component {
    render() { 
      const { getQuote, quote, author, color, href } = this.props;
        return (
            <div id="quote-box" style={color}>
                <div id="quotes-icons-container">
                    <i id="left" className="fas fa-quote-left" />
                    <i id="right" className="fas fa-quote-right" />
                </div>

                <div id="quote-content">
                    <div id="texts-content">
                        <h2 id="text">{ quote || "Quote"}</h2>
                        <p id="author">{ author || "Author"}</p>
                    </div>
                </div>
                <div className="buttons-container">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <i id="icon-twitter" className="fab fa-twitter" />
                    </a>
                    <button id="new-quote"onClick={getQuote}>New quote</button>
                </div>
            </div>
            );
        }
    }
    
    export default QuoteCard;