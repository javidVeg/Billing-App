import React from 'react'
import { Outlet } from 'react-router'
import SignIn from './Sign In/SignIn'
import { useSelector } from 'react-redux'

//? useAuth brings in user state with useSelector and 
//? verifys someone is logged in in order to give 
//? them access to protected routes. 


const useAuth = () => {
    const { user } =useSelector((state) => state.auth)
    const users = user ? { loggedIn: true } : { loggedIn: false}
    
    return users && users.loggedIn
    
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    console.log(useAuth())
  return isAuth ? <Outlet/> : <SignIn/>
}

export default ProtectedRoutes;
