import React from 'react';
import { Typography } from "@mui/material";
import SignIn from '../Components/Sign In/SignIn.js';
import SignUp from '../Components/Register/Register'


export default function Home () {

    return (
        <div>
        <SignUp/>
        <SignIn />
        </div>
    )
}