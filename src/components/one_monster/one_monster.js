import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-materialize';

class OneMonster extends Component {

  render() {
    var beast = (this.props.monsterInfo.url);
    if(beast != null){
    var newArr = beast.split("/");
    var oneMonster = (newArr[5]);

}
    return (
      <div className="OneMonster">
        <div className="OneMonster-container">
          <Row>
            <Col l={12} className='grid'>
              <ul>
                <h2><li>{this.props.name}</li></h2>
                <li><b>Alignment:</b> {this.props.alignment}</li>
                <li><b>Size:</b> {this.props.size}</li>
                <li><b>Type:</b> {this.props.type}</li>
                <li><b>Speed:</b> {this.props.speed}</li>
                <li><b>Armor Class:</b>{this.props.armor_class}</li>
                <li><b>Hit Points:</b>{this.props.hit_points}</li>
                <li><b>Actions:</b>
                    <p>{this.props.actionsName.map(name => {
                      return <p>{name}:{this.props.actionsDescription.map(desc => {
                        return <p>{desc}</p>
                      })}</p>
                    })}</p>
                </li>
                <li><b>Special Abilities:</b>
                  <ul>{this.props.special_abilities && this.props.special_abilities.map(ability => {
                    return <li> -{ability}</li>
                      })}
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default OneMonster;
