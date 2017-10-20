import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Monster extends Component {

  render() {
    var beast = (this.props.index);
    if (beast){
      var newArr = beast.split("/");
      var oneMonster = (newArr[5]);
    }

    return (
      <div className="Monster">
        <div className="Monster-container">
          <ul>
            <li><Link to={`/monsters/${oneMonster}`}>{this.props.name}</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Monster;
