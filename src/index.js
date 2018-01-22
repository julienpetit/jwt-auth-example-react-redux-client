import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './containers/AppContainer';
import { Switch, Route } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import AccountPage from './pages/AccountPage';
import UsersPage from './pages/UsersPage';
import UserEditPage from './modules/users/components/UserEdit';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/logout" component={LogoutPage}/>
                    <Route exact path="/users" component={UsersPage}/>
                    <Route exact strict path="/user/:id/edit" component={UserEditPage}/>
                    {/*<PrivateRoute exact path="/account" component={AccountPage}/>*/}
                </Switch>
                <Footer />
            </App>
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
