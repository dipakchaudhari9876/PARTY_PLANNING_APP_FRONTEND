import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./proposal.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ProposalList from "../ProposalList/ProposalList";
import { proposalData } from "../../data";
import { getVendorProposal } from "../../Utilities/proposal";
import { Link } from "react-router-dom";

const Proposal = () => {
  const [proposal, setProposal] = useState([])
  useEffect(() => {

    const getProposal =async() => {
      try{
        const data =await getVendorProposal('641f2a93f8434008c555ac0d')
        if (data) {
          setProposal([...data]) 
        }
      }catch(err){
        console.log(err)
      }
    }
    getProposal()
  }, [])

  const handle = ()=>{
    console.log(proposal)
  }
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
            <Link to={'/pro'} onClick={handle} className="proposal-head-btn">CREATE</Link>
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
