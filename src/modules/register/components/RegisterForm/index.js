import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { required, length, confirmation, email } from 'redux-form-validators';

class RegisterForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    registerRequest: PropTypes.func,
    isLoading: PropTypes.bool.isRequired,
    hasErrors: PropTypes.bool.isRequired,
    isCreated: PropTypes.bool.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(user) {
    this.props.registerRequest(user);
  }

  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label htmlFor={input.name}>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
        </div>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    );
  }

  render() {
    const { handleSubmit, isLoading, hasErrors, isCreated, user } = this.props;

    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {hasErrors && <p>Unable to register</p>}
        {isCreated && <p>Bienvenue {user.username} !</p>}

        {!isCreated && (
          <form onSubmit={handleSubmit(this.submit)}>
            <Field
              name="username"
              component={this.renderField}
              type="text"
              label="Username"
              validate={[required(), length({ minimum: 3 })]}
            />
            <Field
              name="email"
              component={this.renderField}
              type="text"
              label="Email"
              validate={[required(), length({ minimum: 3 }, email())]}
            />
            <Field
              name="plainPassword"
              component={this.renderField}
              type="password"
              label="Password"
              validate={[required(), length({ minimum: 6 })]}
            />
            <Field
              name="password_confirm"
              component={this.renderField}
              type="password"
              label="Confirm password"
              validate={[
                confirmation({ field: 'plainPassword', fieldLabel: 'Password' })
              ]}
            />
            <button>Register</button>
          </form>
        )}
      </div>
    );
  }
}

export default RegisterForm;
