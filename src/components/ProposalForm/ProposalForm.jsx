import React, { useEffect, useState } from "react";
import "./proposalform.css";
import { imgUpload } from "../../Utilities/imageUpload";
import CloseIcon from "@mui/icons-material/Close";
import Img from "./Img";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { sendProposal } from "../../Utilities/proposal";
import { getId, getUser } from "../Auth/authentication";
import Header from "../Header/Header";

const ProposalForm = () => {
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const [file, setFile] = useState([]);
  const [imgdata, setImgdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("")
  const [place, setPlace] = useState("")
  const [proposalType, setProposalType] = useState("")
  const [eventType, setEventType] = useState("")
  const [budget, setBudget] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [food, setFood] = useState("")
  const [events, setEvents] = useState("")
  const [contacts, setContacts] = useState({})
  const [description, setDescription] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let arr = [];
      for (let i = 0; i < file.length; i++) {
        const data = await imgUpload(file[i]);
        arr.push(data);
      }

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

    const temp = { name, place, proposalType, eventType, budget, startDate, endDate, description, food, events }
    const temp1 = [{ ...contacts }]
    if (!name || !place || !proposalType || !eventType || !budget || !startDate || !endDate || !description || !food || !events) {
      setError("Fill all the details")
      return
    } else if (contacts.contact1.length !== 10 || contacts.contact2.length !== 10) {
      setError("Invalid Phone Number")
      return
    } else if (!imgdata.length) {
      setError("Add Images")
      return
    } else {
      setError("")
    }

    const vid = getId()
    const data = {...temp,contacts:temp1,images:imgdata, vendorId: vid };
    console.log(data)
    try {
      const proposalData = await sendProposal(data)
      if (proposalData) {
        alert('Proposal Created')
        navigate('/proposal')
      }

    } catch (err) {
      console.log(err)
    }

  };
  useEffect(()=>{
    const data = getUser()
    if(data === 'user'){
      navigate('/home')
    }
  },[])
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
                    placeholder="Type Event Name"
                    onChange={(e) => { setName(e.target.value) }} value={name} />
                </div>
                <div className="form_align">
                  <div className="form_individual">
                    <label htmlFor="place">Place of Event</label>
                    <select
                      className="filter-select"
                      id="place"
                      onChange={(e) => { setPlace(e.target.value) }} value={place} >
                      <option value="" defaultValue={true}>Select</option>
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
                      id="Ptype"
                      className="filter-select"
                      onChange={(e) => { setProposalType(e.target.value) }} value={proposalType}>
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
                      onChange={(e) => { setEventType(e.target.value) }} value={eventType}>
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
                      type="number"
                      placeholder=" 0000"
                      onChange={(e) => { setBudget(e.target.value) }} value={budget} />
                  </div>
                </div>
                <div className="form_align">
                  <div className="form_individual">
                    <label htmlFor="startDate">From</label>
                    <input
                      className="filter-select"
                      type="date"
                      id="startDate"
                      onChange={(e) => { setStartDate(e.target.value) }} value={startDate} />
                  </div>
                  <div className="form_individual">
                    <label htmlFor="endDate">To</label>
                    <input
                      className="filter-select"
                      type="date"
                      id="endDate"
                      onChange={(e) => { setEndDate(e.target.value) }} value={endDate} />
                  </div>
                </div>

                <div className="form_individual">
                  <label htmlFor="desc">Description</label>
                  <textarea
                    className="proposalForm_desc"
                    placeholder="Type some description about event"
                    type="text"
                    id="desc"
                    onChange={(e) => { setDescription(e.target.value) }} value={description}
                  ></textarea>
                </div>
                <div className="form_align">
                  <div className="form_individual">
                    <label htmlFor="contact1">Contact 1</label>
                    <input
                      className="filter-select"
                      type="number"
                      id="contact1"
                      placeholder="Contact 1"
                      onChange={(e) => { setContacts({ ...contacts, contact1: e.target.value }) }} />
                  </div>
                  <div className="form_individual">
                    <label htmlFor="contact1">Contact 2</label>
                    <input
                      className="filter-select"
                      type="number"
                      id="contact2"
                      placeholder="Contact 2"
                      onChange={(e) => { setContacts({ ...contacts, contact2: e.target.value }) }} />
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
                  <textarea
                    className="proposalForm_desc_right"
                    type="text"
                    id="food"
                    placeholder="Type your preferences here"
                    onChange={(e) => { setFood(e.target.value) }} value={food}
                  ></textarea>
                </div>
                <div className="form_individual">
                  <label htmlFor="events">Events</label>
                  <textarea
                    className="proposalForm_desc_right"
                    type="text"
                    id="events"
                    placeholder="Place your type of events here"
                    onChange={(e) => { setEvents(e.target.value) }} value={events}
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="buttonDiv">
            {error && <div className="form-error">
              {error}
            </div>}
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
