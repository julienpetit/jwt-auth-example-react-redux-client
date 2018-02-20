import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function withAuthentication(WrappedComponent) {
  const WithAuthentication = props => {
    if (!props.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };

  const { bool } = PropTypes;
  WithAuthentication.propTypes = {
    isAuthenticated: bool.isRequired
  };

  const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
  });

  return connect(mapStateToProps)(WithAuthentication);
}
