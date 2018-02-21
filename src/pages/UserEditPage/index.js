import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import UserEditForm from '../../modules/users/components/UserEdit';

class App extends Component {
  render() {
    return (
      <Container className="section">
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h1">Edit user</Header>
            <UserEditForm userId={this.props.match.params.id} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
