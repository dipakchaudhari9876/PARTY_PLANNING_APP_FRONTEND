import React, { useEffect, useState } from "react";
import "./proposalList.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { removeProposal } from "../../Utilities/proposal";


const ProposalList = ({
  name,
  place,
  startDate,
  endDate,
  eventType,
  budget,
  events,
  _id
}) => {
  const handle =async()=>{
    try{
      const data = await removeProposal(_id)
      if(data){
        console.log(data)
      }
    }catch(err){
      console.log(err)
    }
    
    
  }
  const MAX_LENGTH = 200;
  return (
    <div className="ProposalList">
      <div className="proposalList-head">{name}</div>
      <p className="proposalList-desc">
        {events.substring(0, MAX_LENGTH) + " ..."}
      </p>
      <div className="proposalList-info">
        <ul className="proposalList-details">
          <li className="prosalList-detail">
            Event Type <span>{eventType}</span>
          </li>
          <li className="prosalList-detail">
            Venue <span>{place}</span>
          </li>
          <li className="prosalList-detail">
            From Date<span>{startDate}</span>
          </li>
          <li className="prosalList-detail">
            From Date<span>{endDate}</span>
          </li>
          <li className="prosalList-detail">
            Budget <span>{budget}</span>
          </li>
        </ul>
        <div className="proposalList-btn">
          <EditIcon
            titleAccess="Edit"
            className="proposalList-editbtn"
          ></EditIcon>
          <DeleteIcon
          onClick={handle}
            titleAccess="Delete"
            className="proposalList-deletebtn"
          ></DeleteIcon>
        </div>
      </div>
    </div>
  );
};

export default ProposalList;
