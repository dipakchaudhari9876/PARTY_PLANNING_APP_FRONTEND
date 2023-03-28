import React from 'react'
import { Navigate,useNavigate } from 'react-router-dom'
import { getToken } from '../Auth/authentication'


const StrictRoute = ({Child}) => {
  return (
    <>
    {getToken()?<Child/> : <Navigate to="/"/>}
    </>
  )
}

export default StrictRoute