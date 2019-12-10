import React, { Component } from 'react';
import './App.css';
import Loan from './Loan'
import {Container} from 'react-bootstrap';

const LoanEx = {
  name: "1",
  principle_balance: 7232.17,
  interest_rate: 0.0376,
  min_monthly_payment: 72.38
}

class App extends Component{

  render() {
    return (
      <div className="App">
        <Container>
          <Loan {...LoanEx}></Loan>
          <Loan></Loan>
        </Container>
      </div>
    );
  }
}

export default App;
