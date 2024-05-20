import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import virtu from "../assets/virtu.png";
function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: '0 8px 8px rgba(0, 0, 0, 0.1)', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={virtu} alt="" style={{ width: 130, marginBottom: 16 }} />
          
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
