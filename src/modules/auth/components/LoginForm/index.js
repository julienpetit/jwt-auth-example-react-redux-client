import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import Input from '../../../../components/form/Input';
import { Button, Form, Message, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { required, length, email } from 'redux-form-validators';
import { loginRequest } from '../../actions';

class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    loginRequest: PropTypes.func,
    login: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array
    })
  };

  submit = ({ username, password }) => {
    this.props.loginRequest(username, password);
  };

  render() {
    const { handleSubmit, isAuthenticated, isLoading, hasErrors } = this.props;

    return (
      <div className="login">
        <Loader active={isLoading} inline="centered" />

        {isAuthenticated && <h2>Bienvenue</h2>}

        {!isLoading &&
          hasErrors && (
            <Message error header="Username and password does not match." />
          )}

        {!isAuthenticated && (
          <Form className="widget-form" onSubmit={handleSubmit(this.submit)}>
            <Field
              name="username"
              label="Email"
              type="text"
              id="username"
              component={Input}
              validate={[required(), length({ minimum: 3 }, email())]}
            />

            <Field
              name="password"
              type="password"
              label="Password"
              id="password"
              className="password"
              component={Input}
              validate={[required(), length({ minimum: 3 }, email())]}
            />
            <Button action="submit">LOGIN</Button>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isLoading,
  hasErrors: auth.hasErrors
});

const connected = connect(mapStateToProps, { loginRequest })(LoginForm);

const formed = reduxForm({
  form: 'login'
})(connected);

export default formed;
