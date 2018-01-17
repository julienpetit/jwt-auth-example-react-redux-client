import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';

import rootSaga from './rootSagas'
const sagaMiddleware = createSagaMiddleware(rootSaga);

const store = createStore(
    rootReducer,
    {},
    compose (
        applyMiddleware(logger),
        applyMiddleware(sagaMiddleware),
    )
);

sagaMiddleware.run(rootSaga);

export default store;