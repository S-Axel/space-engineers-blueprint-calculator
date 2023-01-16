import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d324d',
      contrastText: '#fafdff',
    },
    secondary: {
      main: '#ffa500',
    },
    background: {
      default: '#fafdff',
      paper: '#fff',
    },
    text: {
      primary: 'rgba(4,17,26,0.87)',
      secondary: 'rgba(4,17,26,0.6)',
      disabled: 'rgba(4,17,26,0.38)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 905,
      lg: 1240,
      xl: 1440,
    },
  },
});

export default theme;
