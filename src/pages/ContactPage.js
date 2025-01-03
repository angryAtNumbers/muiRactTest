import React from 'react';
import { Container, Typography } from '@mui/material';

const ContactPage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>
      Contact Us
    </Typography>
    <Typography variant="body1">
      You can reach us at contact@ripit.com or call (555) 555-5555.
    </Typography>
  </Container>
);

export default ContactPage;
