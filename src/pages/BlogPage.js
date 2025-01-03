import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const BlogPage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>Blog</Typography>
    <Typography variant="body1" gutterBottom>
      Explore our latest blog posts and insights.
    </Typography>
    <Grid container spacing={4} sx={{ mt: 4 }}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Post 1</Typography>
            <Typography variant="body2">This is a sample blog post about web design trends.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Post 2</Typography>
            <Typography variant="body2">This is a sample blog post about SEO best practices.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default BlogPage;
