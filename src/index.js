import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

const ConnectedSwitch = connect(({ router }) => ({
    location: router.location,
}))(Switch);

const AppContainer = () => (
    <ConnectedSwitch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
    </ConnectedSwitch>
);

const App = connect(({ router }) => ({
    location: router.location,
}))(AppContainer);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Header />
                    <App />
                <Footer />
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
