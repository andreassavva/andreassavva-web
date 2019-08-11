import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skillset from './components/Skillset/Skillset';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
        <Skillset />
      </div>
    );
  }
}

export default App;
