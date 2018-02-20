import * as t from './actionTypes';

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  isCreated: false,
  hasErrors: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case t.REGISTER_SUCCESS:
      return {
        ...INITIAL_STATE,
        isCreated: true,
        user: action.payload
      };

    case t.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: true
      };

    default:
      return state;
  }
}
