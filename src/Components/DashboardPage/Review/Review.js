import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import UserSidebar from "../UserSidebar/UserSidebar";

const Review = () => {
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <form action="#">
            <input
              required
              className="form-control p-4"
              type="text"
              placeholder="Your name"
            />
            <input
              required
              className="form-control p-4 my-2"
              type="text"
              placeholder="Company’s name, Designation"
            />
            <textarea
              required
              rows="5"
              className="form-control p-4 my-2"
              type="text"
              placeholder="Description"
            />
            <button type="submit" className="btn btn-dark px-5 py-2 mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
