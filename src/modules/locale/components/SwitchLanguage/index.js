import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl, intlShape } from 'react-intl';
import { updateLocale } from '../../actions';
import * as constants from '../../constants';

class SwitchLanguage extends Component {
  render() {
    return (
      <div>
        {constants.ALLOWED_LOCALES.map(locale => (
          <button
            key={locale}
            onClick={() => this.props.updateLocale(locale)}
            disabled={locale === this.props.currentLocale}
          >
            {this.props.intl.formatMessage({ id: `locale.${locale}` })}
          </button>
        ))}
      </div>
    );
  }
}

const connected = connect(({ intl }) => ({ currentLocale: intl.locale }), {
  updateLocale
})(SwitchLanguage);

export default injectIntl(connected);
