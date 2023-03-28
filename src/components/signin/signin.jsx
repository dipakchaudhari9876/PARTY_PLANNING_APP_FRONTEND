import { useEffect, useState } from "react"
import Axios from 'axios'
// import { useEffect } from "react";
import "./signin.css"
import { useNavigate } from "react-router-dom";
import { getUser } from "../Auth/authentication";
// import { vendorlogin } from "../../Utilities/vendor";
// import { userlogin } from "../../Utilities/user";
const url = process.env.REACT_APP_API

const Signin = () => {
    const navigate = useNavigate();
    const [form, setform] = useState({ data: "", password: "" })
    const [vendor, setVendor] = useState(false);
    const loginHandler = (e) => {

        e.preventDefault();
        // console.log(vendor)
        // console.log(form)
        if (vendor) {
            // vendorlogin(form)
            const vendorlogin =async(data)=>{
                try{
                    const loginData = await Axios.post(`${url}/api/vendor/login`,data)
                    if (loginData) {
                        console.log(loginData.data)
                        localStorage.setItem("jwtoken", JSON.stringify(loginData.data.token))
                        localStorage.setItem("data", 'vendor')
                        localStorage.setItem("userId", JSON.stringify(loginData.data._id))
                        navigate('/proposal')
                    }
                }catch(err){
                    console.log(err)
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
                        console.log(loginData.data)
                        localStorage.setItem("jwtoken", JSON.stringify(loginData.data.token))
                        localStorage.setItem("data", 'user')
                        localStorage.setItem("userId", JSON.stringify(loginData.data._id))
                        navigate('/home')
                    }

                } catch (err) {
                    console.log(err.response)
                }
            }
            userlogin(form)
        }
    }

    const dataBaseToggleHandler = (e) => {
        e.preventDefault();
        if (vendor === true) {
            setVendor(false)
        }
        else {
            setVendor(true);
        }
    }

    useEffect(()=>{
        let user = getUser()
        if(user){
            if(user === "user"){
                navigate('/home')
            }else{
                navigate('/proposal')
            }
        }    
    },[])
    return (
        <>
            <article className="signinpagecontainer">
                <h2 className="logo">LOGO</h2>
                <section className="mainbody">
                    <section className="summary">
                        <p>TEXT WILL<br />BE DISPLAYED<br />HERE</p>
                    </section>
                    <section className="subbody">
                        <form className="formcontainer">
                            <section className="options">
                                <button className={vendor ? "buttoncolor" : null} onClick={dataBaseToggleHandler}>vendor</button>
                                <button className={vendor ? null : "buttoncolor"} onClick={dataBaseToggleHandler}>User</button>
                            </section>
                            <h3 className="headding">Sign in your Account</h3>
                            <div className="inputs">


                                <input className="phoneNo" placeholder="email/phone" onChange={(e) =>  setform({ ...form, data: e.target.value }) } value={form.data} />


                                <input className="password" placeholder="password" type="password" onChange={(e) =>setform({ ...form, password: e.target.value }) } value={form.password} />
                            </div>

                            <p className="forgotpassword">Forgot Password</p>
                            <section className="buttoncontainer">

                                <button className="createaccountbutton" onClick={() => { navigate("/register") }}>Create Account</button>
                                <button onClick={loginHandler} className="signinbutton">Sign in</button>
                            </section>
                        </form>
                    </section>
                </section>
            </article>
        </>
    )
}
export default Signin

