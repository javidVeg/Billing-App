import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Info = () => {
    const [formData, setFormData] = useState({firstName: '', lastName: '', phoneNumber: ''})

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
    }
        
  return (
    <Paper elevation={6}>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <Typography>Patients Information</Typography>
            <TextField name="firstName" label="First Name" variant="outlined" margin="normal" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} fullWidth/>
            <TextField name="lastName" label="Last Name" variant="outlined" margin="normal" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} fullWidth/>
            <TextField name="phoneNumber" label="Phone Number" variant="outlined" margin="normal" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} fullWidth/>
            <Button color="primary" size="medium" variant="contained" type="submit">Submit</Button>
        </form>
    </Paper>
    
        );
    }



export default Info;