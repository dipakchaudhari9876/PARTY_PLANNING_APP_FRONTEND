import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './register.css'
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const url = process.env.REACT_APP_API

const Register = ({temp,type}) => {
    const [showPass, setShowPass] = useState(true)
    const [showCpass, setshowCPass] = useState(true)
    const [error, setError] = useState("")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [Cpassword, setCpassword] = useState("")

    const check = () => {
        if (!name.length || !email.length || !password.length || !Cpassword.length || !phone.length) {
            setError("Fill all the details")
        }
        else if (!(/^[a-z0-9\.]{1,}@gmail\.com$/g).test(email)) {
            setError("Email is Invalid")
        }
        else if (phone.length !== 10) {
            setError("Phone Number is invalid")
        } else if (password !== Cpassword) {
            setError("Passwords does not matches")
        } else {
            setError("")
        }

    }

    const Registerhandler = (e) => {

e.preventDefault();
if ((name.length || email.length || password.length || Cpassword.length || phone.length) > 0 && error.length === 0) {
    const data = { name, email, phone, password, Cpassword }
    if (type === 'vendor') {

        const vendorReg = async () => {

            try {
                const vedReg = await axios.post(`${url}/api/vendor/register`, data)
                alert(vedReg.data.message)
                temp('login')
                

            } catch (err) {
                setError(err.response.data.error)
            }

        }
        vendorReg()
    }
    else {
        const userReg = async () => {
            try {
                const userReg = await axios.post(`${url}/api/user/register`, data)
                alert(userReg.data.message)
                // navigate("/")
                temp('login')


            } catch (err) {
                setError(err.response.data.error)
            }

        }
        userReg()
    }
}


}

    const handlePass = () => {
        showPass === true ? setShowPass(false) : setShowPass(true)
    }
    const handleCPass = () => {
        showCpass === true ? setshowCPass(false) : setshowCPass(true)
    }

    const changePage = ()=>{
        temp('login')
    }


    
    return (
        <div className="Register">
            <div className="Register_head">Register in Your Account</div>
            <form className="Register_form" onSubmit={Registerhandler}>
                <input type="text" className='Login_form_input' placeholder='Name' onChange={(e) => { setName(e.target.value) }} onBlur={() => { check() }} value={name}/>
                <input type="email" className='Login_form_input' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} onBlur={() => { check() }} value={email}/>
                <input type="text" className='Login_form_input' placeholder='Contact' onChange={(e) => { setPhone(e.target.value) }} onBlur={() => { check() }} value={phone}/>
                
                <div className="Login_form_password">
                    <input placeholder='Password' type={showPass ? "password" : "text"} className='Login_form_input' onChange={(e) => { setPassword(e.target.value) }} onBlur={() => { check() }} value={password}/>
                    {showPass && <RemoveRedEyeIcon onClick={handlePass} fontSize='25px' className='Login_form_pass_icon'></RemoveRedEyeIcon>}
                    {!showPass && <VisibilityOffIcon onClick={handlePass} fontSize='25px' className='Login_form_pass_icon'></VisibilityOffIcon>}
                </div>
                <div className="Login_form_password">
                    <input placeholder='Confirm Password' style={{ "marginBottom": "10px" }} type={showCpass ?"password" : "text"} className='Login_form_input' onChange={(e) => { setCpassword(e.target.value) }} onMouseLeave={() => { check() }} value={Cpassword}/>
                    {showCpass && <RemoveRedEyeIcon onClick={handleCPass} fontSize='25px' className='Login_form_pass_icon'></RemoveRedEyeIcon>}
                    {!showCpass && <VisibilityOffIcon onClick={handleCPass} fontSize='25px' className='Login_form_pass_icon'></VisibilityOffIcon>}
                </div>

                {error && <div style={{ textAlign: "center", fontSize: "15px", color: "red" }}>{error}</div>}

                <div className="register_bottom">
                    <div className="register_bottom_left" onClick={changePage}>Sign In</div>
                    <button type="submit" className="register_bottom_right">Register</button>
                </div>

            </form>
        </div>
    )
}

export default Register