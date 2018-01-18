import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';

class PrivateRouteContainer extends Component {
    render() {
        const {
            isAuthenticated,
            component: Component,
            ...props
        } = this.props;

        return (
            <Route
                {...props}
                render={props =>
                    isAuthenticated
                        ? <Component {...props} />
                        : (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}/>
                    )
                }
            />
        )
    }
}

const PrivateRoute = connect(({ auth }) => ({
    isAuthenticated: auth.token !== null,
}))(PrivateRouteContainer);

export default PrivateRoute;
