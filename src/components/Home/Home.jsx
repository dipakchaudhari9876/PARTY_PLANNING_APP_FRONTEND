import React, { useEffect } from 'react'
import { proposalData } from '../../data'
import { getProposalData } from '../../Utilities/home'
import Header from '../Header/Header'
import ProDisplay from '../proposalDisplay/ProDisplay'
import HeadImg from './../../Assets/Images/private-party-venues.png'
import './home.css'

const Home = () => {
  useEffect(()=>{
    getProposalData()

  },[])
  return (
    <>
    <Header/>
    <div className='Home'>
        <img className='Home-headImg' src={HeadImg} alt="head"/>
    </div>
    <div className="Home_proposalDisplay">
      <div className='Home_proposalDisplay_header'>Proposals</div>
      <div className="Home_proposalDisplay_content">
        {proposalData.map((data)=>{
          return(
            <ProDisplay key={data.id} {...data.eventImage}{...data}/>
          )
        })}
      </div>

    </div>
    </>
  )
}

export default Home