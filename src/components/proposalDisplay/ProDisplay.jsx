import React from 'react'
import './prodisplay.css'

const ProDisplay = ({name,location,price}) => {
  
  return (
    <div className="ProDisplay">
        <img className='ProDisplay_img' src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5JTIwdmVudWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="display" />

        <div className="ProDisplay_content">
          <div className="ProDisplay_content_name">{name}</div>
          <div className="ProDisplay_content_price">{price}/-</div>
          <div className="ProDisplay_content_place">{location}</div>
        </div>

    </div>
  )
}

export default ProDisplay