import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import SwitchContainer from './containers/SwitchContainer';
import Header from './components/Header';
import Footer from './components/Footer';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

const App = connect(({ router }) => ({
    location: router.location,
}))(SwitchContainer);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Header />
                    <App />
                <Footer />
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
