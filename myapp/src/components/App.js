import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import News from './News';

const news = [{
  id: 1,
  title: 'title1',
  description: 'description1'
},
{
  id: 2,
  title: 'title2',
  description: 'description2'
},
{
  id: 3,
  title: 'title3',
  description: 'description3'
}];

class App extends Component {
  addNews(){
    console.log("addNews function worked.");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <News news = {news} name = {"hande"} addNews = {this.addNews}/>
      </div>
    );
  }
}

export default App;
