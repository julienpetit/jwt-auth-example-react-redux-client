import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchListRequest } from '../../actions';

class UserList extends PureComponent {

    componentWillMount() {
        this.props.fetchListRequest();
    };

    render() {
        const {
            users,
            isLoading,
        } = this.props;

        return (
            <div className="login">
                {users.map((user) => (
                    <div key={user.email}>
                        {user.email}
                        <Link to={`/user/${user.id}/edit`}>Edit</Link>
                    </div>
                ))}

                {isLoading && (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ auth, users }) => ({
    isLoading: users.list.isLoading,
    users: users.list.users,
});

export default connect(mapStateToProps, { fetchListRequest })(UserList);
