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
