import React, { useCallback, useContext, createContext } from 'react';
import {
  ThemeProvider as StyleComponentsThemeProvider,
  DefaultTheme,
} from 'styled-components';
import dark from 'styles/themes/dark';
import ligth from 'styles/themes/light';

import usePersistState from './PersistStateContext';

interface ThemeContextData {
  toogleTheme(themeTitle?: string): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistState<DefaultTheme>(
    '@proffy:theme',
    ligth,
  );

  const toogleTheme = useCallback(() => {
    setTheme(theme.title === 'dark' ? ligth : dark);
    console.log('trocu');
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ toogleTheme, theme }}>
      <StyleComponentsThemeProvider theme={theme}>
        {children}
      </StyleComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be use inside a ThemeProvider');
  }

  return context;
}

export { useTheme, ThemeProvider };
