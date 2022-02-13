//TUTORIAL ADD//
import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import EntSubmit from "../Components/EntSubmit/EntSubmit";
import Home from "../Components/Home/Home";
import TableService from "../Service/TableService";


const Info = () => {
    const initialFormState = {
        id: null,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        published: true
    };
    const [formData, setFormData] = useState(initialFormState);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();


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

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    };

    const saveFormData = () => {
        var data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            
        };

    TableService.create(data)
    .then(response => {
        setFormData({
            id: response.data.id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            phoneNumber: response.data.phoneNumber,
            published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
    })
    .catch(e => {
        console.log(e)
    });
}


    const newFormData = () => {
        setFormData(initialFormState);
        setSubmitted(false); 

    };
    

  return (

    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newFormData}>
            Add
          </button>
        </div>
      ) : (
        <div>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              name="phoneNumber"
            />
          </div>

          <button onClick={saveFormData} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>

    

    //   <div>
       
    // <Paper elevation={6}>
    //     <form autoComplete="off" onSubmit= {handleSubmit}>
    //         <Typography>Patients Information</Typography>
    //         <TextField name="firstName" label="First Name" variant="outlined" margin="normal" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} fullWidth/>
    //         <TextField name="lastName" label="Last Name" variant="outlined" margin="normal" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} fullWidth/>
    //         <TextField name="phoneNumber" label="Phone Number" variant="outlined" margin="normal" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} fullWidth/>
    //         <Button color="primary" size="medium" variant="contained" type="submit" >Submit</Button>
    //     </form>
    // </Paper>

    // </div>
    
    
    
        );
    }




export default Info;