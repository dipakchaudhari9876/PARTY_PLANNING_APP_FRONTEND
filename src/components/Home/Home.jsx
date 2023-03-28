import React, { useEffect, useState } from "react";
import { proposalData } from "../../data";
import { getProposalData } from "../../Utilities/proposal";
import Header from "../Header/Header";
import ProDisplay from "../proposalDisplay/ProDisplay";
import HeadImg from "./../../Assets/Images/private-party-venues.png";
import "./home.css";

const Home = () => {
  const [proData, setproData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const proposalData = await getProposalData();
        console.log(proposalData);
        setproData([...proposalData]);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <div className="Home">
        <img className="Home-headImg" src={HeadImg} alt="head" />
      </div>
      <div className="Home_proposalDisplay">
        <div className="Home_proposalDisplay_header">Proposals</div>
        <div className="Home_proposalDisplay_content">
          {proData.map((data) => {
            return <ProDisplay key={data._id} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
