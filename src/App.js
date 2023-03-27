import React from "react";
import "./App.css";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";
import Proposal from "./components/Proposals/Proposal";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProposalForm from "./components/ProposalForm/ProposalForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/proposal" element={<Proposal/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/pro" element={<ProposalForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
