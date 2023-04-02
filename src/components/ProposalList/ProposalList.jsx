import React, { useEffect, useState } from "react";
import "./proposalList.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import { removeProposal } from "../../Utilities/proposal";

const ProposalList = ({
  name,
  place,
  startDate,
  endDate,
  eventType,
  budget,
  events,
  _id,
}) => {
  const navigate = useNavigate()
  const [data, setData] = useState("");
  const handle = async (id) => {
    try {
      const data = await removeProposal(id);
      if (data) {
        setData(data);
        window.location.reload()
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {}, [data]);
  const MAX_LENGTH = 200;
  // const data = () => {
  //   console.log(events);
  // };
  return (
    <>
      {events.length && (
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
              onClick={()=>{
                navigate(`/pro/${_id}`)
              }}
                titleAccess="Edit"
                className="proposalList-editbtn"
              ></EditIcon>
              <DeleteIcon
                onClick={() => {
                  handle(_id);
                }}
                titleAccess="Delete"
                className="proposalList-deletebtn"
              ></DeleteIcon>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProposalList;
