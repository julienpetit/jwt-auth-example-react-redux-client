import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import auth from './modules/auth';
import users from './modules/users';

export default combineReducers({
    [auth.constants.NAME]: auth.reducer,
    [users.constants.NAME]: users.reducer,
    form: formReducer,
    router: routerReducer,
});
