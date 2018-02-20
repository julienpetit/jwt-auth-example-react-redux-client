import * as t from './actionTypes';

export const registerRequest = user => ({
  type: t.REGISTER_REQUEST,
  payload: user
});

export const registerSuccess = user => ({
  type: t.REGISTER_SUCCESS,
  payload: user
});

export const registerError = payload => ({
  type: t.REGISTER_FAILURE,
  payload
});
