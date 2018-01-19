import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';

import auth from '../modules/auth';
import PrivateRoute from './PrivateRouteContainer';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';

class SwitchContainer extends React.Component {

    componentWillMount() {
        this.props.dispatch(auth.actions.loginLoadTokenRequest());
    }

    render() {
        const { location } = this.props;

        return (
            <Switch location={location}>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={LoginPage}/>
                <PrivateRoute exact path="/account" component={AccountPage}/>
            </Switch>
        );
    }
}

const mapStateToProps = ({ router }) => ({
    location: router.location,
});

export default connect(mapStateToProps, dispatch => ({ dispatch }))(SwitchContainer);