import React, { Component } from 'react';
import Monster from '../components/monster/monster';

class All_Monster_Container extends Component {
  constructor() {
    super();
    this.state = { monsters: [] };
  }

  componentWillMount() {
    fetch('http://www.dnd5eapi.co/api/monsters/').then(res => {
        return res.json();
      }).then(enemies => {
        console.log('enemies are', enemies)
        this.setState({monsters: enemies.results});
    });
  }

  render() {
    
    return (
      <div className="AllMonstersContainer">
        <div className="AllMonstersContainer-content">Enemies
          { this.state.monsters.map(monster => {
            return <Monster
            key={monster.name}
            name={ monster.name}
            index={ monster.url }
            />
          }) }
        </div>
      </div>
    )
  }
}

export default All_Monster_Container;
