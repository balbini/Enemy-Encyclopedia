import React, { Component } from 'react';
import './App.css';
import All_Monster_Container from './containers/All_Monster_Container';
import One_Monster_Container from './containers/One_Monster_Container';
import Monster from './components/monster/monster';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Carousel} from 'react-materialize'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="home">
        <h1 className="title"><Link to="/" colorClass='black'>Enemy Encyclopedia</Link></h1>
        <Carousel images={[
          'http://vignette1.wikia.nocookie.net/forgottenrealms/images/6/6d/Monster_Manual_5e_-_Dragon%2C_Copper_-_p110.jpg/revision/latest?cb=20141111204924',
          'http://dreadgazebo.net/wp-content/uploads/2014/09/Werewolf_Cut.png',
          'http://vignette3.wikia.nocookie.net/forgottenrealms/images/4/43/Monster_Manual_5e_-_Owlbear_-_p249.jpg/revision/latest?cb=20141113191357',
          'https://www.boardgamequest.com/wp-content/uploads/2015/01/MindFlayer.jpg',
          'http://cdn.escapistmagazine.com/media/global/images/library/deriv/715/715262.jpg'
        ]} />
        <hr/>
        <Route exact path="/" component={All_Monster_Container}/>
        <Route exact path='/monsters/:monster_id' component={One_Monster_Container}/>
      </div>
    </Router>
    );
  }
}

export default App;
