import reducer from '../reducer';
import * as actions from '../actions';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    token: null,
    tokenData: {},
    isAuthenticated: false,
    isLoginChecked: false,
    isLoading: false,
    hasErrors: false
  });
});

it('when login request it should return the current state and isLoading to true', () => {
  expect(reducer(undefined, actions.loginRequest())).toEqual({
    token: null,
    tokenData: {},
    isAuthenticated: false,
    isLoginChecked: false,
    isLoading: true,
    hasErrors: false
  });
});

it('when login success it should set login checked and authenticated', () => {
  const token = 'ABCD';
  const tokenData = {
    iat: 123456789,
    exp: 123456789,
    token: token
  };

  expect(reducer(undefined, actions.loginSuccess(token, tokenData))).toEqual({
    token: token,
    tokenData: tokenData,
    isAuthenticated: true,
    isLoginChecked: true,
    isLoading: false,
    hasErrors: false
  });

  expect(
    reducer(undefined, actions.loginRefreshTokenSuccess(token, tokenData))
  ).toEqual({
    token: token,
    tokenData: tokenData,
    isAuthenticated: true,
    isLoginChecked: true,
    isLoading: false,
    hasErrors: false
  });
});

it('when login failure it should set hasError and isLoading', () => {
  expect(reducer(undefined, actions.loginError())).toEqual({
    token: null,
    tokenData: {},
    isAuthenticated: false,
    isLoginChecked: false,
    isLoading: false,
    hasErrors: true
  });
});

it('when login refresh token error it should set isLoginChecked', () => {
  expect(reducer(undefined, actions.loginRefreshTokenError())).toEqual({
    token: null,
    tokenData: {},
    isAuthenticated: false,
    isLoginChecked: true,
    isLoading: false,
    hasErrors: false
  });
});

it('when logout success it should set initial state and isLoginChecked', () => {
  expect(reducer(undefined, actions.logoutSuccess())).toEqual({
    token: null,
    tokenData: {},
    isAuthenticated: false,
    isLoginChecked: true,
    isLoading: false,
    hasErrors: false
  });
});
