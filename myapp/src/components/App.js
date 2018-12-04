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
  state = {
      name: 'HANDE'
  };

  changeName = () => {
    this.setState({
      name: "EBRAR"
    });
  }
  /*addNews(){
    console.log("addNews function worked.");
    news.push({
      id: 4,
      title: 'title4',
      description: 'description4'
    });
    console.log(news); //console'da gozukuyor fakat ui'da gozukmuyor
  }*/
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>{this.state.name}</h1>
        <button onClick = {this.changeName}>Change the name</button>
      </div>
    );
  }
}

export default App;
