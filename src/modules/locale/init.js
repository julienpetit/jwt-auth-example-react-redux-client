import React from 'react';
import Validators from 'redux-form-validators';
import { FormattedMessage } from 'react-intl';
import { addLocaleData } from 'react-intl';

import frLocaleData from 'react-intl/locale-data/fr';
import enLocaleData from 'react-intl/locale-data/en';

addLocaleData([...enLocaleData, ...frLocaleData]);

Validators.formatMessage = function(msg) {
  return <FormattedMessage {...msg.props || msg} />;
};
