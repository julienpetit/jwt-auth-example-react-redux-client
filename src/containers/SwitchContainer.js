import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';

import PrivateRoute from './PrivateRouteContainer';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';

class SwitchContainer extends React.Component {

    componentWillMount() {
        // TODO : Here is the place to check if an auth token is in the localstorage
    }

    render() {
        const { location } = this.props;

        return (
            <Switch location={location}>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <PrivateRoute path="/account" component={AccountPage}/>
            </Switch>
        );
    }
}

const mapStateToProps = ({ router }) => ({
    location: router.location,
});

export default connect(mapStateToProps)(SwitchContainer);