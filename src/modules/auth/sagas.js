import { takeEvery, call, put } from 'redux-saga/effects';
import authApi from './api';
import { loginSuccess, loginError } from './actions';
import {
    LOGIN_REQUEST,
} from './actionTypes';

export function* authorize(action) {
    try {
        const loginResult = yield call(authApi.login, action);
        yield put(loginSuccess(loginResult))
    }
    catch (error) {
        yield put(loginError(error))
    }
}

export function* watchLoginFlow() {
    yield takeEvery(LOGIN_REQUEST, authorize)
}

export default [watchLoginFlow];