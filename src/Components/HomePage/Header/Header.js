import React from "react";
import Navbar from "../Navbar/Navbar";
import homeHero from "../../../images/logos/Frame.png";
import "../HomePage.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Navbar />
          <div className="row mt-5 header-content d-flex justify-content-center align-items-center">
            <div className="col-md-6 pl-5">
              <h1 className="font-weight-bolder mr-lg-5 mb-3">
                Let’s Grow Your Brand To The Next Level
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </p>
              <button className="btn btn-dark px-5">Hire Us</button>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={homeHero} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;