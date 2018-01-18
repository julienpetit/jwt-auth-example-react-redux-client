import * as t from './actionTypes';

const INITIAL_STATE = {
    token: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case t.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}
