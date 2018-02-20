import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Button, Form, Message, Loader } from 'semantic-ui-react';
import { required, length, confirmation, email } from 'redux-form-validators';
import Input from '../../../../components/form/Input';

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

  render() {
    const { handleSubmit, isLoading, hasErrors, isCreated, user } = this.props;

    return (
      <div>
        <Loader active={isLoading} inline="centered" />

        {!isLoading &&
          hasErrors && <Message error header="Unable to register." />}
        {isCreated && <p>Bienvenue {user.username} !</p>}

        {!isCreated && (
          <Form onSubmit={handleSubmit(this.submit)}>
            <Field
              name="username"
              component={Input}
              type="text"
              label="Username"
              validate={[required(), length({ minimum: 3 })]}
            />
            <Field
              name="email"
              component={Input}
              type="text"
              label="Email"
              validate={[required(), length({ minimum: 3 }, email())]}
            />
            <Field
              name="plainPassword"
              component={Input}
              type="password"
              label="Password"
              validate={[required(), length({ minimum: 6 })]}
            />
            <Field
              name="password_confirm"
              component={Input}
              type="password"
              label="Confirm password"
              validate={[
                confirmation({ field: 'plainPassword', fieldLabel: 'Password' })
              ]}
            />
            <Button>Register</Button>
          </Form>
        )}
      </div>
    );
  }
}

export default RegisterForm;
