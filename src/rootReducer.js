import { combineReducers } from 'redux';
import auth from './modules/auth';

export default combineReducers({
    [auth.constants.NAME]: auth.reducer,
});