import React, { useEffect, useState } from "react";
import "./Header.css";
import profile from "./../../Assets/Images/profile2.png";
import { getId, getUser, Logout } from "../Auth/authentication";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../Utilities/user";
import { getVendorData } from "../../Utilities/vendor";

const Header = () => {

  const [data,setData] = useState({})
  const navigate = useNavigate()
  const logout =()=>{
    Logout()
    navigate('/')
    // console.log(data)
  }
  useEffect(()=>{
    const id = getId()
    const user = getUser()
    const getDatas =async(id,user)=>{
      if(user === "user"){
        const temp = await getUserData(id)
        if(temp){
          setData({...temp})
        }
      }else{
        const temp = await getVendorData(id)
        if(temp){
          setData({...temp})
        }
      }

    }
    getDatas(id,user)
  },[])
  return (
    <div className="header">
      <h1 className="header-Logo">LOGO</h1>

      <div className="header-logout">
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="header-logout-pop" htmlFor="side-menu">

          <p className="header-username">{data.name}</p>
          <img className="header-profile" src={profile} alt="profile pic" />
        </label>
        <div className="header-profile-display">
          <img className="header-profile-img" src={profile} alt="Profile-img" />

          <p className="header-profile-name">{data.name}</p>
          <button onClick={logout} className="header-profile-logout">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
