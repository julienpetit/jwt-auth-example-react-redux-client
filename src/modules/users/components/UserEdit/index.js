import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { required, length, email } from 'redux-form-validators';
import { Button, Form, Loader } from 'semantic-ui-react';
import { fetchRequest, updateRequest } from '../../actions';
import Input from '../../../../components/form/Input';
import Checkbox from '../../../../components/form/Checkbox';

class UserEdit extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired
  };

  componentWillMount() {
    this.props.fetchRequest(this.props.userId);
  }

  handleSubmit(values) {
    this.props.updateRequest(values);
  }

  render() {
    const {
      isLoading,
      initialValues,
      pristine,
      handleSubmit,
      reset,
      submitting
    } = this.props;

    return (
      <div>
        <Loader active={isLoading} inline="centered" />

        {initialValues && (
          <Form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
            <Field
              name="username"
              component={Input}
              label="Username"
              validate={[required(), length({ minimum: 2 })]}
            />
            <Field
              name="email"
              component={Input}
              label="Email"
              validate={[required(), email(), length({ minimum: 2 })]}
            />

            <Field name="enabled" label="Enabled" component={Checkbox} />

            <div className="field">
              <label>Roles</label>

              <Field name="roles" component="select" multiple={true}>
                <option value="ROLE_USER">User</option>
                <option value="ROLE_ADMIN">Admin</option>
              </Field>
            </div>

            <Button type="submit" disabled={pristine || submitting}>
              Submit
            </Button>
            <Button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </Button>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, users }) => ({
  isLoading: users.edit.isLoading,
  initialValues: users.edit.user,
  enableReinitialize: true
});

const form = reduxForm({
  form: 'user'
})(UserEdit);

export default connect(mapStateToProps, { fetchRequest, updateRequest })(form);
