import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button, Container, Typography } from "@mui/material";
import Info from "./Pages/InfoEnt"
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./Components/Navbar";
import List from "./Pages/List";
import Add from "./Components/Add/Add";
import Home from './Pages/Home';
import EntSubmit from './Components/EntSubmit/EntSubmit';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import FormData from './Components/EditEntry/EditEntry';
import SearchPatients from './Components/SearchPage/Search[Term]';
import SignIn from './Components/Sign In/SignIn';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Register from './Pages/Register';
import Login from './Pages/Login';
import MessageBoard from './Pages/MessageBoard';



function App() {


  return (
    <div>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to= "/home" /> } />
          {/* <Route path="/SignIn" element={<SignIn/ >} /> */}
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          // DOES: this is a protected Route that redirects based on if the user is Authorized or not
          <Route element={<ProtectedRoutes />}>
          <Route path="/messageBoard" element={<MessageBoard/>} />
          <Route path="/patientAdd" element={<Info/>} />
          <Route path="/listAll" element={<List/>} />
          <Route path="/entSubmit" element={<EntSubmit/>} />
          <Route path="/patientsinfo/:id" element={<FormData/>} />
          <Route path="/listAll/search/:firstName" element={<SearchPatients/>} />
          </Route>
        </Routes>
        <ToastContainer />
      </Container>
    </div>
    

    
      // <Info/>
      
    
  );
}

export default App;
