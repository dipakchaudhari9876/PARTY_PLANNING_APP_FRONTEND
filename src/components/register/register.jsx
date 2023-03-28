import { useState } from "react"
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { vendorRegister } from "../../Utilities/vendor";
import { userRegister } from "../../Utilities/user";


const Register = () => {

    const [form, setform] = useState({ Name: "", email: "", phoneNo: "", password: "", confirmPassword: "" })
    // console.log(form)
    const [vendor, setVendor] = useState(false);
    const [error, seterror] = useState({
        Name: { isValid: true, message: "" }, email: { isValid: true, message: "" }, phoneNo: { isValid: true, message: "" },
        password: { isValid: true, message: "" }
    })
    // const [confirmPassword,setconfirmPassword]=useState({isValid:false,message:""});
    const navigate = useNavigate();
    //Validation Part
    const errorhandler = (type) => {
        switch (type) {
            case "Name": {
                if (form.Name.length >= 0 && form.Name.length <= 10) {

                    seterror({ ...error, Name: { isValid: true, message: "" } });
                }
                else {
                    setform({ ...form, userName: "" });
                    seterror({ ...error, Name: { isValid: false, message: "The number of charecters should be between 0 and 10 " } })
                }
                break;
            }
            case "email": {
                let regexEmail = /^\w+([.-]?\w+)*@gmail\.com$/g;
                if (regexEmail.test(form.email)) {
                    seterror({ ...error, email: { isValid: true, message: "" } });
                }
                else {
                    setform({ ...form, email: "" });
                    seterror({ ...error, email: { isValid: false, message: "please give a valid Email before @ only . and - are allowed" } })
                }
                break;
            }
            case "phoneNo": {
                let regexPhoneNo = /^[6,7,8,9]/g;
                if (regexPhoneNo.test(form.phoneNo) && form.phoneNo.toString().length === 10) {
                    seterror({ ...error, phone: { isValid: true, message: "" } });
                }
                else {
                    setform({ ...form, phone: "" });
                    seterror({ ...error, phone: { isValid: false, message: "please give a valid 10 digit mobile number" } })
                }
                break
            }
            case "password": {
                if (form.password.length >= 5 && form.password.length <= 12) {
                    seterror({ ...error, password: { isValid: true, message: "" } });
                }
                else {
                    setform({ ...form, password: "" });
                    seterror({ ...error, password: { isValid: false, message: "The number of charecters should be between 5 and 12 " } })
                }
                return;
            }

            default: {
                setform({ ...form });
                break;
            }
        }
    }

    //REgister handler
    const Registerhandler =  (e) => {
        e.preventDefault();
        if (form.Name.length > 0 && form.phoneNo > 0 && form.email.length > 0 && form.password.length > 0 && form.confirmPassword.length > 0) {
            const data = {
                name: form.Name,
                phone: form.phoneNo,
                email: form.email,
                password: form.password,
                Cpassword: form.confirmPassword
            }
            setform({Name :"", email: "", phoneNo:"",password:"",confirmPassword:""})
            // console.log(vendor)
            // console.log(data)
            if (vendor) {
              
                // console.log(vendor)
                // console.log(data)
                
                vendorRegister(data)
            }
            else {
                // console.log(data)
                userRegister(data)
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
                                <button className={vendor ? "buttoncolor" : null} onClick={dataBaseToggleHandler}>vendor</button>
                                <button className={vendor ? null : "buttoncolor"} onClick={dataBaseToggleHandler}>User</button>
                            </section>
                            <h3 >Register in your Account</h3>
                            {/* Name----->html-ok, css--> */}
                            <input className="Name" type="text" placeholder="Name" onChange={(e) => { setform({ ...form, Name: e.target.value }) }} onBlur={() => { errorhandler("Name") }} value={form.Name} />
                            {error.Name.isValid ? null : <p style={{ color: "red", marginLeft: "20px" }}>{error.Name.message}</p>}
                            {/* Email */}
                            <input className="email" type="email" placeholder="Email" onChange={(e) => { setform({ ...form, email: e.target.value }) }} onBlur={() => { errorhandler("email") }} value={form.email} />
                            {error.email.isValid ? null : <div style={{ color: "red", marginLeft: "20px" }}>{error.email.message}</div>}
                            {/* phoneNo */}
                            <input className="phoneNo" type="text" placeholder="Contact" onChange={(e) => { setform({ ...form, phoneNo: e.target.value }) }} onBlur={() => { errorhandler("phoneNo") }} value={form.phoneNo} />
                            {error.phoneNo.isValid ? null : <div style={{ color: "red", marginLeft: "20px" }}>{error.phoneNo.message}</div>}

                            {/* Password */}
                            <input className="password" type="password" placeholder="Password" onChange={(e) => { setform({ ...form, password: e.target.value }) }} onBlur={() => { errorhandler("password") }} value={form.password} />
                            {error.password.isValid ? null : <div style={{ color: "red", marginLeft: "20px" }}>{error.password.message}</div>}
                            {/* Confirm password */}
                            <input className="confirmpassword" type="password" placeholder="ConfirmPassword" onChange={(e) => { setform({ ...form, confirmPassword: e.target.value }) }} value={form.confirmPassword} />
                            {/* {confirmPassword.isValid?null:<div style={{color:"red",marginLeft:"20px"}}>{confirmPassword.message}</div>} */}
                            {/* footer button section */}
                            <section className="buttonsection">
                                <button className="signinbutton" onClick={() => { navigate("/") }}>Signin</button>
                                <section >
                                    <button className="registerbutton" onClick={Registerhandler}>Register</button>
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