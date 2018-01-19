import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import authApi from './api';
import { loginSuccess, loginError, loginLoadTokenSuccess } from './actions';
import * as t from './actionTypes';
import * as constants from './constants';

export function* authorize(action) {
    try {
        const loginResult = yield call(authApi.login, action);
        yield put(loginSuccess(loginResult));
    }
    catch (error) {
        yield put(loginError(error));
    }
}

export function* persistAuthToken(action) {
    // Persist auth token in localStorage
    yield localStorage.setItem(constants.LS_TOKEN, JSON.stringify(action.payload.token));
}

export function* redirectAfterLogin() {
    // Redirect to Home
    yield put(push('/'));
}

export function* loadToken() {
    const storedToken = localStorage.getItem(constants.LS_TOKEN);

    // if it exists
    if (!storedToken) {
        return false;
    }

    // parse it down into an object
    const token = JSON.parse(storedToken);

    // this just all works to compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const createdDate = new Date(token.created);
    const created = Math.round(createdDate.getTime() / 1000);
    const ttl = 1209600;
    const expiry = created + ttl;

    // if the token has expired return false
    if (created > expiry) return false;

    // otherwise, dispatch the token to our setClient action
    // which will update our redux state with the token and return true
    yield put(loginLoadTokenSuccess(token));
}

export function* watchLoginFlow() {
    yield takeEvery(t.LOGIN_REQUEST, authorize);
    yield takeEvery(t.LOGIN_SUCCESS, redirectAfterLogin);
    yield takeEvery(t.LOGIN_SUCCESS, persistAuthToken);
    yield takeEvery(t.LOGIN_LOAD_TOKEN_REQUEST, loadToken);
}

export default watchLoginFlow;