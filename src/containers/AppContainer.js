import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from '../modules/auth';

class AppContainer extends Component {

    componentWillMount() {
        this.props.dispatch(auth.actions.loginLoadTokenRequest());
    }

    render() {
        const { children, isAuthenticated } = this.props;

        return (
            <div>
                {React.Children.map(children, (child) => React.cloneElement(child, { isAuthenticated }))}
            </div>
        );
    }
}

export default connect(
    ({ auth }) => ({ isAuthenticated: auth.isAuthenticated }),
    dispatch => ({ dispatch }),
    null,
    { pure: false }
)(AppContainer);
