import * as t from './actionTypes';

const INITIAL_STATE = {
  token: null,
  tokenData: {},
  isAuthenticated: false,
  isLoginChecked: false,
  isLoading: false,
  hasErrors: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case t.LOGIN_SUCCESS:
    case t.LOGIN_REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoginChecked: true
      };

    case t.LOGIN_FAILURE:
      return {
        ...state,
        hasErrors: true,
        isLoading: false
      };

    case t.LOGIN_REFRESH_TOKEN_FAILURE:
      return {
        ...INITIAL_STATE,
        isLoginChecked: true
      };

    case t.LOGOUT_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoginChecked: true
      };

    default:
      return state;
  }
}
