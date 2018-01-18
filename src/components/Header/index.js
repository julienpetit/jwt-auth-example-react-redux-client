import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';

export default () => (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React - Redux boilerplate</h1>

            <NavLink to="/" exact activeClassName='active'>Home</NavLink>
            <NavLink to="/login" exact activeClassName='active'>Login</NavLink>
            <NavLink to="/account" exact activeClassName='active'>Account</NavLink>
        </header>
    </div>
);
