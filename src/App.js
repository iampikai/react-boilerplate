import React, { useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useRoutes } from 'react-router-dom';

import { Themes } from '@styles/Themes';
import { createIntl } from '@utils/Intl';
import { getRouteConfig } from '@routes';

const App = () => {
  const currentTheme = useSelector((state) => state.appReducer.theme);
  const currentLocale = useSelector((state) => state.appReducer.locale);
  const theme = useMemo(
    () => Themes[currentTheme] || Themes.DEFAULT,
    [currentTheme]
  );
  const intl = useMemo(() => createIntl(currentLocale), [currentLocale]);
  const renderedRoutes = useRoutes(getRouteConfig());

  return (
    <ThemeProvider theme={theme}>
      <RawIntlProvider value={intl}>{renderedRoutes}</RawIntlProvider>
    </ThemeProvider>
  );
};

export default App;
