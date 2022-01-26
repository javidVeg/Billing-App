import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import EntSubmit from "../Components/EntSubmit/EntSubmit";
import Home from "../Components/Home/Home";
import { setDataContext } from "../Context/setDataContext";

const Info = () => {
    const [formData, setFormData] = useState({firstName: '', lastName: '', phoneNumber: ''})
  


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // navigate("/entSubmit")
       

        try {
            await axios.post("http://localhost:5001/api/patientsinfo/", formData)
        } catch (error) {
            console.log(error)
        }
    }

    

  return (
      <div>
       
    <Paper elevation={6}>
        <form autoComplete="off" onSubmit= {handleSubmit}>
            <Typography>Patients Information</Typography>
            <TextField name="firstName" label="First Name" variant="outlined" margin="normal" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} fullWidth/>
            <TextField name="lastName" label="Last Name" variant="outlined" margin="normal" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} fullWidth/>
            <TextField name="phoneNumber" label="Phone Number" variant="outlined" margin="normal" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} fullWidth/>
            <Button color="primary" size="medium" variant="contained" type="submit" >Submit</Button>
        </form>
    </Paper>
    </div>
    
    
    
        );
    }



export default Info;