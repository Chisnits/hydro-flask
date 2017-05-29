import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { Router, Route, hashHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path = "/" component={ App }/>,
    </div>
  </Router>
),
  document.getElementById('root'))
