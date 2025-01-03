import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import theme from './theme';
import NavBar from './NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>Welcome to Ripit</Typography>
        <Typography variant="body1" gutterBottom>
          This sample app demonstrates a modern design approach using Material UI.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Card One</Typography>
                <Typography variant="body2" paragraph>
                  A simple card showcasing an alert-triggered button.
                </Typography>
                <Button variant="contained" color="primary" onClick={() => alert('You clicked Card One!')}>
                  Click Me
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Card Two</Typography>
                <Typography variant="body2" paragraph>
                  Another card demonstrating a secondary-outlined button.
                </Typography>
                <Button variant="outlined" color="secondary" onClick={() => alert('You clicked Card Two!')}>
                  Click Me
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>Ripit’s Advantages</Typography>
          <Typography variant="body1">
            - Clean, modern MUI-driven design <br /> - Easy customization and theming <br /> - Responsive layout for all devices
          </Typography>
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{ mt: 4, py: 2, textAlign: 'center', backgroundColor: theme.palette.primary.main, color: '#fff' }}
      >
        <Typography variant="body2">© 2025 Ripit Inc. All rights reserved.</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
