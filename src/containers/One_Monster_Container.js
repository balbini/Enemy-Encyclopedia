import React, { Component } from 'react';
import OneMonster from '../components/one_monster/one_monster';

class One_Monster_Container extends Component {
  constructor() {
    super();
    this.state = {
      monster: {
        actions: [],
        special_abilities: []
      }
    };
  }


  componentWillMount() {
    let oneMonster = this.props.match.params.monster_id
    fetch(`http://www.dnd5eapi.co/api/monsters/` + `${oneMonster}`).then(res => {
        return res.json();
      }).then(oneEnemy => {
        console.log('Enemy is', oneEnemy);
        this.setState({monster: oneEnemy});
    });
  }

  render() {

    // use map to iterate through an array of objects and return whichever field I want. for this api, when the array is already in an object
    return (
      <div className="OneMonsterContainer">
        <div className="OneMonsterContainer-content">
          <OneMonster
            key={this.state.monster._id}
            name={this.state.monster.name}
            alignment={this.state.monster.alignment}
            size={this.state.monster.size}
            type={this.state.monster.type}
            armor_class={this.state.monster.armor_class}
            hit_points={this.state.monster.hit_points}
            speed={this.state.monster.speed}
            actionsName={this.state.monster.actions.map(action => action.name)}
            actionsDescription={this.state.monster.actions.map(description => description.desc)}
            special_abilities={this.state.monster.special_abilities && this.state.monster.special_abilities.map(ability => ability.desc)}
            monsterInfo={this.props}/>
        </div>
      </div>
    )
  }
}


export default One_Monster_Container;
