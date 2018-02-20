import { withAuthentication } from '../enhancers';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import AccountPage from '../pages/AccountPage';
import UsersPage from '../pages/UsersPage';
import UserEditPage from '../modules/users/components/UserEdit';
import RegisterPage from '../pages/RegisterPage';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/register',
    component: RegisterPage,
    exact: true
  },
  {
    path: '/login',
    example: '/login',
    component: LoginPage,
    exact: true
  },
  {
    path: '/logout',
    component: LogoutPage,
    exact: true
  },
  {
    path: '/account',
    component: withAuthentication(AccountPage),
    exact: true
  },
  {
    path: '/users',
    component: withAuthentication(UsersPage),
    exact: true
  },
  {
    path: '/user/:id/edit',
    component: withAuthentication(UserEditPage),
    exact: true,
    strict: true
  }
];

export default routes;
