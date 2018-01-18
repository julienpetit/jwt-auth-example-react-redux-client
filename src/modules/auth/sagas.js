import { takeEvery, call, put } from 'redux-saga/effects';
import authApi from './api';
import { loginSuccess, loginError } from './actions';
import * as t from './actionTypes';

export function* authorize(action) {
    try {
        const loginResult = yield call(authApi.login, action);
        yield put(loginSuccess(loginResult));
    }
    catch (error) {
        console.log('error');
        yield put(loginError(error));
    }
}

export function* watchLoginFlow() {
    yield takeEvery(t.LOGIN_REQUEST, authorize);
}

export default watchLoginFlow;