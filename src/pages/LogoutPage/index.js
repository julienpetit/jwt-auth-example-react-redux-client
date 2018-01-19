import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import auth from '../../modules/auth';

class LogoutPage extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(auth.actions.logoutRequest());
    }

    render() {

        return (
            <Redirect to='/'/>
        );
    }
}

export default connect(null, dispatch => ({ dispatch }))(LogoutPage);
