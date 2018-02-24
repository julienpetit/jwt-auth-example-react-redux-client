import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import store, { history } from './store';
import 'semantic-ui-css/semantic.min.css';
import './modules/locale/init';
import ConnectedIntlProvider from './modules/locale/components/ConnectedIntlProvider';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
