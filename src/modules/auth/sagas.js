import { takeEvery, call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import authApi from './api';
import {
    loginSuccess,
    loginError,
    logoutSuccess,
    loginRefreshTokenSuccess,
    loginRefreshTokenError,
    loginRefreshTokenRequest,
    logoutRequest,
} from './actions';
import * as t from './actionTypes';
import * as constants from './constants';

export function* authorize(action) {
    try {
        const loginResult = yield call(authApi.login, action);
        const tokenData = jwtDecode(loginResult.token);

        const payload = {
            tokenData,
            token: loginResult.token,
        };

        // Persist auth refresh token in localStorage
        yield localStorage.setItem(constants.LS_REFRESH_TOKEN, loginResult.refresh_token);

        yield put(loginSuccess(payload));
    }
    catch (error) {
        yield put(loginError(error));
    }
}

export function* removeAuthToken() {
    // Remove auth token in localStorage
    yield localStorage.removeItem(constants.LS_REFRESH_TOKEN);
    yield put(logoutSuccess());
}

export function* redirectAfterLogin() {
    // Redirect to Home
    yield put(push('/'));
}

export function* getToken() {
    // Get token from the store
    const token = yield select(({ auth }) => auth.token);

    // Decode JWT Token
    const tokenData = jwtDecode(token);

    // this just all works to compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const expiryDate = new Date(tokenData.exp * 1000);
    const now = new Date();
    // Compute the amount of minutes before expiration
    const diffInMinutes = (expiryDate.getTime() - now.getTime()) / 60000;

    if (diffInMinutes < 0) {
        // If the token is expired, logout the user
        yield put(logoutRequest());
    } else if (diffInMinutes < 10) {
        // If the token will expire soon, request a new token
        yield put(loginRefreshTokenRequest());
    }

    return token;
}

export function* refreshToken() {
    const refreshToken = localStorage.getItem(constants.LS_REFRESH_TOKEN);

    // if it exists
    if (!refreshToken) {
        yield put(loginRefreshTokenError());
        return false;
    }

    try {
        const result = yield call(authApi.refreshToken, refreshToken);

        yield localStorage.setItem(constants.LS_REFRESH_TOKEN, result.refresh_token);

        const payload = {
            tokenData: jwtDecode(result.token),
            token: result.token,
        };

        yield put(loginRefreshTokenSuccess(payload));
    }
    catch (error) {
        yield put(loginRefreshTokenError(error));
    }
}

export function* watchLoginFlow() {
    // Login flow
    yield takeEvery(t.LOGIN_REQUEST, authorize);
    yield takeEvery(t.LOGIN_SUCCESS, redirectAfterLogin);

    // Login check flow
    yield takeEvery(t.LOGIN_REFRESH_TOKEN_REQUEST, refreshToken);

    // Logout flow
    yield takeEvery(t.LOGOUT_REQUEST, removeAuthToken);
}

export default watchLoginFlow;