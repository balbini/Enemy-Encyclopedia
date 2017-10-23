import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Card} from 'react-materialize';

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
            <Col l={12} s={12}>
                <Card className='grey' textClassName='white-text' title={this.props.name}><h6><Link to={`/monsters/${oneMonster}`}>More About This Enemy</Link></h6>
                </Card>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default Monster;
