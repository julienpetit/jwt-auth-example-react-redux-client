import * as t from '../actionTypes';

const INITIAL_STATE = {
    user: null,
    isLoading: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case t.FETCH_REQUEST:
            return {
                ...INITIAL_STATE,
                isLoading: true,
            };

        case t.FETCH_SUCCESS:
            return {
                ...INITIAL_STATE,
                user: action.payload,
            };

        case t.UPDATE_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case t.UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            };

        case t.UPDATE_FAILURE:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}
