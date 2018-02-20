import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import Header from './components/Header';
import routes from './routes';
import auth from './modules/auth';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    isLoginChecked: PropTypes.bool
  };

  componentWillMount() {
    this.props.dispatch(auth.actions.loginRefreshTokenRequest());
  }

  render() {
    const { isAuthenticated, isLoginChecked } = this.props;

    if (!isLoginChecked) {
      return (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      );
    }

    return (
      <div>
        <Header isAuthenticated={isAuthenticated} />

        {routes.map(route => <Route key={route.path} {...route} />)}

        <footer>I`m the footer, I am on every page.</footer>
      </div>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
    isLoginChecked: auth.isLoginChecked
  }),
  dispatch => ({ dispatch }),
  null,
  { pure: false }
)(App);
