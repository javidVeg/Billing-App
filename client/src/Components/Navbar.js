import { Link } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Billing App
          </Typography>
          
              <Link to="/home">
                  <Button sx= {{color: "white"}}>Home</Button>
                  </Link>
              <Link to="/patientAdd">
                  <Button sx= {{color: "white"}}>Add New</Button>
                  </Link>
              <Link to="/listAll">
                  <Button sx= {{color: "white"}}>List All</Button>
                  </Link>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}