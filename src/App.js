import React, { Component } from 'react';
import jsonp from 'jsonp';
import './style.css';
import Quote from './components/Quote.js';
import Author from './components/Author.js';
import Buttons from './components/Buttons.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
    this.newQuote = this.newQuote.bind(this);
  }
  componentDidMount() {
    this.newQuote();
  }
  newQuote() {
    jsonp('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en', { param: 'jsonp' }, (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        this.setState({
          quote: data.quoteText,
          author: data.quoteAuthor
        });
      }
    })
  }
  render() {
    const tweet = encodeURIComponent(`"${this.state.quote}" ${this.state.author} #amazingquotes`);
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="quote">

                <Quote text={this.state.quote}/>

                <Author text={this.state.author}/>

            </div>
          </div>
        </div>

        <Buttons onClick={this.newQuote} tweet={tweet}/>

      </div>
    );
  }
}

export default App;
