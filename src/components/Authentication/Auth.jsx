import React, { useEffect, useState } from 'react'
import './auth.css'
import Login from '../Login/Login'
import Register from '../register/register'
import { useNavigate } from "react-router-dom";
import { getUser } from "../Auth/authentication";

const Auth = () => {
    const navigate = useNavigate()
    const [method,setMethod] = useState('user')
    const [page,setPage] = useState('login')

    const handlemethod = (temp)=>{
        if(temp === 'user'){
            setMethod('user')
        }else{
            setMethod('vendor')
        }
    }

    const change = (val)=>{
        if(val === 'login'){
            setPage('login')
        }else if(val === 'register'){
            setPage('register')
        }
    }

    useEffect(() => {
        let user = getUser()
        if (user) {
            if (user === "user") {
                navigate('/home')
            } else if(user === 'vendor') {
                navigate('/proposal')
            }
        }
    }, [])
    

  return (
    <div className="Auth">
        <h1 className="Auth_logo">LOGO</h1>
        <div className="Auth_main">
            <div className="main_left">TEXT WILL <br />BE DISPLAYED <br />HERE</div>
            <div className="main_right">
                <div className="main-right-content">
                    <div className="main-right-content_top">
                        <div style={{cursor:"pointer"}} className={method === 'vendor'?"content_method":"content"} onClick={()=>{handlemethod('vendor')}}>Vendor</div>
                        <div style={{cursor:"pointer"}} className={method === 'user'?"content_method":"content"} onClick={()=>{handlemethod('user')}}>User</div>
                    </div>
                    {page === 'login' && <Login temp={change} type = {method}/>}
                    {page === 'register' && <Register temp={change} type={method}/>}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth