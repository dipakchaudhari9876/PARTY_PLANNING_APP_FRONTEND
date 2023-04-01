import React from "react";
import "./App.css";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";
import Proposal from "./components/Proposals/Proposal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProposalForm from "./components/ProposalForm/ProposalForm";
// import Register from "./components/register/register";
// import Signin from "./components/signin/signin";
import StrictRoute from "./components/Strict/StrictRoute";
import Auth from "./components/Authentication/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Auth/>}/>
        <Route path="/home" element={<StrictRoute Child={Home}/> }/>
        <Route path="/proposal" element={<StrictRoute Child={Proposal}/>}/>
        <Route path="/event/:id" element={<StrictRoute Child={Event}/>}/>
        <Route path="/pro/:id" element={<StrictRoute Child={ProposalForm}/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
