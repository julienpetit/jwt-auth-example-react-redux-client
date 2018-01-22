import { combineReducers } from 'redux';
import list from './ListReducer';
import edit from './EditReducer';

export default combineReducers({
    list,
    edit,
});
