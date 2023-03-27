import React from 'react'
import Header from '../Header/Header'
import './event.css'
import Img from '../ProposalForm/Img'

const data = {
  id: 765,
  name: "Avijit Pateriya",
  email: "avijit@gmail.com",
  price: "22000",
  location: "Banglore",
  startDate: "22 Dec 2023",
  endDate: "31 Dec 2023",
  eventType: "New Year Party",
  eventClass: "Class A",
  eventImage: [
    {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5JTIwdmVudWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5JTIwdmVudWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5JTIwdmVudWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    
  ],
  venueAndArrangement: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolores molestiae ratione qui. Aut, praesentium animi. Culpa consequuntur repudiandae aut, delectus recusandae corporis maiores perspiciatis eligendi distinctio id, ab expedita!",
  contact: [
    {
      contact: 9876543210,
    },
    {
      contact: 9676543210,
    }
  ],
  foodPreference: [
    {
      id: 1,
      task: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 2,
      task: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 3,
      task: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 4,
      task: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 5,
      task: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
  ],
  events: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolores molestiae ratione qui. Aut, praesentium animi."
}

const Event = () => {
  return (
    <>
      <Header />
      <div className="Event">
        <div className="Event_header">
          <div className="Event_header_name">proposals &lt; <span>{data.name}</span> </div>
          <button className='Event_header_btn'>Select</button>
        </div>
        <div className="Event_Content">
          <div className="Event_Content_left">
            <img className='Event_Content_left_img' src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5JTIwdmVudWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="main" />
            <div className="Event_Content_left_id">ID:
              &nbsp;<span>{data.id}</span></div>

            <div className="Event_Content_left_Info">
              <div className="Event_Content_left_Info_name">Name:&nbsp;<b>{data.name}</b></div>
              <div className="Event_Content_left_Info_email">Email:&nbsp;<b>{data.email}</b></div>

              <div className="Event_Content_left_flex">
                <div className="Event_Content_left_Info_startDate">Start Date:&nbsp;<b>{data.startDate}</b></div>
                <div className="Event_Content_left_Info_endDate">End Date:&nbsp;<b>{data.endDate}</b></div>
              </div>
              <div className="Event_Content_left_flex">
                <div className="Event_Content_left_detail">Event Type<b>{data.eventType}</b></div>
                <div className="Event_Content_left_detail">Event Class<b>{data.eventClass}</b></div>
              </div>
            </div>
            <div className="Event_Content_left_album">
              <div className='Event_Content_left_album_head'>My Albums</div>
              <div className="display_album">
                {data.eventImage.map((data) => {
                  return (
                    <img className='display_album_img' src={data.url} alt="display" />
                  )
                })}
              </div>
            </div>


          </div>
          <div className="Event_Content_right">
            <div className="Event_Content_right_right">
              <div className="Event_Content_right_right_top">
                <div className="Event_Content_right_right_top_header"><b>Venue and Arrangements</b></div>
                <div className="Event_Content_right_right_top_point">
                  {data.events}
                </div>
              </div>
              <div className="Event_Content_right_right_top bottom">
                <div className="Event_Content_right_right_top_header"><b>Contacts</b></div>
                <div className="Event_Content_right_right_contact">
                  {data.contact.map((data,i)=>{
                    return(
                      <div key={data.contact} className="contact_content">
                        <div className="contactname">Contact{i+1}</div>
                        <div className="contactNumber">+91&nbsp;{data.contact}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
            <div className="Event_Content_right_right">
              <div className="Event_Content_right_right_top">
                <div className="Event_Content_right_right_top_header"><b>Food Preferences</b></div>
                <div className="Event_Content_right_right_top_point">
                {data.events}
                </div>
              </div>
              <div className="Event_Content_right_right_top bottom">
                <div className="Event_Content_right_right_top_header"><b>Events</b></div>
                <div className="Event_Content_right_right_top_point">
                {data.events}
                </div>
              </div>

            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default Event