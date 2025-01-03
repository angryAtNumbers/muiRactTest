import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, TextField, Button } from '@mui/material';

const AuthPage = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ mt: 4, mx: 'auto', width: '50%', textAlign: 'center' }}>
      <Tabs value={tab} onChange={handleTabChange} centered>
        <Tab label="Login" />
        <Tab label="Sign Up" />
      </Tabs>
      {tab === 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>Login</Typography>
          <TextField label="Email" type="email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Login</Button>
        </Box>
      )}
      {tab === 1 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>Sign Up</Typography>
          <TextField label="Email" type="email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <TextField label="Confirm Password" type="password" fullWidth margin="normal" />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Sign Up</Button>
        </Box>
      )}
    </Box>
  );
};

export default AuthPage;
