import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#white',
      light: 'skyblue',
    },
    secondary: {
      main: '#2a3eb1',
    },
    otherColor: {
      main: '#ffee33',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Nunito, sans-serif',
    },
    headtitle: {
      fontFamily: 'Oswald, sans-serid',
    },
  },
});
