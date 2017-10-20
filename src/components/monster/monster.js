import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-materialize';

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
          <Row>
            <Col l={12} s={2} className='grid'>
                <h3><Link to={`/monsters/${oneMonster}`}>{this.props.name}</Link></h3>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default Monster;
