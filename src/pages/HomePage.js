import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>
      Welcome to Ripit
    </Typography>
    <Typography variant="body1">
      This is the home page. Explore the app using the navigation menu.
    </Typography>
  </Container>
);

export default HomePage;
