import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Card, Button} from 'react-materialize';

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
                  <Card className='red darken-1' title={this.props.name}><h6><Link to={`/monsters/${oneMonster}`}><Button className='black' waves='orange'>More About This Enemy</Button></Link></h6>
                  </Card>
                </Col>
              </Row>
          </div>
        </div>
    );
  }
}

export default Monster;
