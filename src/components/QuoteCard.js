import React, {Component} from 'react';
const generateK = () => {
  let keygen = '', index = 0;
  while (index < 6){
    keygen += Math.floor(Math.random()*10);
    index ++;
    }
  console.log('KEYGEN', keygen);
  return keygen;
}

const API = {
  endpoint: 'https://api.forismatic.com/api/1.0/',
  method: 'getQuote',
  lang:'en',
  format:'json',
  key: generateK(),
  jsonp: 'callback',
}

const { endpoint, method, format, lang, key } = API;
const url = `${endpoint}?method=${method}&format=${format}&lang=${lang}`;
class QuoteCard extends Component {
    state = {}
     getQuote = async () => {
       var _data = await fetch(url)
          .then((res) => res.json())
          .then(function (data) {
            console.log('data', data)
            return data;
          })
          .catch((error) => console.log(' eroro', error))

      if(_data) {
        this.setState({
          author: _data.quoteAuthor,
          quote: _data.quoteText
        })
      }
     };

    componentWillMount = () => {
      this.getQuote()
    }

    render() { 
        const { quote, author } = this.state;
        return (
            <div id="quote-box">
                <div id="quote-content">
                    <h2 id="quote-text">{ quote || "Quote"}</h2>
                    <p id="quote-author">{ author || "Author"}</p>
                </div>

                <div className="buttons-container">
                    <button><a href="twitter.com/intent/tweet">Twitter</a></button>
                    <button onClick={this.getQuote}>New quote</button>
                </div>
            </div>
          );
    }
}
 
export default QuoteCard;
