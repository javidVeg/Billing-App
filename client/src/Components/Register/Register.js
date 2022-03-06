import * as React from 'react';
import { useState } from 'react';
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

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

//------------NEW-------------//
const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};
const [formData, setFormData] = useState(initialFormState);
const [submitted, setSubmitted] = useState(false);
// const navigate = useNavigate();


// const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData)
//     navigate("/entSubmit")
 

//     try {
//         await axios.post("http://localhost:5001/api/patientsinfo/", formData)
//     } catch (error) {
//         console.log(error)
//     }
// }

const handleInputChange = e => {
  e.preventDefault();
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value })
 
};

const saveFormData = (e) => {
  e.preventDefault();
  var data = {
     
      firstName: formData.firstName.toLowerCase(),
      lastName: formData.lastName.toLowerCase(),
      email: formData.email.toLowerCase(),
      password: formData.password
};
console.log(data)

TableService.register(data)
.then(response => {
  setFormData({
    
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      email: response.data.email,
      password: response.data.password
  });
  setSubmitted(true);
  console.log(response.data);
  localStorage.setItem("token")
})
.catch(e => {
  console.log(e)
});
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={saveFormData} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
              onClick={saveFormData} 
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}