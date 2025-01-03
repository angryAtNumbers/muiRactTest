import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#000000' }, // Black
    secondary: { main: '#ffffff' }, // White
    text: { primary: '#000000', secondary: '#555555' } // Text colors
  },
  typography: { fontFamily: 'Arial, sans-serif' },
});

export default theme;
