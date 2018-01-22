import * as t from '../actionTypes';

const INITIAL_STATE = {
    users: [],
    isLoading: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case t.FETCH_LIST_REQUEST:
            return {
                ...INITIAL_STATE,
                isLoading: true,
            };

        case t.FETCH_LIST_SUCCESS:
            return {
                ...INITIAL_STATE,
                users: action.payload,
            };

        case t.FETCH_LIST_FAILURE:
            return {
                ...INITIAL_STATE,
                hasErrors: true,
            };

        default:
            return state;
    }
}
