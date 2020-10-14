import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const DashboardHeader = () => {
  return (
    <div className="row mt-5">
      <div className="col-3 ml-5">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="col-8">ddf</div>
    </div>
  );
};

export default DashboardHeader;
