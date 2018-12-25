import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import './styling/main.css';
import Router from './Router';
import theme from './styling/theme';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
