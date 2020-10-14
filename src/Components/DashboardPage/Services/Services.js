import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import UserSidebar from "../UserSidebar/UserSidebar";
import SingleService from "./SingleService";

const Services = () => {
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <div style={{ borderRadius: "1.25rem" }} className="bg-white p-5">
            <table className="table bg-white">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Service</th>
                  <th scope="col">Project Details</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <SingleService />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
