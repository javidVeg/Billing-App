import React, { useContext} from 'react';
import { Paper, Typography, Grid } from "@mui/material";
import { width } from '@mui/system';
import { setDataContext } from '../../Context/setDataContext';


export default function EntSubmit () {

   

    return (
        <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            // justifyContent="center"
            sx={{ minHeight: '100vh', mt: '1px'}}
        >
      
        <Grid item >
         <Paper width="300px" >
             <Typography variant="h5" color="primary"  >New Patient Added!</Typography>
             <div></div>
         </Paper>
        </Grid>   
         
        </Grid> 
    )
}