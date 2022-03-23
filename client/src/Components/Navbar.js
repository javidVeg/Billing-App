import { Link, useNavigate} from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../Features/auth/authSlice";



export default function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
//? useSelector brings in the user state and allows for the Protected routes to be accessed.//
  const { user } =useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/somelandingpage')
  }
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
              {user ? (
                <>
                  <Link to="/home">
                    <Button sx= {{color: "white"}}>Home</Button>
                  </Link>
                  <Link to="/messageBoard">
                    <Button sx= {{color: "white"}}>Message Board</Button>
                  </Link>
                  <Link to="/patientAdd">
                    <Button sx= {{color: "white"}}>Add New</Button>
                  </Link>
                  <Link to="/listAll">
                    <Button sx= {{color: "white"}}>List All</Button>
                  </Link>
                  <Button sx= {{color: "white"}} onClick={onLogout}>Log Out</Button>
                  </>
                  ) 
                  : (<>
                      <Link to='/login'>
                        <Button sx= {{color: "white"}}>Log In</Button>
                      </Link>
                      <Link to='/register'>   
                        <Button sx= {{color: "white"}}>Register</Button>
                      </Link>
                    </>)}
          
              
              
              

             
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}