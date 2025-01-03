import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage = () => (
  <Container sx={{ mt: 4, color: '#ffffff' }}>
    <Typography variant="h3" gutterBottom>
      Welcome to Ripit
    </Typography>
    <Typography variant="body1">
      Explore the app and see its black-and-white design in action.
    </Typography>
  </Container>
);

export default HomePage;
