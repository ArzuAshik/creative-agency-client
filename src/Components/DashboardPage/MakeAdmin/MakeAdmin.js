import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import UserSidebar from "../UserSidebar/UserSidebar";

const MakeAdmin = () => {
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <div style={{ borderRadius: "1.25rem" }} className="row p-4 bg-white">
            <form action="#" className="w-100">
              <h5>
                <label for="email">Email</label>
              </h5>
              <div className="row">
                <div className="col-6">
                  <input
                    id="email"
                    required
                    className="form-control p-4 mb-2"
                    type="text"
                    placeholder="jon@gmail.com"
                  />
                </div>
                <div className="col-3">
                  <button
                    style={{ height: "50px" }}
                    className="btn btn-success px-5 mb-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
