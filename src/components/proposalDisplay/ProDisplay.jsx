import React, { useEffect, useState } from "react";
import "./prodisplay.css";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { getId } from "../Auth/authentication";
import axios from "axios";
const url = process.env.REACT_APP_API

const ProDisplay = ({ _id, name, place, budget, images, temp }) => {
  const imgSrc = images[0];
  const userId = getId()
  const navigate = useNavigate()

  const handleSelect = async()=>{
    const temp = { selectedProposal: "" }

    try {
      const updateData = await axios.put(`${url}/api/user/selectproposal/${userId}`, temp)
      if(updateData){
        window.location.reload()
      }

    } catch (err) {
      alert(err)
    }
  }
  

  return (
    <>
      {temp ? <div  className="ProDisplay">
      <Link to={`/event/${_id}`}>
        <img className="ProDisplay_img" src={imgSrc.url} alt="display" />

        <div className="ProDisplay_content">
          <div className="ProDisplay_content_name">{name}</div>
          <div className="ProDisplay_content_delete"></div>
          <div className="ProDisplay_content_price">{budget}/-</div>
          <div className="ProDisplay_content_place">{place}</div>
        </div>
        </Link>
        {temp && <DeleteIcon onClick={handleSelect} className="ProDisplay_content_delete"></DeleteIcon>}
      </div> :

        <Link to={`/event/${_id}`} className="ProDisplay">
          <img className="ProDisplay_img" src={imgSrc.url} alt="display" />

          <div className="ProDisplay_content">
            <div className="ProDisplay_content_name">{name}</div>
            <div className="ProDisplay_content_delete"></div>
            <div className="ProDisplay_content_price">{budget}/-</div>
            <div className="ProDisplay_content_place">{place}</div>
          </div>
        </Link>

      }

    </>
  );
};

export default ProDisplay;
