import React, { Component } from 'react';
import './App.css';
import All_Monster_Container from './containers/All_Monster_Container';
import One_Monster_Container from './containers/One_Monster_Container';
import Monster from './components/monster/monster';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <p><Link to="/">Home</Link></p>
        <h1>Enemy Encyclopedia</h1>
        <hr/>
        <Route exact path="/" component={All_Monster_Container}/>
        <Route exact path='/monsters/:monster_id' component={One_Monster_Container}/>
      </div>
    </Router>
    );
  }
}

export default App;
