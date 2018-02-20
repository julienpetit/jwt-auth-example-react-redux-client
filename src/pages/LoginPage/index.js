import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import LoginForm from '../../modules/auth/components/LoginForm';

class App extends Component {
  render() {
    return (
      <Container className="section">
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h1">Login Page</Header>
            <LoginForm />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
