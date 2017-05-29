import React, { Component } from 'react';
import HomeCarousel from './components/HomeCarousel/HomeCarousel'; 
import InnovationRow from './components/InnovationRow/InnovationRow'; 
import MyHydro from './components/MyHydro/MyHydro';
import UnexpectedRefreshment from './components/UnexpectedRefreshment/UnexpectedRefreshment';
import PictureRow from './components/PictureRow/PictureRow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HomeCarousel/>
        <InnovationRow/>
        <MyHydro/>
        <UnexpectedRefreshment/>
        <PictureRow/>
      </div>
      
    );
  }
}

export default App;

// componentWillMount: function() {
//       this.lock = new Auth0Lock('cq5AoOasFL74sk8nptgmU1IEadHKGAI3', 'chisnits.auth0.com');
//   },
//   render: function() {
//     return (<Home lock={this.lock} />);
//   }
