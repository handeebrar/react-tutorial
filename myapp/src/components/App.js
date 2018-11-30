import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import News from './News';

class App extends Component {
  render() {
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <News news = {news} name = {"hande"}/>
      </div>
    );
  }
}

export default App;
