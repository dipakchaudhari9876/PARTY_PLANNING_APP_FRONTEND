import React from "react";
const CardComp = (props) => {
  return (
    <div
      className="main"
      style={{ border: "1px solid black", width: "30%", margin: "50px 20px" }}
    >
      <div>
        <img
          src={props.data.eventImage[0].pic1}
          style={{ width: "100%" }}
        ></img>
      </div>
      <div>
        <h3>{props.data.name}</h3>
        <h5>{props.data.price}</h5>
        <p>{props.data.location}</p>
      </div>
    </div>
  );
};
export default CardComp;
