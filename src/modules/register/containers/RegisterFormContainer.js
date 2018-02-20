import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import RegisterForm from '../components/RegisterForm';

const mapStateToProps = ({ register }) => ({
  isLoading: register.isLoading,
  hasErrors: register.hasErrors,
  isCreated: register.isCreated,
  user: register.user
});

const connected = connect(mapStateToProps, { registerRequest })(RegisterForm);

const formed = reduxForm({
  form: 'register'
})(connected);

export default formed;
