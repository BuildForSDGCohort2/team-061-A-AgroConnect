import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

import bgImage from "../../prep-basket.jpg";

function LandingPage() {
  const image4bg = {
    imgStyle: {
      height: 595,
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      filter: `grayscale(50%)`,
    }
  }

  return (
    <div className="landing-page" style={image4bg.imgStyle}>
      <div className="buttons-div">
        
        <div className="button-div">
          <span className="sales-text">FROM THE <br/> FARM TO <br/> YOUR DOORSTEP</span>
          <Link to="/buy">
            <button>START BUYING</button>
          </Link>
        </div>

        <div className="button-div">
        <span className="sales-text">FROM YOUR <br/> FARM TO <br/> THE MARKET</span>
          <Link to="/sell">
            <button>START SELLING</button>
          </Link>
        </div>

      </div>
    </div>
  )
} // LandingPage

export default LandingPage;
