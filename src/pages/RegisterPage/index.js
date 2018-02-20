import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import RegisterForm from '../../modules/register/containers/RegisterFormContainer';

class RegisterPage extends Component {
  render() {
    return (
      <Container className="section">
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h1">Register</Header>
            <RegisterForm />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default RegisterPage;
