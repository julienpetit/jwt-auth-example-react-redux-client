import * as t from './actionTypes';

const INITIAL_STATE = {
    token: null,
    tokenData: {},
    isAuthenticated: false,
    isLoading: false,
    hasErrors: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case t.LOGIN_REQUEST:
            return {
                ...INITIAL_STATE,
                isLoading: true,
            };

        case t.LOGIN_SUCCESS:
            return {
                ...INITIAL_STATE,
                ...action.payload,
            };

        case t.LOGIN_FAILURE:
            return {
                ...INITIAL_STATE,
                hasErrors: true,
            };

        case t.LOGIN_LOAD_TOKEN_SUCCESS:
            return {
                ...INITIAL_STATE,
                ...action.payload,
            };

        case t.LOGOUT_SUCCESS:
            return {
                ...INITIAL_STATE,
            };

        default:
            return state;
    }
}
