import { takeEvery, call, put } from 'redux-saga/effects';
import authApi from './api';
import { loginSuccess, loginError } from './actions';
import * as t from './actionTypes';
import * as constants from './constants';

export function* authorize(action) {
    try {
        const loginResult = yield call(authApi.login, action);
        yield put(loginSuccess(loginResult));

        localStorage.setItem(constants.LS_TOKEN, JSON.stringify(loginResult.token));
    }
    catch (error) {
        yield put(loginError(error));
    }
}

export function* watchLoginFlow() {
    yield takeEvery(t.LOGIN_REQUEST, authorize);
}

export default watchLoginFlow;