import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>
      About Ripit
    </Typography>
    <Typography variant="body1">
      Ripit is a sample app showcasing the power of Material UI and React.
    </Typography>
  </Container>
);

export default AboutPage;
