import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Graph.css';
import {XYPlot, LineSeries} from 'react-vis';

class Graph extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow: true,
    };
  }

  render() {
    return (
      <div className="Graph">
        <Container>

        </Container>
      </div>
    );
  }
}

export default Graph;
