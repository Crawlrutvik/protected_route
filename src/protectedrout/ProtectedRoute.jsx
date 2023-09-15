import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const root = useSelector((state) => state.app.token)
    const storeg = localStorage.getItem('email')
    if (!root || !storeg) {
        return <Navigate to={"/login"} />
    }
    return children ? children : <Outlet />
}

export default ProtectedRoute