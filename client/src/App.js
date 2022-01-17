import React from 'react';
import { Button, Container } from "@mui/material";
import Info from "./Info/InfoEnt"
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./Components/Navbar";
import List from "./Components/List/List";
import Add from "./Components/Add/Add";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" exact element={() => <Navigate to= "/" /> } />
          <Route path="/home" element={Home()} />
          <Route path="/patientAdd" element={Info()} />
          <Route path="/listAll" element={List()} />
        </Routes>
      </Container>
    </div>
    

    
      // <Info/>
      
    
  );
}

export default App;
