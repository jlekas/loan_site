import React, { Component } from 'react';
import './Loan.css';
import {Row, Container, Button, Form, FormControl, InputGroup, Col} from 'react-bootstrap';


console.log("hi");


class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (event) => {
    console.log(event, event.key)
    if (event.key ==='Enter') {
    }
    console.log("handleChange")
  }

  render() {
    return(
      <div className="Loan">
        <Container>
          <Row>
            <Col>
              Loan {this.props.name}
            </Col>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text
                  id="inputGroup-sizing-default">Principle Balance</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="formPrincipleBalance"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                placeholder="10,000"
                onKeyPress={this.handleKeyPress.bind(this)}
               />
             </InputGroup>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Interest Rate</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="formInterestRate"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                placeholder="5.00%"
                onKeyPress={this.handleKeyPress.bind(this)}
              />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Minimum Monthly Payment</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="formMinMonthlyPayment"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                placeholder="$50.00"
                onKeyPress={this.handleKeyPress.bind(this)}
              />
            </InputGroup>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Loan;
