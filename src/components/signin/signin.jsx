import { useEffect, useState } from "react"
import Axios from 'axios'
// import { useEffect } from "react";
import "./signin.css"
import { useNavigate } from "react-router-dom";
import { getUser } from "../Auth/authentication";
const url = process.env.REACT_APP_API

const Signin = () => {
    const [error,setError] = useState("")
    const navigate = useNavigate();
    const [form, setform] = useState({ data: "", password: "" })
    const [vendor, setVendor] = useState(false);
    const loginHandler = (e) => {

        e.preventDefault();
        if(!form.data || !form.password){
            setError('Fill all the details')
            return 
        }
        
        if (vendor) {
            
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
                    console.log(err)
                    setError(err.response.data.error)
                }
            }
            userlogin(form)
        }
    }

    const dataBaseToggleHandler = (e) => {
        e.preventDefault();
        if (vendor === true) {
            setVendor(false)
            setError("")
            setform({ data: "", password: "" })
        }
        else {
            setVendor(true);
            setError("")
            setform({ data: "", password: "" })
        }
    }

    useEffect(() => {
        let user = getUser()
        if (user) {
            if (user === "user") {
                navigate('/home')
            } else {
                navigate('/proposal')
            }
        }
    }, [])
    return (
        <>
            <article className="signinpagecontainer">
                <h2 className="logo">LOGO</h2>
                <section className="mainbody">
                    <section className="summary">
                        <p>TEXT WILL<br />BE DISPLAYED<br />HERE</p>
                    </section>
                    <section className="subbody">
                        <section className="options">
                            <button className={vendor ? "buttoncolor" : "btn"} onClick={dataBaseToggleHandler}>Vendor</button>
                            <button className={vendor ? "btn" : "buttoncolor"} onClick={dataBaseToggleHandler}>User</button>
                        </section>
                        <form className="formcontainer">

                        <div className="form-Header">Sign In</div>
                            <div className="inputs">


                                <input className="signin-input" placeholder="Email/Phone" onChange={(e) => setform({ ...form, data: e.target.value })} value={form.data} />


                                <input className="signin-input" placeholder="Password" type="password" onChange={(e) => setform({ ...form, password: e.target.value })} value={form.password} />
                            </div>

                            <div className="forgotpassword">Forgot Password?</div>
                            {error && <div style={{ textAlign: "center", fontSize: "15px", color: "red" }}>{error}</div>}
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

