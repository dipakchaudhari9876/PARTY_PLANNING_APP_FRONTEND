import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./proposal.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ProposalList from "../ProposalList/ProposalList";
import { getVendorProposal } from "../../Utilities/proposal";
import { Link,useNavigate } from "react-router-dom";
import { getId, getUser } from "../Auth/authentication";

const Proposal = () => {

  const navigate = useNavigate()
  const [proData,setproData] = useState([])
  const [proposal, setProposal] = useState([])
  const [search,setSearch] = useState("")
  useEffect(() => {
    const id = getId()
    const data = getUser()
    if (data === "user") {
      navigate('/home')
    }

    const getProposal = async (id) => {
      try {
        const data = await getVendorProposal(id)
        if (data) {
          setproData([...data])
          setProposal([...data]);
          // console.log(data);
        }
      } catch (err) {
        console.log(err);
      }

    }

    getProposal(id)
  }, [])

  const handleFilter = () => {
    const filteredItems = proData.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearch("")
    setProposal(filteredItems)
  }

  return (
    <>
      <Header />
      <div className="Proposal">
        <div className="proposal-head">
          <div className="proposal-head-left">
            <p onClick={()=>{
              setProposal(proData)
            }} className="proposal-header">Proposals</p>
            <div className="proposal-head-search">
              <input
                type="text"
                placeholder="Proposal Name"
                className="proposal-search-input"
                onChange={(e)=>{setSearch(e.target.value)}}
                value={search}
              />
              <SearchIcon onClick={handleFilter} className="proposal-head-icon"></SearchIcon>
            </div>
          </div>
          <div className="proposal-head-right">
            {/* <FilterAltIcon className="proposal-head-filter-icon"></FilterAltIcon> */}

            <Link to={`/pro/${'create'}`} className="proposal-head-btn">CREATE</Link>

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
