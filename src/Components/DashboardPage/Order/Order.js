import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import UserSidebar from "../UserSidebar/UserSidebar";
import "./Order.css";

const Order = () => {
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <div className="row">
            <div className="col-6">
              <form action="#">
                <input
                  required
                  className="form-control p-4"
                  type="text"
                  placeholder="Your name / company’s name"
                />
                <input
                  required
                  className="form-control p-4 my-2"
                  type="text"
                  placeholder="Your email address"
                />
                <input
                  required
                  className="form-control p-4 my-2"
                  type="text"
                  placeholder="Service"
                />
                <textarea
                  required
                  rows="5"
                  className="form-control p-4 my-2"
                  type="text"
                  placeholder="Project Details"
                />
                <div className="row">
                  <div className="col-6">
                    <input
                      required
                      className="form-control p-4"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="col-6 custom-file">
                    <label for="upload-file">Upload Project File</label>
                    <input required id="upload-file" type="file" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn bg-white px-5 py-2 mt-2 border"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
