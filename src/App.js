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
      <div className="home">
        <h1 className="title"><Link to="/">Enemy Encyclopedia</Link></h1>
        <hr/>
        <Route exact path="/" component={All_Monster_Container}/>
        <Route exact path='/monsters/:monster_id' component={One_Monster_Container}/>
      </div>
    </Router>
    );
  }
}

export default App;
