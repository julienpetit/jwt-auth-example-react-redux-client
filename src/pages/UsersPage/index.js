import React, { Component } from 'react';
import UserList from '../../modules/users/components/UserList';

class UsersPage extends Component {

    render() {

        return (
            <div className="HomePage">
                <UserList />
            </div>
        );
    }
}

export default UsersPage;
