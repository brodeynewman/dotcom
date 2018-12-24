import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import theme from './theme';
import Router from './Router';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
