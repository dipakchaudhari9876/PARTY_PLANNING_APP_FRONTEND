import React from "react";
import Header from "../Header/Header";
import "./proposal.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ProposalList from "../ProposalList/ProposalList";
import { proposalData } from "../../data";

const Proposal = () => {
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
            <button className="proposal-head-btn">CREATE</button>
          </div>
        </div>
        {/* <ProposalList/> */}
        <div>
          {proposalData.map((data) => {
            return <ProposalList key={data.id} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Proposal;
