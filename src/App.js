import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import theme from './theme';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <div>testing</div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
