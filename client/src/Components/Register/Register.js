import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TableService from '../../Service/TableService';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch  } from 'react-redux';
import { toast } from 'react-toastify'
import { register, reset } from '../../Features/auth/authSlice'


const theme = createTheme();

export default function SignUp() {

//------------NEW-------------//

const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  password2: ''
});

const { name, email, password, password2 } = formData

const navigate = useNavigate()
const dispatch = useDispatch()
const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth )


useEffect(() => {
  if(isError) {
    toast.error(message)
  }
//@ ISSUE: cannot route back to register and login page because it navigates back "/" because if statment still true
  if(isSuccess || user) {
    navigate('/')
  }
  dispatch(reset())

},[user, isError, isSuccess, message, navigate, dispatch])

const onChange = (e) => {
 
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
};

const onSubmit = (e) => {
  e.preventDefault();

  if(password !== password2) {
    toast.error('passwords do not match')
  } else {
    const userData = {
      name,
      email,
      password,
    }

    dispatch(register(userData))
    console.log(userData)
  }
//   var data = {
     
//       firstName: formData.firstName.toLowerCase(),
//       lastName: formData.lastName.toLowerCase(),
//       email: formData.email.toLowerCase(),
//       password: formData.password
// };
// console.log(data)

// TableService.register(data)
// .then(response => {
//   setFormData({
    
//       firstName: response.data.firstName,
//       lastName: response.data.lastName,
//       email: response.data.email,
//       password: response.data.password
//   });
  
//   console.log(response.data);
//   localStorage.setItem("token")
// })
// .catch(e => {
//   console.log(e)
// });
}
//----------------------------//


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
      
  //     firstName: data.get('firstName'),
  //     lastName: data.get('lastName'),
  //     email: data.get('email'),
  //     password: data.get('password'),
      
  //   });
  // };
  // const handleBoolean = (event) => {
  //   const { name, checked } = event.target
   
  // }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <Icon icon="mdi:toothbrush-paste" width= "30px" height= "30px" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={onChange}
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={onChange}
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="family-name"
                  value={name}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                  autoComplete="new-password2"
                  value={password2}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="isAdmin" color="primary" onChange={handleBoolean} />}
                  label="Admin?"
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={onSubmit} 
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}