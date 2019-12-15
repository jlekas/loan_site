import React, { Component } from 'react';
import './App.css';
import Loan from './Loan';
import Graph from './Graph';
import {Container} from 'react-bootstrap';

const LoanEx = {
  name: "1",
  principle_balance: 7232.17,
  interest_rate: 0.0376,
  min_monthly_payment: 72.38,
};

const LoanEx2 = {
  name: "2",
  principle_balance: 7232.17,
  interest_rate: 0.0376,
  min_monthly_payment: 72.38,
};

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Loan {...LoanEx}></Loan>
          <Loan {...LoanEx2}/>
          <Graph {...LoanEx}/>
          <Graph {...LoanEx2}></Graph>
        </Container>
      </div>
    );
  }
}

export default App;
