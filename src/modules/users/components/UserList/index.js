import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Label, Table, Loader } from 'semantic-ui-react';
import { fetchListRequest } from '../../actions';

class UserList extends PureComponent {
  componentWillMount() {
    this.props.fetchListRequest();
  }

  render() {
    const { users, isLoading } = this.props;

    return (
      <Fragment>
        <Loader active={isLoading} />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.map(user => (
              <Table.Row key={user.email}>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.username}</Table.Cell>
                <Table.Cell>
                  <Link to={`/user/${user.id}/edit`}>Edit</Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ auth, users }) => ({
  isLoading: users.list.isLoading,
  users: users.list.users
});

export default connect(mapStateToProps, { fetchListRequest })(UserList);
