import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../Home/Home'
import About from '../About/About'


class App extends Component {
  render() {
    return (
     
        <Router>
          <div className="topnav">
            <ul className="ul">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
     
          </div>
        </Router>
    
    );
  }
}

export default App;