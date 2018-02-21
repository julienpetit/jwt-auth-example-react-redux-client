import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import UserList from '../../modules/users/components/UserList';

class UsersPage extends Component {
  render() {
    return (
      <Container className="section">
        <Header as="h1">Users</Header>
        <UserList />
      </Container>
    );
  }
}

export default UsersPage;
