import * as t from './actionTypes';

const INITIAL_STATE = {
    token: null,
    isLoading: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case t.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case t.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        case t.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}
