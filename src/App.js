import React, { Component } from 'react';
import Header from './components/Header/Header';
import HomeCarousel from './components/HomeCarousel/HomeCarousel'; 
import InnovationRow from './components/InnovationRow/InnovationRow'; 
import MyHydro from './components/MyHydro/MyHydro';
import UnexpectedRefreshment from './components/UnexpectedRefreshment/UnexpectedRefreshment';
import PictureRow from './components/PictureRow/PictureRow';
import BlackFooter from './components/BlackFooter/BlackFooter';
import MapFooter from './components/MapFooter/MapFooter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HomeCarousel/>
        <InnovationRow/>
        <MyHydro/>
        <UnexpectedRefreshment/>
        <PictureRow/>
        <BlackFooter/>
        <MapFooter/>
      </div>
      
    );
  }
}

export default App;
