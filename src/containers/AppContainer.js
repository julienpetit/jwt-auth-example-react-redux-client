import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';

import auth from '../modules/auth';
import PrivateRoute from './PrivateRouteContainer';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import AccountPage from '../pages/AccountPage';

class AppContainer extends React.Component {

    componentWillMount() {
        this.props.dispatch(auth.actions.loginLoadTokenRequest());
    }

    render() {
        const { location, isAuthenticated } = this.props;

        return (
            <div>
                <Header isAuthenticated={isAuthenticated} />
                <Switch location={location}>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/logout" component={LogoutPage}/>
                    <PrivateRoute exact path="/account" component={AccountPage}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ auth, router }) => ({
    location: router.location,
    isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, dispatch => ({ dispatch }), null, { pure: false })(AppContainer);