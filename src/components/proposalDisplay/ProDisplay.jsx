import React from 'react'
import './prodisplay.css'
import {Link} from 'react-router-dom'

const ProDisplay = ({_id,name,place,budget,images}) => {
  const imgSrc = images[0]
  
  return (
    <Link to={`/event/${_id}`} className="ProDisplay">
        <img className='ProDisplay_img' src={imgSrc.url} alt="display" />

        <div className="ProDisplay_content">
          <div className="ProDisplay_content_name">{name}</div>
          <div className="ProDisplay_content_price">{budget}/-</div>
          <div className="ProDisplay_content_place">{place}</div>
        </div>

    </Link>
  )
}

export default ProDisplay