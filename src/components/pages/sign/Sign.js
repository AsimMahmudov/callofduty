import React from "react";
import signimg from "../../../image/jpt-playnow-desktop-bg.jpg";
import signimg2 from "../../../image/COD_MW3_Logo.png";

import "../../style/Sign.css";

const Sign = () => {
  return (
    <div id="sign">
      <div className="container">
        <div className="sign">
          <div className="signimg">
            <img className="signimg" src={signimg} alt="" />
          </div>
          <div className="blok">
            <div className="bloks">
              <img className="signimg1" src={signimg2} alt="" />
              <h1>ENLIST NOW</h1>
              <p>
                GET THE LATEST INTEL: Your source for the most current news, get
                alerts for new events or updates, and view heatmaps.
              </p>
              <h2>
                CREATE YOUR <br /> ACCOUNT
              </h2>
              <h5>EMAIL ADDRESS:*</h5>
              <input type="text" />
              <h5>RETYPE EMAIL:*</h5>
              <input type="text" />
              <button>SIGN UP!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
