import { createMuiTheme } from '@material-ui/core/styles';

const overrides = {
  MuiTouchRipple: {
    root: {
      display: 'none',
    },
  },
};

export default createMuiTheme({
  palette: {
    primary: {
      main: '#bd93f9',
      secondary: '#ddd',
    },
  },
  overrides,
});
