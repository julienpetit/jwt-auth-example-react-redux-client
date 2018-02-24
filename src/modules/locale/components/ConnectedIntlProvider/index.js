import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';

class ConnectedIntlProvider extends Component {
  render() {
    return (
      <IntlProvider key={this.props.currentLocale}>
        {this.props.children}
      </IntlProvider>
    );
  }
}

export default connect(({ intl }) => ({ currentLocale: intl.locale }))(
  ConnectedIntlProvider
);
