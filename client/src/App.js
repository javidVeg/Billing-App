import React, { useState } from 'react';
import { Button, Container, Typography } from "@mui/material";
import Info from "./Info/InfoEnt"
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./Components/Navbar";
import List from "./Components/List/List";
import Add from "./Components/Add/Add";
import Home from "./Components/Home/Home";
import EntSubmit from './Components/EntSubmit/EntSubmit';
import { useSelector, useDispatch } from 'react-redux'
import DataList  from './features/dataList/DataList'


function App() {

  // const dispatch = useDispatch();
  // const userList = useSelector((state) => state.users.value);
  // const dataLists = useSelector((state) => state.list.value);

  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  // const [newUsername, setUsername] = useState("");


 
  return (
    <div>
      <Container>
        <NavBar />
        {/* {dataLists.map((list) => {
          return <h1>{list.firstName}</h1>
        })}
        <DataList /> */}
        <Routes>
          <Route path="/" exact element={() => <Navigate to= "/home" /> } />
          <Route path="/home" element={<Home/>} />
          <Route path="/patientAdd" element={<Info/>} />
          <Route path="/listAll" element={<List/>} />
          <Route path="/entSubmit" element={<EntSubmit/>} />
        </Routes>
      </Container>
    </div>
    

    
      // <Info/>
      
    
  );
}

export default App;
