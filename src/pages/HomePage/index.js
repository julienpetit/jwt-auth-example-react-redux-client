import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <Container className="section">
        <Header as="h1">Home</Header>
      </Container>
    );
  }
}

export default HomePage;
