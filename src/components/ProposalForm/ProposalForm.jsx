import React, { useState } from "react";
import "./proposalform.css";
import { imgUpload } from "../../Utilities/imageUpload";
import CloseIcon from "@mui/icons-material/Close";
import Img from "./Img";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { sendProposal } from "../../Utilities/proposal";
import { getId } from "../Auth/authentication";
import Header from "../Header/Header";

const ProposalForm = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState([]);
  const [imgdata, setImgdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    proposalType: "",
    eventType: "",
    budget: 0,
    startDate: "",
    endDate: "",
    description: "",
    contacts: [],
    food: "",
    events: "",
    images: [],
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let arr = [];
      for (let i = 0; i < file.length; i++) {
        const data = await imgUpload(file[i]);
        arr.push(data);
      }
      setFormData({
        ...formData,
        images: [...arr],
      });
      console.log(arr);
      setImgdata([...arr]);
      setLoading(false);
      setFile([]);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const vid = getId();
    // console.log({...formData,vendorId:'641f2a93f8434008c555ac0d'});
    // try{
    //   const data = await sendProposal({formData,vendorId:vid})
    //   if(data){
    //     console.log(data)
    // navigate('/proposal')
    //   }

    // }catch(err){
    //   console.log(err)
    // }
  };
  return (
    <>
      <Header />
      <div className="proposalForm_cont">
        <div className="ProposalForm">
          <h3 className="ProposalForm_head">Create Proposal</h3>
          <Link to={"/proposal"}>
            <CloseIcon className="proposalForm_icon"></CloseIcon>
          </Link>
          <form onSubmit={formSubmitHandler}>
            <div className="proposalForm_form">
              <div className="proposalForm_left">
                <div className="form_individual">
                  <label htmlFor="event">Event Name</label>
                  <input
                    className="form_eventName"
                    type="text"
                    id="event"
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                  />
                </div>
                <div className="form_align">
                  <div className="form_individual">
                    <label htmlFor="place">Event Place</label>
                    <select
                      className="filter-select"
                      id="event"
                      onChange={(e) => {
                        setFormData({ ...formData, place: e.target.value });
                      }}
                    >
                      <option defaultValue={true}>Select</option>
                      <option value="Banglore">Banglore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Noida">Noida</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                  </div>
                  <div className="form_individual">
                    <label htmlFor="Ptype">Proposal Type</label>
                    <select
                      className="filter-select"
                      id="Ptype"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          proposalType: e.target.value,
                        });
                      }}
                    >
                      <option defaultValue={true}>Select</option>
                      <option value="Beach">Beach</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Pub">Pub</option>
                      <option value="FarmHouse">FarmHouse</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form_align">
                  <div className="form_individual">
                    <label htmlFor="Etype">Event Type</label>
                    <select
                      className="filter-select"
                      id="Etype"
                      onChange={(e) => {
                        setFormData({ ...formData, eventType: e.target.value });
                      }}
                    >
                      <option defaultValue={true}>Select</option>
                      <option value="Class A">Class A</option>
                      <option value="Class A+">Class A+</option>
                      <option value="Class B">Class B</option>
                    </select>
                  </div>
                  <div className="form_individual">
                    <label htmlFor="budget">Budget</label>
                    <input
                      className="filter-select"
                      type="text"
                      id="budget"
                      placeholder=" 0000"
                      onChange={(e) => {
                        setFormData({ ...formData, budget: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="form_align">
                  <div className="form_individual">
                    <label htmlFor="startDate">From</label>
                    <input
                      className="filter-select"
                      type="date"
                      id="startDate"
                      onChange={(e) => {
                        setFormData({ ...formData, startDate: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form_individual">
                    <label htmlFor="endDate">To</label>
                    <input
                      className="filter-select"
                      type="date"
                      id="endDate"
                      onChange={(e) => {
                        setFormData({ ...formData, endDate: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="form_individual">
                  <label htmlFor="desc">Description</label>
                  {/* <input
              className="proposalForm_desc"
              type="text"
              id="desc"
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
            /> */}
                  <textarea
                    className="proposalForm_desc"
                    type="text"
                    id="desc"
                    placeholder="type your description here"
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                    }}
                  ></textarea>
                </div>
                <div className="form_align">
                  <div className="form_individual">
                    <label htmlFor="contact1">Contact</label>
                    <input
                      className="form_contact"
                      type="text"
                      id="contact1"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          contacts: [
                            ...formData.contacts,
                            { contact: e.target.value },
                          ],
                        });
                      }}
                    />
                  </div>
                  <div className="form_individual">
                    <label htmlFor="contact2">Contact</label>
                    <input
                      className="form_contact"
                      type="text"
                      id="contact2"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          contacts: [
                            ...formData.contacts,
                            { contact: e.target.value },
                          ],
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="proposalForm_right">
                <div className="form_individual">
                  <div className="proposalForm_image_head">
                    <input
                      type="file"
                      multiple={true}
                      onChange={(e) => {
                        setFile(e.target.files);
                      }}
                    />
                    <button
                      className="Imagebtn"
                      disabled={loading}
                      onClick={submitHandler}
                    >
                      {loading ? "Loading..." : "Add"}
                    </button>
                  </div>
                  <div className="proposalForm_displayImg">
                    {imgdata &&
                      imgdata.map((data) => {
                        return <Img key={data.url} {...data} />;
                      })}
                  </div>
                </div>
                <div className="form_individual">
                  <label htmlFor="food">Food Preferences</label>
                  {/* <input
              className="proposalForm_desc_right"
              type="text"
              id="food"
              onChange={(e) => {
                setFormData({ ...formData, food: e.target.value });
              }}
            /> */}
                  <textarea
                    className="proposalForm_desc_right"
                    type="text"
                    id="food"
                    placeholder="Type your preferences here"
                    onChange={(e) => {
                      setFormData({ ...formData, food: e.target.value });
                    }}
                  ></textarea>
                </div>
                <div className="form_individual">
                  <label htmlFor="events">Events</label>
                  {/* <input
              className="proposalForm_desc_right"
              type="text"
              id="events"
              onChange={(e) => {
                setFormData({ ...formData, events: e.target.value });
              }}
            /> */}
                  <textarea
                    className="proposalForm_desc_right"
                    type="text"
                    id="events"
                    placeholder="Place your type of events here"
                    onChange={(e) => {
                      setFormData({ ...formData, events: e.target.value });
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="buttonDiv">
              <button
                type="submit"
                className="postButton"
                onClick={formSubmitHandler}
              >
                POST
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProposalForm;
