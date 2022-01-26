import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';


  


export default function List () {

    const [list, setList] = useState([])
    

    useEffect(() => {
        axios.get("http://localhost:5001/api/patientsinfo/")
        .then(res => {
            console.log(res)
            setList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
       
    }, [])


const columns = [
    { field: 'id', hide: true },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
//     // {
//     //   field: 'fullName',
//     //   headerName: 'Full name',
//     //   description: 'This column has a value getter and is not sortable.',
//     //   sortable: false,
//     //   width: 160,
//     //   valueGetter: (params) =>
//     //     `${params.getValue(params.id, 'firstName') || ''} ${
//     //       params.getValue(params.id, 'lastName') || ''
//     //     }`,
//     // },
  ];
    


      
     

    return (


        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={list}
                columns={columns}
                getRowId = {(row) => row._id}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection/>

                
        </div>
        
    )
}

