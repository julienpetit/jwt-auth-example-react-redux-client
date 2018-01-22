import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './Header.css';

const Header = ({ isAuthenticated = false }) => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React - Redux boilerplate</h1>

        <NavLink to="/" exact activeClassName='active'>Home</NavLink>

        {isAuthenticated ? (
            <NavLink to="/logout" exact activeClassName='active'>Logout</NavLink>
        ) : (
            <NavLink to="/login" exact activeClassName='active'>Login</NavLink>
        )}

        <NavLink to="/account" exact activeClassName='active'>Account</NavLink>
        <NavLink to="/users" exact activeClassName='active'>Users</NavLink>

    </header>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Header;
