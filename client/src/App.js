import React, { useState } from 'react';
import { Button, Container, Typography } from "@mui/material";
import Info from "./Info/InfoEnt"
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./Components/Navbar";
import List from "./Components/List/List";
import Add from "./Components/Add/Add";
import Home from "./Components/Home/Home";
import EntSubmit from './Components/EntSubmit/EntSubmit';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import FormData from './Components/EditEntry/EditEntry';
import SearchPatients from './Components/SearchPage/Search[Term]';


function App() {


  return (
    <div>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={() => <Navigate to= "/home" /> } />
          <Route path="/home" element={<Home/>} />
          <Route path="/patientAdd" element={<Info/>} />
          <Route path="/listAll" element={<List/>} />
          <Route path="/entSubmit" element={<EntSubmit/>} />
          <Route path="/patientsinfo/:id" element={<FormData/>} />
          <Route path="/listAll/search/:firstName" element={<SearchPatients/>} />
        </Routes>
      </Container>
    </div>
    

    
      // <Info/>
      
    
  );
}

export default App;
