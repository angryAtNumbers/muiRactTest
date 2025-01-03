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
          alt="Logo"
          sx={{ width: 40, height: 40, marginRight: 2 }}
        />
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffffff' }}>
          Ripit
        </Typography>
        <Button
          component={Link}
          to="/"
          sx={{ color: '#ffffff', '&:hover': { backgroundColor: '#ffffff', color: '#000000' } }}
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
