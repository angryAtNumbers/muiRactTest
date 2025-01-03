import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>About Pipit</Typography>
    <Typography variant="body1">
      Pipit is a modern website showcasing the capabilities of Material-UI. Our mission is to provide clean and functional designs.
    </Typography>
  </Container>
);

export default AboutPage;
