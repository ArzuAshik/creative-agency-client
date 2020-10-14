import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import UserSidebar from "../UserSidebar/UserSidebar";

const AddService = () => {
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <form action="#">
            <div
              style={{ borderRadius: "1.25rem" }}
              className="row p-4 bg-white"
            >
              <div className="col-6">
                <h5>
                  <label for="service-title">Service Title</label>
                </h5>
                <input
                  id="service-title"
                  required
                  className="form-control p-4 mb-2"
                  type="text"
                  placeholder="Enter Title"
                />
                <h5>
                  <label for="description">Description</label>
                </h5>
                <textarea
                  id="description"
                  required
                  rows="5"
                  className="form-control p-4"
                  type="text"
                  placeholder="Enter Description"
                />
              </div>
              <div className="col-6 custom-file w-50">
                <h5>Icon</h5>
                <label for="upload-file">Upload Image</label>
                <input required id="upload-file" type="file" />
              </div>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="btn btn-success px-5 py-2 mt-2 border"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddService;
