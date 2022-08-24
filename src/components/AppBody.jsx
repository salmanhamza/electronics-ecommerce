import "../App.css";

import React from "react";
import BodyImage from "../media/Homeware.png";

const AppBody = () => {
  return (
    <div>
      <div className="content-container">
        <div>
          <h3 className="product-name">Homeware</h3>
        </div>
        <div>
          <span className="sub-heading">
            order online for &nbsp;<a href="fast">Fast Delivery</a>
          </span>
        </div>
      </div>

      <div className="img-container">
        <img src={BodyImage} alt="" className="display-img" />
      </div>
      <div className="button-container">
        <button className="button-left">Categories</button>
        <button className="button-right">Your Collection</button>
      </div>
    </div>
  );
};

export default AppBody;
