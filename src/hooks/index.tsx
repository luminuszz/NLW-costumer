import React from 'react';

import { ThemeProvider } from './ThemeContext';

interface Props {
  data?: unknown;
}

export const AppProvider: React.FC<Props> = ({ children, data }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
