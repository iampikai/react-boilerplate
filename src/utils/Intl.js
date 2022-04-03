import { createIntl as createReactIntl, createIntlCache } from 'react-intl';

import Config from '@config';
import messages_en from '@locale/en.json';
import { store } from '@store';

const cache = createIntlCache();
let intl;

export const getMessages = () => ({
  en: messages_en,
});

export const createIntl = (_locale, _messages = {}) => {
  const locale =
    _locale || store.getState().appReducer.locale || Config.DEFAULT_LOCALE;
  const messages = { ...getMessages()[locale], ..._messages };

  intl = createReactIntl({ locale, messages }, cache);

  return intl;
};

export const getIntl = () => {
  return intl || createIntl();
};
