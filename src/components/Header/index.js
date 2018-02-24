import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import './Header.css';

const Header = ({ isAuthenticated = false, tokenData }) => (
  <header className="App-header">
    <h1 className="App-title">
      {isAuthenticated && tokenData ? (
        <span>Welcome {tokenData.username}</span>
      ) : (
        <span>Welcome to React</span>
      )}
    </h1>
    <Menu pointing>
      <Menu.Item
        as={NavLink}
        to="/"
        exact
        activeClassName="active"
        name="Home"
      />

      <Menu.Item
        as={NavLink}
        to="/users"
        exact
        activeClassName="active"
        name="Users"
      />

      <Menu.Menu position="right">
        {isAuthenticated ? (
          <Fragment>
            <Menu.Item
              as={NavLink}
              to="/account"
              exact
              activeClassName="active"
              name="Account"
            />
            <Menu.Item
              as={NavLink}
              to="/logout"
              exact
              activeClassName="active"
              name="Logout"
            />
          </Fragment>
        ) : (
          <Fragment>
            <Menu.Item
              as={NavLink}
              to="/register"
              exact
              activeClassName="active"
              name="Register"
            />
            <Menu.Item
              as={NavLink}
              to="/login"
              exact
              activeClassName="active"
              name="Login"
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

export default Header;
