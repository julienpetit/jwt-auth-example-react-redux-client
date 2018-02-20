import { takeEvery, call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import authApi from './api';
import {
  loginSuccess,
  loginError,
  logoutSuccess,
  loginRefreshTokenSuccess,
  loginRefreshTokenError
} from './actions';
import * as t from './actionTypes';
import * as constants from './constants';

/**
 * authorize Effect
 * call login api and persist the refresh token in the localstorage
 *
 * @param action
 */
export function* authorize(action) {
  try {
    const loginResult = yield call(authApi.login, action);
    const tokenData = jwtDecode(loginResult.token);

    // Persist auth refresh token in localStorage
    localStorage.setItem(constants.LS_REFRESH_TOKEN, loginResult.refresh_token);

    yield put(loginSuccess(loginResult.token, tokenData));
  } catch (error) {
    yield put(loginError(error.message));
  }
}

/**
 * Remove the token from localstorage
 */
export function* removeAuthToken() {
  // Remove auth token in localStorage
  localStorage.removeItem(constants.LS_REFRESH_TOKEN);
  yield put(logoutSuccess());
}

/**
 * Redirect after the login
 */
export function* redirectAfterLogin() {
  // Redirect to Home
  yield put(push('/'));
}

/**
 * Check is a token is valid
 * If the token will exipired in the next 10 minutes, ask to a new token
 * @returns {*}
 */
export function* getToken() {
  // Get token from the store
  const tokenData = yield select(({ auth }) => auth.tokenData);

  const expireAt = new Date(tokenData.exp * 1000);
  const now = new Date();
  // Compute the amount of minutes before expiration
  const diffInMinutes = (expireAt.getTime() - now.getTime()) / 1000;

  if (diffInMinutes < 10) {
    // If the token will expire soon, request a new token
    yield call(refreshToken);
  }

  return yield select(({ auth }) => auth.token);
}

/**
 * Refresh the token with the refresh token stored in localStorage
 * @returns {boolean}
 */
export function* refreshToken() {
  const refreshToken = localStorage.getItem(constants.LS_REFRESH_TOKEN);

  // if it exists
  if (!refreshToken) {
    yield put(loginRefreshTokenError());
    return false;
  }

  try {
    const result = yield call(authApi.refreshToken, refreshToken);

    localStorage.setItem(constants.LS_REFRESH_TOKEN, result.refresh_token);

    const tokenData = jwtDecode(result.token);
    const token = result.token;

    yield put(loginRefreshTokenSuccess(token, tokenData));
  } catch (error) {
    yield put(loginRefreshTokenError(error));
  }
}

/**
 * Redux Saga flow
 */
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
