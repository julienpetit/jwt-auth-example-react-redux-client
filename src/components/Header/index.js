import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';

export default () => (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React - Redux boilerplate</h1>

            <Link to="/" >Home</Link>
            <Link to="/login" >Login</Link>
            <Link to="/account" >Account</Link>
        </header>
    </div>
);
