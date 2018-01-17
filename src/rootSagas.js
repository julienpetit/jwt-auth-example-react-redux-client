import { fork } from 'redux-saga/effects'
import auth from './modules/auth';

const sagas = [
    ...auth.sagas,
];

function* rootSaga() {
    yield sagas.map(saga => fork(saga));
}

export default rootSaga;
