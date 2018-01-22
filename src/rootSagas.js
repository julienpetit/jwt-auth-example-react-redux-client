import { fork, all } from 'redux-saga/effects';
import auth from './modules/auth';
import users from './modules/users';

const sagas = [
    auth.sagas,
    users.sagas,
];

function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)));
}

export default rootSaga;
