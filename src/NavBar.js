import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3a7ca5' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ripit
        </Typography>
        <Button
          component={Link}
          to="/"
          color="inherit"
          sx={{ '&:hover': { backgroundColor: '#2d5e87', color: '#fff' } }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/about"
          color="inherit"
          sx={{ '&:hover': { backgroundColor: '#2d5e87', color: '#fff' } }}
        >
          About
        </Button>
        <Button
          component={Link}
          to="/contact"
          color="inherit"
          sx={{ '&:hover': { backgroundColor: '#2d5e87', color: '#fff' } }}
        >
          Contact
        </Button>
        <Button
          component={Link}
          to="/auth"
          color="inherit"
          sx={{ '&:hover': { backgroundColor: '#2d5e87', color: '#fff' } }}
        >
          Login / Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
