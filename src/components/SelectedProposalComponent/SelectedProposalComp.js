import React from "react";
const SelectedProposalComp = () => {
  return (
    <div className="main">
      <div className="upper">
        <nav
          style={{
            fontSize: "large",
            fontWeight: "bolder",
            color: "skyblue",
            height: "50px",
            backgroundColor: "gray",
          }}
        >
          LOGO
        </nav>
      </div>
      <div style={{ backgroundColor: "red", width: "100%" }} className="lower">
        <div
          className="lowerLeft"
          style={{ width: "25%", backgroundColor: "blue", float: "left" }}
        >
          <div className="lowerLeftUp" style={{}}>
            <div className="card">
              <div>
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/183/497/desktop-wallpaper-no-copyright-music-electro-dubstep-backgrounds-music-background-dubstep.jpg"
                  style={{ width: "100%", height: "200px" }}
                ></img>
              </div>
              <div className="idDiv"></div>
              <div className="details">
                <h1>Name: VendorName:</h1>
                <h2>Email:Email</h2>
                <div className="dates">
                  <span>Start Date</span>
                  <span>End Date</span>
                </div>
                <span>
                  <div>Event Type</div>
                  <div>Marraige</div>
                </span>
                <span>
                  <div>Event Class</div>
                  <div>Class A</div>
                </span>
              </div>
            </div>
          </div>
          <div className="lowerLeftDown">
            <h1>Albums</h1>
            <div
              className="photos"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                alignContent: "space-evenly",
              }}
            >
              <div>
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/675/641/desktop-wallpaper-best-music-mix-%E2%99%AB-no-copyright-%E2%99%AB-gaming-music-trap-house-max-brhon.jpg"
                  style={{
                    width: "110px",
                    height: "110px",
                    margin: "20px auto",
                  }}
                ></img>
              </div>
              <div>
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/675/641/desktop-wallpaper-best-music-mix-%E2%99%AB-no-copyright-%E2%99%AB-gaming-music-trap-house-max-brhon.jpg"
                  style={{
                    width: "110px",
                    height: "110px",
                    margin: "20px auto",
                  }}
                ></img>
              </div>
              <div>
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/675/641/desktop-wallpaper-best-music-mix-%E2%99%AB-no-copyright-%E2%99%AB-gaming-music-trap-house-max-brhon.jpg"
                  style={{
                    width: "110px",
                    height: "110px",
                    margin: "20px auto",
                  }}
                ></img>
              </div>
              <div>
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/675/641/desktop-wallpaper-best-music-mix-%E2%99%AB-no-copyright-%E2%99%AB-gaming-music-trap-house-max-brhon.jpg"
                  style={{
                    width: "110px",
                    height: "110px",
                    margin: "20px auto",
                  }}
                ></img>
              </div>
              <div>
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/675/641/desktop-wallpaper-best-music-mix-%E2%99%AB-no-copyright-%E2%99%AB-gaming-music-trap-house-max-brhon.jpg"
                  style={{
                    width: "110px",
                    height: "110px",
                    margin: "20px auto",
                  }}
                ></img>
              </div>
              <div>
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/675/641/desktop-wallpaper-best-music-mix-%E2%99%AB-no-copyright-%E2%99%AB-gaming-music-trap-house-max-brhon.jpg"
                  style={{
                    width: "110px",
                    height: "110px",
                    margin: "20px auto",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="lowerRight"
        style={{
          width: "75%",
          backgroundColor: "green",
          float: "right",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="venue"
          style={{
            border: "1px solid black",
            width: "45%",
            float: "left",
            height: "400px",
            margin: "10px",
          }}
        >
          <div>
            <h1>venue</h1>
            <p>lorem</p>
          </div>
        </div>
        <div
          className="food"
          style={{
            border: "1px solid black",
            width: "45%",
            height: "400px",
            margin: "10px",
          }}
        >
          <div>
            <h1>food</h1>
            <p>lorem</p>
          </div>
        </div>
        <div
          className="contact"
          style={{
            border: "1px solid black",
            width: "45%",
            height: "400px",
            margin: "10px",
          }}
        >
          <div>
            <h1>Contact</h1>
            <p>lorem</p>
          </div>
        </div>
        <div
          className="event"
          style={{
            border: "1px solid black",
            width: "45%",
            height: "400px",
            margin: "10px",
          }}
        >
          <div>
            <h1>event</h1>
            <p>lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedProposalComp;