import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactPage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>Contact Us</Typography>
    <Box component="form" sx={{ mt: 2 }}>
      <TextField label="Your Name" fullWidth margin="normal" />
      <TextField label="Your Email" fullWidth margin="normal" />
      <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
      <Button variant="contained" sx={{ mt: 2 }}>Send Message</Button>
    </Box>
  </Container>
);

export default ContactPage;
