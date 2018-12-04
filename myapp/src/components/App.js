import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import News from './News';
import Counter from './Counter';

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

  render() {
    return (
      <div className="App">
      <Counter />
      </div>
    );
  }
}

export default App;
