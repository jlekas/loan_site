import React, { Component } from 'react';
import './Loan.css';
import {Row, Container, Form, Col} from 'react-bootstrap';

class Loan extends Component {
  render() {
    return(
      <div className="App">
        <Container>
          <Row>
            <Col>
              Loan {this.props.name}
            </Col>
          </Row>
          <Row>
          <Form>
            <Form.Group as={Row} controlID="formPlaintextPrincipleBalance">
              <Form.Label column sm="2">
                Principle Balance
              </Form.Label>
              <Col sm="10">
                <Form.Control type="word" placeholder="Principle Balance"/>
              </Col>
            </Form.Group>
          </Form>
          <Form>
            <Form.Group as={Row} controlID="formPlaintextInterestRate">
              <Form.Label column sm="2">
                Interest Rate
              </Form.Label>
              <Col sm="10">
                <Form.Control type="word" placeholder="Interest Rate"/>
              </Col>
            </Form.Group>
          </Form>
          <Form>
              <Form.Group as={Row} controlID="formPlaintextMinMonthlyPayment">
              <Form.Label column sm="2">
                Minimum Monthly Payment
            </Form.Label>
              <Col sm="10">
                <Form.Control type="word" placeholder="Minimum Monthly Payment"/>
              </Col>
              </Form.Group>
          </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Loan;
