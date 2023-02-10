import React, { Component } from "react";
import { Container, Row, Col, Button} from "reactstrap";
import Celcius from "./components/Celcius";
import Derece from "./components/Derece";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";

import "./App.css"

class App extends Component {

  state = { derece: 0, celcius:0, fahrenheit:32, kelvin: 273.15 };

  artir(degree){

    this.state.derece=degree + 1;
    this.setState({ celcius: this.state.derece});
    this.setState({ fahrenheit: (this.state.derece* 9) / 5 + 32 });
    this.setState({ kelvin: this.state.derece+273.15});
  };

  azalt(degree){

    this.state.derece=degree - 1;
    this.setState({ celcius: this.state.derece});
    this.setState({ fahrenheit: (this.state.derece* 9) / 5 + 32 });
    this.setState({ kelvin: this.state.derece+273.15});
  };


  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col >
              <h1>Hava Nasıl?</h1>
              <Derece derece={this.state.derece} />
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              
                <Button  color="danger" outline className="btn"
                  onClick={() => this.artir(this.state.derece)}>
                  SICAKLIĞI ARTIR
                </Button>

                <Button  color="danger" outline className="btn"
                  onClick={() => this.azalt(this.state.derece)}>
                  SICAKLIĞI AZALT
                </Button>
              
            </Col>
          </Row>
          <Row className="bottom">
            <Col xs="3">
              <Celcius celcius={this.state.celcius} />
            </Col>
            <Col xs="3">
              <Fahrenheit fahrenheit={this.state.fahrenheit} />
            </Col>
            <Col xs="3">
              <Kelvin kelvin={this.state.kelvin} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
