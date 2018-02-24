import { updateIntl } from 'react-intl-redux';
import * as constants from './constants';
import messages from './messages';

export const updateLocale = locale => {
  // No locale add, try to get the locale from the localStorage or take the navigator language
  if (!locale) {
    const lsLocale = localStorage.getItem(constants.LS_LOCALE);
    locale = lsLocale || window.navigator.language;
  }

  // If the locale is not allowed take the default locale
  if (constants.ALLOWED_LOCALES.indexOf(locale) === -1) {
    locale = constants.DEFAULT_LOCALE;
  }

  // Persist value to localstorage
  localStorage.setItem(constants.LS_LOCALE, locale);

  return updateIntl({
    locale,
    messages: messages[locale] || messages['en']
  });
};
