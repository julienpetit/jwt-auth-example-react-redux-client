import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions';

class LoginForm extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func,
        loginRequest: PropTypes.func,
        login: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.array,
        }),
    };

    submit = (values) => {
        this.props.loginRequest(values)
    };

    render() {
        const {
            handleSubmit,
            isAuthenticated,
            isLoading,
            hasErrors,
        } = this.props;

        return (
            <div className="login">

                {isLoading && (
                    <p>Loading...</p>
                )}

                {isAuthenticated && (
                    <h2>Bienvenue</h2>
                )}

                {hasErrors && (
                    <p>username and password does not match.</p>
                )}

                {!isAuthenticated && (
                    <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
                        <h1>LOGIN</h1>
                        <label htmlFor="email">Email</label>
                        <Field
                            name="username"
                            type="text"
                            id="username"
                            component="input"
                        />
                        <label htmlFor="password">Password</label>
                        <Field
                            name="password"
                            type="password"
                            id="password"
                            className="password"
                            component="input"
                        />
                        <button action="submit">LOGIN</button>
                    </form>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
    hasErrors: auth.hasErrors,
});

const connected = connect(mapStateToProps, { loginRequest })(LoginForm);

const formed = reduxForm({
    form: 'login',
})(connected);

export default formed;
