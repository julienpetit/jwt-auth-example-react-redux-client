import * as t from './actionTypes';

export const loginRequest = (payload) => ({
    type: t.LOGIN_REQUEST,
    payload,
});

export const loginSuccess = (payload) => ({
    type: t.LOGIN_SUCCESS,
    payload,
});

export const loginError = (payload) => ({
    type: t.LOGIN_FAILURE,
    payload,
});

export const loginRefreshTokenRequest = (payload) => ({
    type: t.LOGIN_REFRESH_TOKEN_REQUEST,
    payload,
});

export const loginRefreshTokenSuccess = (payload) => ({
    type: t.LOGIN_REFRESH_TOKEN_SUCCESS,
    payload,
});

export const loginRefreshTokenError = (payload) => ({
    type: t.LOGIN_REFRESH_TOKEN_FAILURE,
    payload,
});

export const logoutRequest = () => ({
    type: t.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
    type: t.LOGOUT_SUCCESS,
});

