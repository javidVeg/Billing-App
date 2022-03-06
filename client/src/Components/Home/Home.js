import React from 'react';
import { Typography } from "@mui/material";
import SignIn from '../Sign In/SignIn';
import SignUp from '../Register/Register.js';


export default function Home () {

    return (
        <div>
        <SignUp/>
        <SignIn />
        </div>
    )
}