
import React, { useEffect, useState } from 'react'
import { proposalData } from '../../data'
import { getProposalData, singleProposal } from '../../Utilities/proposal'
import { getId } from '../Auth/authentication'
import Header from '../Header/Header'
import ProDisplay from '../proposalDisplay/ProDisplay'
import HeadImg from './../../Assets/Images/private-party-venues.png'
import './home.css'
import { getUserData } from '../../Utilities/user'

const Home = () => {
  const [proData, setproData] = useState([])
  const [seldata, setselData] = useState({})
  useEffect(() => {
    const id = getId()
    const getData = async () => {
      try {
        const proposalData = await getProposalData()
        setproData([...proposalData])
        const userData = await getUserData(id)
        if (userData) {
          const siglepro = await singleProposal(userData.selectedProposal)
          setselData({ ...siglepro })
          console.log(seldata)
        }

      } catch (err) {
        console.log(err)
      }
    }
    getData()

  }, [])
  return (
    <>
      <Header />
      <div className="Home">
        <img className="Home-headImg" src={HeadImg} alt="head" />
      </div>
      <div className="Home_proposalDisplay">

        {/* {seldata && <>
          <div className='Home_proposalDisplay_header'>Selected</div>
          <div className="Home_proposalDisplay_selected">

            <ProDisplay data = {seldata} />
          </div>
        </>} */}
        <div className='Home_proposalDisplay_header'>Proposals</div>


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
