import React from 'react'
import Spinner from './components/Spinner'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {quote:'Quote Loads Here',
  author:'Oluwajuwon',
loading:false}
    this.changeQuote = this.changeQuote.bind(this)
    this.loadQuote = this.loadQuote.bind(this)
    this.loadSpinner = this.loadSpinner.bind(this)
  }
  changeQuote(){
    console.log(this.stateloading)
    this.setState({
      loading:true
    })
    console.log(this.state.loading)
    fetch("https://qvoca-bestquotes-v1.p.rapidapi.com/quote", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "23a1830e2amshb300f3a2bac9a56p1793d1jsn2b8cb9b48d12",
        "x-rapidapi-host": "qvoca-bestquotes-v1.p.rapidapi.com"
      }
    })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        let quote ={
          quote:data.message,
          author:data.author
        }
        this.setState({
          quote: data.message,
          author: data.author,
          loading:false
        })
        console.log(quote)
      })
      // console.log(quote)
      .catch(err => {
        console.error(err);
      });
    
  }

  loadSpinner(){
    return (
      <div id="quote-box">
       <div> <Spinner /></div>
      <div>  <Spinner /></div>
        <button onClick={this.changeQuote}>Loading...</button>
      </div>
    );
  }

  loadQuote(){
    return(
      <div id="quote-box">
<p id="text"><span>"</span>{this.state.quote}</p> 
<p id="author">Author:- {this.state.author}</p> 
<button id="new-quote" onClick={this.changeQuote}>Generate</button>
<br />
<a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" >Tweet Quote</a>
</div>
    )

  }
  render(){

    
    const render = (this.state.loading) ? this.loadSpinner():this.loadQuote()
     return render
  }
}

export default App;
