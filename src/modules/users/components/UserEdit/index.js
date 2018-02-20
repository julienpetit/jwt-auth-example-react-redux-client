import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required, length, email } from 'redux-form-validators';
import { fetchRequest, updateRequest } from '../../actions';

class UserEdit extends Component {
  componentWillMount() {
    this.props.fetchRequest(this.props.match.params.id);
  }

  handleSubmit(values) {
    this.props.updateRequest(values);
  }

  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
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
        {isLoading && <p>Loading...</p>}

        {initialValues && (
          <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
            <div>
              <Field
                name="username"
                component={this.renderField}
                label="Username"
                validate={[required(), length({ minimum: 2 })]}
              />
            </div>
            <div>
              <Field
                name="email"
                component={this.renderField}
                label="Email"
                validate={[required(), email(), length({ minimum: 2 })]}
              />
            </div>
            <div>
              <label htmlFor="enabled">Enabled</label>
              <Field name="enabled" component="input" type="checkbox" />
            </div>
            <div>
              <label>Roles</label>
              <div>
                <Field name="roles" component="select" multiple={true}>
                  <option value="ROLE_USER">User</option>
                  <option value="ROLE_ADMIN">Admin</option>
                </Field>
              </div>
            </div>
            <div>
              <button type="submit" disabled={pristine || submitting}>
                Submit
              </button>
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </div>
          </form>
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
