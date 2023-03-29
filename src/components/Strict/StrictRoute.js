import React from 'react'
// import { isAuthenticated } from '../../helper/helper'
import { Navigate } from 'react-router-dom'
import { getToken } from '../Auth/authentication'

const StrictRoute = ({ Child }) => {

    return (
        getToken() ? <Child/> : <Navigate to="/" />
    )
}

export default StrictRoute;