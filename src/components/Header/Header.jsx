import React from "react";
import "./Header.css";
import profile from "./../../Assets/Images/profile2.png";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-Logo">LOGO</h1>

      <div className="header-logout">
        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="header-logout-pop" for="side-menu">
          <p className="header-username">Avijit Pateriya</p>
          <img className="header-profile" src={profile} alt="profile pic" />
        </label>
        <div className="header-profile-display">
          <img className="header-profile-img" src={profile} alt="Profile-img" />
          <p className="header-profile-name">Avijit Pateriya</p>
          <p className="header-profile-id">
            <span>User Id : </span>12345343256846
          </p>
          <button className="header-profile-logout">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
