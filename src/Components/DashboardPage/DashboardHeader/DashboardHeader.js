import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const DashboardHeader = () => {
  const page = window.location.pathname.split("/");
  let pageName;
  if (page[2] === "order") {
    pageName = "Order";
  } else if (page[2] === "service-status") {
    pageName = "Service List";
  } else if (page[2] === "review") {
    pageName = "Review";
  } else if (page[2] === "services") {
    pageName = "Service List";
  } else if (page[2] === "add-service") {
    pageName = "Add Service";
  } else if (page[2] === "make-admin") {
    pageName = "Make Admin";
  } else {
    pageName = " ";
  }
  return (
    <div className="row mt-5">
      <div className="col-3 ml-5">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="col-8 d-flex justify-content-between">
        <h4>{pageName}</h4>
        <h4>User Name</h4>
      </div>
    </div>
  );
};

export default DashboardHeader;
