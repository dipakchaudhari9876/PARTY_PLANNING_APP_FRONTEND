import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./proposal.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ProposalList from "../ProposalList/ProposalList";
import { proposalData } from "../../data";
import { getVendorProposal } from "../../Utilities/proposal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getId } from "../Auth/authentication";

const Proposal = () => {

  const navigate = useNavigate()
  const [proposal, setProposal] = useState([])
  useEffect(() => {
    const id = getId()
    if(id === false){
        navigate('/')  
    }

    const getProposal =async(id) => {
      try{
        const data =await getVendorProposal(id)
        if (data) {
          setProposal([...data]);
          // console.log(data);
        }
      } catch (err) {
        console.log(err);
      }

    }

    getProposal(id)
  }, [])

  return (
    <>
      <Header />
      <div className="Proposal">
        <div className="proposal-head">
          <div className="proposal-head-left">
            <p className="proposal-header">Proposals</p>
            <div className="proposal-head-search">
              <input
                type="text"
                placeholder="Proposal Name"
                className="proposal-search-input"
              />
              <SearchIcon className="proposal-head-icon"></SearchIcon>
            </div>
          </div>
          <div className="proposal-head-right">
            <FilterAltIcon className="proposal-head-filter-icon"></FilterAltIcon>

            <Link to={'/pro'} className="proposal-head-btn">CREATE</Link>

          </div>
        </div>
        {/* <ProposalList/> */}
        <div>
          {proposal.map((data) => {
            return <ProposalList key={data._id} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Proposal;
