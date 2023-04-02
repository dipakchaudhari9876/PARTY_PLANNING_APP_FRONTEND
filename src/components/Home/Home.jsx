
import React, { useEffect, useState } from 'react'
import { getProposalData, singleProposal } from '../../Utilities/proposal'
import { getId, getUser } from '../Auth/authentication'
import Header from '../Header/Header'
import ProDisplay from '../proposalDisplay/ProDisplay'
import HeadImg from './../../Assets/Images/private-party-venues.png'
import './home.css'
import { getUserData } from '../../Utilities/user'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [proData, setproData] = useState([])
  const [seldata, setselData] = useState([])
  useEffect(() => {

    const temp = getUser()
    if (temp !== "user") {
      navigate('/proposal')
    }
    const id = getId()
    const getData = async () => {
      try {
        const proposalData = await getProposalData()
        setproData([...proposalData])
        const userData = await getUserData(id)

        if (userData.selectedProposal.length !== 0) {
          const siglepro = await singleProposal(userData.selectedProposal)
          setselData([{ ...siglepro }])
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
        {/* <button onClick={display}>Display</button> */}
      </div>
      <div className="Home_proposalDisplay">
        {seldata.length !== 0 && <>
          <div className='Home_proposalDisplay_header'>Selected</div>
          <div className="Home_proposalDisplay_content">
            {seldata.map((data) => {
              return <ProDisplay key={data._id} {...data} temp={true} />;
            })}
          </div>
        </>}
        <div className='Home_proposalDisplay_header'>Proposals</div>
          <div className="Home_proposalDisplay_content">
            {proData.map((data) => {
              return <ProDisplay key={data._id} {...data} temp={false} />;
            })}
          </div>
      </div>
    </>
  );
};

export default Home;
