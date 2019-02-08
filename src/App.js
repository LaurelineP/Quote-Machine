import React, { Component } from 'react';
import QuoteCard from './components/QuoteCard';
import './App.css';

const generateK = () => {
  let keygen = '', index = 0;
  while (index < 6){
    keygen += Math.floor( Math.random() * 10 );
    index ++;
    }
  return keygen;
}

generateK()
const API = {
  endpoint: 'https://api.forismatic.com/api/1.0/',
  method: 'getQuote',
  lang:'en',
  format:'json',
  key: generateK(),
  jsonp: 'callback'
}
const colors = [
  "#e8e2db",
  "#fab95b",
  "#f5564e",
  "#1a3263",
  "#ffe79a",
  "#ef5a5a",
  "#729d39",
  "#75cac3",
  "009f9d"
];
const geekyQuotes = [
  {
    who: "Roy",
    quote: "Have you tried turning it off and on again?"
  },
  {
    who: "Moss",
    quote: "Have you tried forcing an unexpected reboot?"
  },
  {
    who: "Moss",
    quote: `Well that's easy to remember: 0118 999 88199 9119 725! . . . 3.`
  },
  {
    who: "Moss",
    quote: `I'm a 32 year old IT-man who works in a basement. Yes, I do the whole Lonely Hearts thing!`
  },
  {
    who: "Jen",
    quote: `Oh my God. I didn't even know Smarties made a cereal.`
  },
  {
    who: "Roy",
    quote: `I am a man, he's a man, we're men!`
  },
  {
    who: "Roy",
    quote: `Oh, I'm very comfortable with my sexuality, I just don't want to be slapped in the face with their sexuality.`
  },
  {
    who: "Roy",
    quote: `I'm disabled....Leg disabled`
  },
  {
    who: "Peter",
    quote: `Oh, it's filepeter@hotmail.com.`
  },
  {
    who: "Douglas Reynholm",
    quote: `You've got spunk and balls, and I like that in a woman.`
  },
  {
    who: "Moss",
    quote: `Not as nice as your momma's glasses!`
  },
  {
    who: "Moss",
    quote: "They just toss us away like yesterday's jam."
  },
  {
    who: "Moss",
    quote:
      " Did you notice how she didn't even get excited when she saw this original ZX81"
  },
  {
    who: "Moss",
    quote: " Memory is RAM!"
  },
  {
    who: "Jen",
    quote:
      "What does IT mean?! You know, computers? Something to do with computers probably?"
  },
  {
    who: "Moss",
    quote: "Of course it is, Jen! The internet doesn't weigh anything!"
  },
  {
    who: "Douglas Reynholm",
    quote: "That's right, I totally love the bloody arse off you."
  },
  {
    who: "Moss",
    quote:
      "I came here to drink milk and kick ass. And I've just finished my milk."
  },
  {
    who: "Roy",
    quote: "Because he's too small Jen. He's clearly too small to be a barista!"
  }
];
const { endpoint, method, format, lang, key } = API;
const url = {
  twitter : 'https://twitter/intent/text=',
  API : `${endpoint}?method=${method}&format=${format}&lang=${lang}&key=${key}`
}

class App extends Component {
  state = {}

  randomColor = () => {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  getGeekQuote = () => {
    let index = Math.floor( Math.random() * geekyQuotes.length);
    return geekyQuotes[index];
  }

  //w/ cross origin ressources sharing on
  getQuote = async () => {
    let _data = await fetch(url.API)
       .then((res) => res.json())
       .then(function (data) {
         return data
       })
       .catch((error) => console.log(' error', error))

   if(_data) {
     this.setState({
       who: _data.quoteAuthor,
       quote: _data.quoteText,
       color: this.randomColor()
     })
   } else {
     let __data = this.getGeekQuote ();
     if(__data){
       this.setState({
         who: __data.who,
         quote: __data.quote,
         color: this.randomColor()
       })
     }
   }
  };

 componentWillMount = () => {
   this.getQuote()
   this.getGeekQuote()
 }

  render() { 
    const { who, quote, color } = this.state;
    let _color = { background: color };
    let href = `https://twitter.com/intent/tweet?text=${quote}`;
    const getQuote = this.getQuote.bind(this) || this.getGeekQuote.bind(this)
    return (
      <div className="App">
          <QuoteCard getQuote={getQuote} who={who} quote={quote} author={who} color={_color} href={href}/>
      </div>
    );
  }
}
export default App;
