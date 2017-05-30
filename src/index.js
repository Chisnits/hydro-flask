
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Header from './components/Header/Header';
import BlackFooter from './components/BlackFooter/BlackFooter';
import MapFooter from './components/MapFooter/MapFooter';
import { AllProducts } from './components/Store/AllProducts';
import { Innovation } from './components/Innovation/Innovation';
import { ParksForAll } from './components/ParksForAll/ParksForAll';
import { Cart } from './components/Cart/Cart'

ReactDOM.render((
  <Router>
    <div>
      <Route component={Header}/>
      <Route exact path="/" component={ App }/>
      <Route path="/store" component={ AllProducts }/>
      <Route path="/innovation" component={ Innovation }/>
      <Route path="/parks-for-all" component={ ParksForAll }/>
      <Route path="/checkout/cart" component={ Cart }/>
      <Route component={ BlackFooter }/>
      <Route component={ MapFooter }/>
    </div>
  </Router>
),
  document.getElementById('root'))