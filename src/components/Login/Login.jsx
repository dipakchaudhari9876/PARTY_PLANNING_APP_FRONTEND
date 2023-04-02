import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { getUser } from "../Auth/authentication";
import './login.css'
import Axios from 'axios'
const url = process.env.REACT_APP_API


const Login = ({ temp, type }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [form, setform] = useState({ data: "", password: "" })
    const [show, setShow] = useState(true)
    const handlePass = () => {
        show === true ? setShow(false) : setShow(true)
    }
    const changePage = () => {
        temp('register')
    }
    const loginHandler = (e) => {

        e.preventDefault();
        if (!form.data || !form.password) {
            setError('Fill all the details')
            return
        }

        if (type === 'vendor') {

            const vendorlogin = async (data) => {
                try {
                    const loginData = await Axios.post(`${url}/api/vendor/login`, data)
                    if (loginData) {
                        localStorage.setItem("jwtoken", JSON.stringify(loginData.data.token))
                        localStorage.setItem("data", 'vendor')
                        localStorage.setItem("userId", JSON.stringify(loginData.data._id))
                        navigate('/proposal')
                    }
                } catch (err) {
                    setError(err.response.data.error)
                }
            }
            vendorlogin(form)
        }
        else {
            // userlogin(form)
            const userlogin = async (data) => {
                try {
                    const loginData = await Axios.post(`${url}/api/user/login`, data)
                    if (loginData) {
                        localStorage.setItem("jwtoken", JSON.stringify(loginData.data.token))
                        localStorage.setItem("data", 'user')
                        localStorage.setItem("userId", JSON.stringify(loginData.data._id))
                        navigate('/home')
                    }

                } catch (err) {
                    setError(err.response.data.error)
                }
            }
            userlogin(form)
        }
    }

    useEffect(() => {
        setError("")
        setform({ data: "", password: "" })
    }, [temp])
    return (
        <div className="Login">
            <div className="Login_head">Sign in your Account</div>
            <form className="Login_form" onSubmit={loginHandler}>
                <input type="text" placeholder='Email/Phone' className='Login_form_input' onChange={(e) => setform({ ...form, data: e.target.value })} value={form.data} />

                <div className="Login_form_password">
                    <input placeholder='Password' style={{ "marginBottom": "10px" }} type={show ? "password" : "text"} className='Login_form_input' onChange={(e) => setform({ ...form, password: e.target.value })} value={form.password} />
                    {show && <RemoveRedEyeIcon onClick={handlePass} fontSize='25px' className='Login_form_pass_icon'></RemoveRedEyeIcon>}
                    {!show && <VisibilityOffIcon onClick={handlePass} fontSize='25px' className='Login_form_pass_icon'></VisibilityOffIcon>}
                </div>
                <div className='Login_forgot'>Forget Password?</div>
                {error && <div style={{ textAlign: 'center', fontSize: "12px", color: "red" }}>{error}</div>}
                <div className='Login_btnSec'>
                    <div className='Login_link' onClick={changePage}>Create Account</div>
                    <button type="submit" className='Login_btn'>SIGN IN</button>
                </div>
            </form>
        </div>
    )
}

export default Login