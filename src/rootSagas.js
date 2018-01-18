import { fork, all } from 'redux-saga/effects'
import auth from './modules/auth';

const sagas = [
    auth.sagas,
];

function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)));
}

export default rootSaga;
