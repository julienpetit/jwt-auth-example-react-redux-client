import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from '../modules/auth';

class AppContainer extends Component {

    componentWillMount() {
        this.props.dispatch(auth.actions.loginLoadTokenRequest());
    }

    render() {
        const { children } = this.props;

        return (
            <div>
                {children}
            </div>
        );
    }
}

export default connect(null, dispatch => ({ dispatch }), null, { pure: false })(AppContainer);
