import React from 'react'
import { Outlet } from 'react-router'
import SignIn from './Sign In/SignIn'

const useAuth = () => {
    const user = { loggedIn: false }
    return user && user.loggedIn
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
  return isAuth ? <Outlet/> : <SignIn/>
}

export default ProtectedRoutes;
