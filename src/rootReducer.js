import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { intlReducer } from 'react-intl-redux';
import auth from './modules/auth';
import users from './modules/users';
import register from './modules/register';
import locale from './modules/locale';

export default combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [users.constants.NAME]: users.reducer,
  [register.constants.NAME]: register.reducer,
  [locale.constants.NAME]: locale.reducer,
  form: formReducer,
  router: routerReducer,
  intl: intlReducer
});
