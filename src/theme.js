import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#000000' }, // Black
    secondary: { main: '#ffffff' }, // White
    text: { primary: '#ffffff', secondary: '#000000' } // Text colors
  },
  typography: { fontFamily: 'Arial, sans-serif' },
});

export default theme;
