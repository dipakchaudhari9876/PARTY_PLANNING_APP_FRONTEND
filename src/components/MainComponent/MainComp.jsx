import React from "react";
import CardComp from "../CardComponent/CardComp";
import Records from "../Records.json";
function MainComp() {
  return (
    <div>
      <div className="navBar">
        <nav style={{ height: "50px" }}>Events</nav>
      </div>
      <div className="heroImg">
        <img
          style={{ width: "100%", height: "280px" }}
          src="https://cdn.wallpapersafari.com/5/11/Ocrz3j.jpg"
        ></img>
      </div>
      <h1 style={{ marginLeft: "20px" }}>Proposals</h1>
      <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
        {Records.map((item, index) => {
          return <CardComp key={index} data={item} />;
        })}
      </div>
    </div>
  );
}

export default MainComp;
