import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from './modules/auth';
import './App.css';
import logo from './logo.svg';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const { username, password } = this.state;
        const { dispatch } = this.props;

        dispatch(auth.actions.loginRequest({
            username,
            password,
        }));
    }

    render() {

        const { username, password } = this.state;
        const { isAuthenticated } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                {!isAuthenticated && (
                    <form>
                        <input type="text" value={username} name="username" onChange={(e) => this.setState({ username: e.target.value })} />
                        <input type="password" value={password} name="password" onChange={(e) => this.setState({ password: e.target.value })} />
                        <button type="button" onClick={this.handleOnClick}>
                            Login
                        </button>
                    </form>
                )}

                {isAuthenticated && (
                    <h2>Bienvenue</h2>
                )}

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.token !== null,
});

const connected = connect(mapStateToProps, dispatch => ({ dispatch }))(App);

export default connected;
