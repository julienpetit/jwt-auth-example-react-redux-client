import * as sagas from '../sagas';
import * as constants from '../constants';
import * as actions from '../actions';
import api from '../api';
import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

describe('sagas authorize', () => {
  const action = {
    type: 'ACTIONTYPE',
    payload: {}
  };
  const gen = sagas.authorize(action);

  it('authorize should call login api and save the refresh token', () => {
    expect(gen.next().value).toEqual(call(api.login, action));
  });

  it('authorize should put an error', () => {
    const message = "Cannot read property 'token' of undefined";

    expect(gen.next().value).toEqual(put(actions.loginError(message)));
    expect(gen.next().done).toBeTruthy();
  });
});

it('redirect after login', () => {
  const gen = sagas.redirectAfterLogin();
  expect(gen.next().value).toEqual(put(push('/')));
});

describe('remove auth token', () => {
  // Add fake refresh token in local storage
  const refreshToken = 'refresh_token';
  localStorage.setItem(constants.LS_REFRESH_TOKEN, refreshToken);

  const gen = sagas.removeAuthToken();

  it('Gen should put an action of type logoutSuccess', () => {
    expect(gen.next().value).toEqual(put(actions.logoutSuccess()));
    expect(gen.next().done).toBeTruthy();
  });

  it('The refresh token should removed from localStorage', () => {
    expect(localStorage.getItem(constants.LS_REFRESH_TOKEN)).toEqual(null);
  });
});

describe('sagas refreshToken', () => {
  it('gen should put a loginRefreshTokenError as there is not token in localStorage', () => {
    const gen = sagas.refreshToken();
    expect(gen.next().value).toEqual(put(actions.loginRefreshTokenError()));
    expect(gen.next().done).toBeTruthy();
  });
});
