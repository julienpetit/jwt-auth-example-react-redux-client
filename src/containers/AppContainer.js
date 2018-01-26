import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from '../modules/auth';

class AppContainer extends Component {

    componentWillMount() {
        this.props.dispatch(auth.actions.loginRefreshTokenRequest());
    }

    render() {
        const { children, isAuthenticated, isLoginChecked } = this.props;

        return (
            <div>
                {isLoginChecked ? (
                    React.Children.map(children, (child) => React.cloneElement(child, { isAuthenticated }))
                ) : (
                    <p>Loading</p>
                )}
            </div>
        );
    }
}

export default connect(
    ({ auth }) => ({ isAuthenticated: auth.isAuthenticated, isLoginChecked: auth.isLoginChecked }),
    dispatch => ({ dispatch }),
    null,
    { pure: false }
)(AppContainer);
