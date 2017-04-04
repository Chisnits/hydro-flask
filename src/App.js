import React, { Component } from 'react';
import Header from './components/Header/Header';
import HomeCarousel from './components/HomeCarousel/HomeCarousel'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
        <HomeCarousel/>
        </div>
      </div>
      
    );
  }
}

export default App;
