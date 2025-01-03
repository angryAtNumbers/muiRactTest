import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const ServicesPage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>Our Services</Typography>
    <List>
      <ListItem>Web Design</ListItem>
      <ListItem>SEO Optimization</ListItem>
      <ListItem>Content Creation</ListItem>
    </List>
  </Container>
);

export default ServicesPage;
