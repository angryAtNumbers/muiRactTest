import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const HomePage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>
      Welcome to Pipit
    </Typography>
    <Typography variant="body1" gutterBottom>
      Pipit is a simple, clean, and functional website built with Material-UI. Explore our services and latest blog posts below.
    </Typography>
    <Grid container spacing={4} sx={{ mt: 4 }}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Our Services</Typography>
            <Typography variant="body2">
              Learn about the great services we offer and how we can help you achieve your goals.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Latest Blog Post</Typography>
            <Typography variant="body2">
              Check out our latest insights and articles from our expert contributors.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default HomePage;
