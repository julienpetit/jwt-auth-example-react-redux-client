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

export const loginLoadTokenRequest = () => ({
    type: t.LOGIN_LOAD_TOKEN_REQUEST,
});

export const loginLoadTokenSuccess = (token) => ({
    type: t.LOGIN_LOAD_TOKEN_SUCCESS,
    payload: token,
});

export const logoutRequest = () => ({
    type: t.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
    type: t.LOGOUT_SUCCESS,
});
