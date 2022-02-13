//TUTORIAL LIST//
import { Tab, Table } from '@mui/material';
import * as React from 'react';
import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import TableService from '../../Service/TableService';
import { useTable } from "react-table";
import { useNavigate, useParams } from 'react-router-dom'
import * as Realm from "realm-web"


// import { DataGrid, selectedGridRowsCountSelector } from '@mui/x-data-grid';
// import axios from 'axios';
// import { Typography } from '@mui/material';
// import { useSelector } from 'react-redux';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MaterialTable from 'material-table'

    const SearchPatients = (props) => {
        const [formData, setFormData] = useState([]);
        const [searchFirstName, setSearchFirstName] = useState("");
        const [searchTerms, setSearchTerms] = useState("");
        const [patients, setPatients] = useState([])
        
        const listRef = useRef();
        const navigate = useNavigate();
        const params = useParams();
       

        listRef.current = formData;

        // useEffect(() => {
        //     retrieveList();
        // }, []);

        useEffect(async () => {
          const REALM_APP_ID = "application-0-xqcja";
          const app = new Realm.App({id: REALM_APP_ID});
          const credentials = Realm.Credentials.anonymous();
          try {
            const user = await app.logIn(credentials);
            const searchPatients = await user.functions.searchPatient(params.firstName);
            setPatients(() => searchPatients);
            console.log(searchPatients)
            
            
          } catch (error) {
            console.log(error)
            
          }
          


        }, [params])
        console.log(patients)
        
//----------SEARCH TERM CREATED BELOW-----------//
        // const handleSubmit = e => {
        //   e.preventDefault();
        //   navigate(`search/:${searchTerms}`)
          

        //   setSearchTerms(" ")

        // }

        // const onChangeSearchFirstName = (e) => {
        //     const searchFirstName = e.target.value;
        //     setSearchFirstName(searchFirstName);
        //     console.log(searchFirstName)
        // };
        

        // const retrieveList = () => {
        //     TableService.getAll()
        //     .then((response) => {
        //         setFormData(response.data);
        //     })
        //     .catch((e) => {
        //         console.log(e)
        //     });
        // };

        // const refreshList = () => {
        //     retrieveList();
        // };

        // const removeAllFormData = () => {
        //     TableService.removeAll()
        //     .then((response) => {
        //         console.log(response.data);
        //         refreshList();
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
        // };

        // const findByFirstName = () => {
        //     TableService.findByFirstName(searchFirstName)
        //     .then((response) => {
        //         setFormData(response.data)
        //         console.log(response.data);
        //         console.log(searchFirstName)
        //     })
        //     .catch((e) => {
        //         console.log(e)
        //     });
        // };
 //----------PROGRAMMATIC NAVIGATION---------//  
        // const openFormData = (rowIndex) => {
        //     const id = listRef.current[rowIndex]._id;
        //     console.log(id)

        //    navigate("/patientsinfo/" + id)
        // };

        // const deleteFormData = (rowIndex) => {
        //     const id = listRef.current[rowIndex]._id;
        //     console.log(id)

        //     TableService.remove(id)
        //     .then(response => {
//----------WORKING MOUNTED ISSUE----------//
                
//                 // navigate("/patientsinfo");
//                 console.log(response.data)
                
// //--------THIS ENABLES THE LIST TO REGENERATE WITHOUT THE DELETED ITEM----------//
//                 let newFormData = [...listRef.current];
//                 newFormData.splice(rowIndex, 1);
                
//                 setFormData(newFormData);
//             })
//             .catch((e) => {
//                 console.log(e);
//             });
//         }
// //TABLE ATTRIBUTES//

      const columns = useMemo(
            () => [
            
            {
                Header: "First Name",
                accessor: "firstName",
            },
            {
                Header: "Last Name",
                accessor: "lastName",
            },
            {
                Header: "Phone Number",
                accessor: "phoneNumber",
            },
            {
                Header: "Status",
                accessor: "published",
                Cell: (props) => {
                return props.value ? "Published" : "Pending";
                },
            },
            // {
            //     Header: "Actions",
            //     accessor: "actions",
            //     Cell: (props) => {
            //     const rowIdx = props.row.id;
            //     return (
            //         <div>
            //         <button onClick={() => openFormData(rowIdx)}>
            //             <i className="far fa-edit action mr-2"></i>
            //         </button>

            //         <button onClick={() => deleteFormData(rowIdx)}>
            //             <i className="fas fa-trash action"></i>
            //         </button>
            //         </div>
            //     );
            //     },
            // },
            ],
            []
        );

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
          } = useTable({
            columns,
            data: patients,
          });
    
    


// export default function List () {
// // TABLE DATA //
//     const [list, setList] = useState([])  
// // FETCHES GET REQ FOR setList //
//     useEffect(() => {
//         axios.get("http://localhost:5001/api/patientsinfo/")
//         .then(res => {
//             console.log(res)
//             setList(res.data)
            
//         })
//         .catch(error => {
//             setErrorMessage(['Cannot load user data'])
//             setIsError(true)
//             console.log(error)
//         })
       
//     }, [])

// UPDATE LIST DATA
    // const handleRowUpdate = async (e) => {
    //     e.preventDefault();
    //     console.log(list)
    //     try {
    //         await axios.put("http://localhost:5001/api/patientsinfo/" + id, list)
    //         .then(res=>{
    //             console.log(res.data)
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
// ERROR HANDELING //
//     const [isError, setIsError] = useState()
//     const [errorMessage, setErrorMessage] = useState([])

// const columns = [
//     { field: 'id', hide: true},
//     { field: 'firstName', headerName: 'First name', width: 130, editable:true},
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
    
    
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'lastName') || ''
    //     }`,
    // },
//   ];

    // const handleRowUpdate = () => {
    //     axios.patch('http://localhost:5001/api/patientsinfo/' + newData._id, newData)
    //         .then(res => {
    //             const dataUpdate = [...list];
    //             const index = oldData.data._id;
    //             dataUpdate[index] = newData
    //             setList([...dataUpdate]);
    //             resolve()
    //             setIsError(false)
    //             setErrorMessage([])
    //         })
    //         .catch(error => {
    //             setErrorMessage(['Update Failed! Server Error'])
    //             setIsError(true)
    //             resolve()
    //         })

    // } 

    

      
     

    return (
        // <div>
        //     {patients && patients.map(patient =>{
        //     return <p key= {patient._id}>{patient.lastName}{patient.firstName}</p>
        //     })}
        // </div>

    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by First Name"
            value={searchTerms}
            onChange={(e) => setSearchTerms(e.target.value)}
          />
          </form> */}
          {/* <input
            type="text"
            className="form-control"
            placeholder="Search by First Name"
            value={searchFirstName}
            onChange={onChangeSearchFirstName}
          />
          <div className="input-group-append">
            <button
             className="btn btn-outline-secondary"
             type="button"
             onClick={}>
              Search
            </button>
          </div> */}
        </div>
      </div>
      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div className="col-md-8">
        <button className="btn btn-sm btn-danger" onClick={removeAllFormData}>
          Remove All
        </button>
      </div> */}
    </div>


        // <div style={{ height: 400, width: '100%' }}>
          
        //     <DataGrid
        //         rows={list}
        //         columns={columns}
        //         getRowId = {(row) => row._id}
        //         pageSize={5}
        //         rowsPerPageOptions={[5]}
        //         checkboxSelection
        //         // onCellEditCommit={handleRowUpdate}
                
                
        //         />


                

                
        // </div>
        
    )

};

export default SearchPatients;

