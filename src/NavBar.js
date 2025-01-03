import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const NavBar = () => {
  const handleLogoClick = () => alert('Ripit logo clicked!');
  const handleMenuItemClick = (menuItem) => alert(`You clicked ${menuItem}!`);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          src="/ripit_logo.png"
          alt="Ripit Logo"
          sx={{ width: 40, height: 40, cursor: 'pointer', marginRight: 2 }}
          onClick={handleLogoClick}
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ripit
        </Typography>
        <Button color="inherit" onClick={() => handleMenuItemClick('Home')}>Home</Button>
        <Button color="inherit" onClick={() => handleMenuItemClick('About')}>About</Button>
        <Button color="inherit" onClick={() => handleMenuItemClick('Contact')}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
