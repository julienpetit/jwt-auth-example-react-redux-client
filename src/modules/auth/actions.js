import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
} from './actionTypes';

export const loginRequest = (payload) => ({
    type: LOGIN_REQUEST,
    payload,
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const loginError = (payload) => ({
    type: LOGIN_FAILURE,
    payload,
});
