import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import auth from './modules/auth';
import users from './modules/users';
import register from './modules/register';

export default combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [users.constants.NAME]: users.reducer,
  [register.constants.NAME]: register.reducer,
  form: formReducer,
  router: routerReducer
});
