import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./event.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { singleProposal } from "../../Utilities/proposal";
import { getVendorData } from "../../Utilities/vendor";
import axios from "axios";
import { getId, getUser } from "../Auth/authentication";
const url = process.env.REACT_APP_API


const Event = () => {
  const navigate = useNavigate()
  const userId = getId()
  const { id } = useParams();
  const [proposal, setProposal] = useState({});
  const [vdata, setVdata] = useState({});
  useEffect(() => {
    const temp = getUser()
    if (temp !== "user") {
      navigate('/proposal')
    }
    const getSingleData = async (id) => {
      try {
        const data = await singleProposal(id);
        if (data) {
          setProposal({ ...data });
        }
        const vendorId = data.vendorId;

        const vendorData = await getVendorData(vendorId);
        setVdata({ ...vendorData });
        // console.log(vendorData)
      } catch (err) {
        console.log(err);
      }
    };
    getSingleData(id);
  }, []);

  const handle = async () => {
    const temp = { selectedProposal: `${proposal._id}` }

    try {
      const updateData = await axios.put(`${url}/api/user/selectproposal/${userId}`, temp)
      if (updateData) {
        navigate('/home')
      }

    } catch (err) {
      alert(err)
    }
  }


  return (
    <>
      <Header />
      {Object.keys(proposal).length && (
        <div className="Event">
          <div className="Event_header">
            <div className="Event_header_name">
              proposals &lt; <span>{vdata.name}</span>{" "}
            </div>
            <div className="Event_header_btn_section">
              <Link onClick={handle} className="Event_header_btn">
                Select
              </Link>
              <Link to={"/home"} className="Event_header_btn">
                Home
              </Link>
            </div>
          </div>
          <div className="Event_Content">
            <div className="Event_Content_left">
              <img
                className="Event_Content_left_img"
                src={proposal.images[0].url}
                alt="main"
              />
              <div className="Event_Content_left_id">
                ID: &nbsp;<span>{proposal._id}</span>
              </div>

              <div className="Event_Content_left_Info">
                <div className="Event_Content_left_Info_name">
                  Name:&nbsp;<b>{vdata.name}</b>
                </div>
                <div className="Event_Content_left_Info_email">
                  Email:&nbsp;<b>{vdata.email}</b>
                </div>

                <div className="Event_Content_left_flex">
                  <div className="Event_Content_left_Info_startDate">
                    Start Date:&nbsp;<b>{proposal.startDate}</b>
                  </div>
                  <div className="Event_Content_left_Info_endDate">
                    End Date:&nbsp;<b>{proposal.endDate}</b>
                  </div>
                </div>
                <div className="Event_Content_left_flex">
                  <div className="Event_Content_left_detail">
                    Event Type<b>{proposal.name}</b>
                  </div>
                  <div className="Event_Content_left_detail">
                    Event Class<b>{proposal.eventType}</b>
                  </div>
                </div>
              </div>
              <div className="Event_Content_left_album">
                <div className="Event_Content_left_album_head">My Albums</div>
                <div className="display_album">
                  {proposal.images.map((data) => {
                    return (
                      <img
                        key={data.publicId}
                        className="display_album_img"
                        src={data.url}
                        alt="display"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="Event_Content_right">
              <div className="Event_Content_right_right">
                <div className="Event_Content_right_right_top">
                  <div className="Event_Content_right_right_top_header">
                    <b>Venue and Arrangements</b>
                  </div>
                  <div className="Event_Content_right_right_top_point">
                    {proposal.description}
                  </div>
                </div>
                <div className="Event_Content_right_right_top bottom">
                  <div className="Event_Content_right_right_top_header">
                    <b>Contacts</b>
                  </div>
                  <div className="Event_Content_right_right_contact">
                    <div className="contact_content">
                      <div className="contactname">Contact 1</div>
                      <div className="contactNumber">
                        +91&nbsp;{proposal.contacts[0].contact1}
                      </div>
                    </div>
                    <div className="contact_content">
                      <div className="contactname">Contact 1</div>
                      <div className="contactNumber">
                        +91&nbsp;{proposal.contacts[0].contact2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Event_Content_right_right">
                <div className="Event_Content_right_right_top">
                  <div className="Event_Content_right_right_top_header">
                    <b>Food Preferences</b>
                  </div>
                  <div className="Event_Content_right_right_top_point">
                    {proposal.food}
                  </div>
                </div>
                <div className="Event_Content_right_right_top bottom">
                  <div className="Event_Content_right_right_top_header">
                    <b>Events</b>
                  </div>
                  <div className="Event_Content_right_right_top_point">
                    {proposal.events}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Event;
