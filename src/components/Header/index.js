import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { Menu } from 'semantic-ui-react';
import SwitchLanguage from '../../modules/locale/components/SwitchLanguage';
import './Header.css';

const Header = ({ isAuthenticated = false, tokenData, intl }) => (
  <header className="App-header">
    <h1 className="App-title">
      <FormattedMessage id="app.title" />
    </h1>

    <SwitchLanguage />

    <Menu pointing>
      <Menu.Item
        as={NavLink}
        to="/"
        exact
        activeClassName="active"
        name={intl.formatMessage({ id: 'nav.home' })}
      />

      <Menu.Item
        as={NavLink}
        to="/users"
        exact
        activeClassName="active"
        name={intl.formatMessage({ id: 'nav.users' })}
      />

      <Menu.Menu position="right">
        {isAuthenticated ? (
          <Fragment>
            <Menu.Item
              as={NavLink}
              to="/account"
              exact
              activeClassName="active"
              name={intl.formatMessage({ id: 'nav.account' })}
            />
            <Menu.Item
              as={NavLink}
              to="/logout"
              exact
              activeClassName="active"
              name={intl.formatMessage({ id: 'nav.logout' })}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Menu.Item
              as={NavLink}
              to="/register"
              exact
              activeClassName="active"
              name={intl.formatMessage({ id: 'nav.register' })}
            />
            <Menu.Item
              as={NavLink}
              to="/login"
              exact
              activeClassName="active"
              name={intl.formatMessage({ id: 'nav.login' })}
            />
          </Fragment>
        )}
      </Menu.Menu>
    </Menu>
  </header>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  tokenData: PropTypes.object
};

export default injectIntl(Header);
