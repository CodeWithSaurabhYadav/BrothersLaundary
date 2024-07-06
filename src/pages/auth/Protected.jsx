import { Dashboard } from '@mui/icons-material'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protected = () => {

  const token = localStorage.getItem('token')

  return (
    <>
      {token ? (<Outlet />) : <Navigate to="/auth/login" />}
    </>
  )
}

const Authenticated = () => {
  const token = localStorage.getItem('token')

  return (
    <>
      {token ? <Navigate to="/dashboard" /> : <Outlet />}
    </>
  )
}

export {
  Protected,
  Authenticated
} 
  