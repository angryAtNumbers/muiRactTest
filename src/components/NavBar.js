import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
      <Toolbar>
        <Box
          component="img"
          src="/logo.png"
          alt="Pipit Logo"
          sx={{ width: 80, height: 80, marginRight: 2 }} // Double the size of the logo
        />
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffffff' }}>
          Pipit
        </Typography>
        <Button
          component={Link}
          to="/"
          sx={{ color: '#ffffff', '&:hover': { backgroundColor: '#ffffff', color: '#000000' } }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/about"
          sx={{ color: '#ffffff', '&:hover': { backgroundColor: '#ffffff', color: '#000000' } }}
        >
          About
        </Button>
        <Button
          component={Link}
          to="/services"
          sx={{ color: '#ffffff', '&:hover': { backgroundColor: '#ffffff', color: '#000000' } }}
        >
          Services
        </Button>
        <Button
          component={Link}
          to="/contact"
          sx={{ color: '#ffffff', '&:hover': { backgroundColor: '#ffffff', color: '#000000' } }}
        >
          Contact
        </Button>
        <Button
          component={Link}
          to="/blog"
          sx={{ color: '#ffffff', '&:hover': { backgroundColor: '#ffffff', color: '#000000' } }}
        >
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
