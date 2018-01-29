import * as t from './actionTypes';

export const loginRequest = (username, password) => ({
    type: t.LOGIN_REQUEST,
    payload: {
        username,
        password,
    },
});

export const loginSuccess = (token, tokenData) => ({
    type: t.LOGIN_SUCCESS,
    payload: {
        token,
        tokenData,
    },
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

