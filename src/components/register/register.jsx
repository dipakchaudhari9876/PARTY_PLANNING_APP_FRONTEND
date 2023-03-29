import { useState } from "react"
import "./register.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const url = process.env.REACT_APP_API


const Register = () => {
    const navigate = useNavigate()
    const [vendor, setVendor] = useState(false);
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

    //REgister handler
    const Registerhandler = (e) => {

        e.preventDefault();
        if ((name.length || email.length || password.length || Cpassword.length || phone.length) > 0 && error.length === 0) {
            const data = { name, email, phone, password, Cpassword }
            if (vendor) {

                const vendorReg = async () => {

                    try {
                        const vedReg = await axios.post(`${url}/api/vendor/register`, data)
                        alert(vedReg.data.message)
                        navigate("/")
                        

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
                        navigate("/")

                    } catch (err) {
                        setError(err.response.data.error)
                    }

                }
                userReg()
            }
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
    return (
        <>
            <article className="registractionpage">
                <div className="logo">LOGO</div>
                <section className="mainpage">
                    <section className="summary">
                        <p>TEXT WILL  <br />BE DISPLAYED <br />HERE</p>
                    </section>


                    <section className="registrationform">
                        <form className="registrationformsection">
                            <section>
                                <button className={vendor ? "buttoncolor" : "btn"} onClick={dataBaseToggleHandler}>Vendor</button>
                                <button className={vendor ? "btn" : "buttoncolor"} onClick={dataBaseToggleHandler}>User</button>
                            </section>
                            <div className="form-Header">Register</div>
                            {/* Name----->html-ok, css--> */}
                            <input type="text" className="input" placeholder="Name" onChange={(e) => { setName(e.target.value) }} onBlur={() => { check() }} value={name} />
                            {/* Email */}
                            <input type="email" className="input" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} onBlur={() => { check() }} value={email} />
                            {/* phoneNo */}

                            <input type="text" className="input" placeholder="Contact" onChange={(e) => { setPhone(e.target.value) }} onBlur={() => { check() }} value={phone} />

                            {/* Password */}

                            <input type="password" className="input" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} onBlur={() => { check() }} value={password} />
                            {/* Confirm password */}

                            <input type="password" className="input" placeholder="Confirm Password" onChange={(e) => { setCpassword(e.target.value) }} onMouseLeave={() => { check() }} value={Cpassword} />



                            {error && <div style={{ textAlign: "center", fontSize: "15px", color: "red" }}>{error}</div>}
                            <section className="buttonsection">
                                <button className="register-signinbutton" onClick={() => { navigate("/") }}>Signin</button>
                                <section >
                                    <button className="register-registerbutton" onClick={Registerhandler}>Register</button>
                                </section>
                            </section>
                        </form>
                    </section>
                </section>
            </article>
        </>
    )

}

export default Register