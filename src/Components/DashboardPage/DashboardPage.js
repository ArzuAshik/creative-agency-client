import React from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import UserSidebar from "./UserSidebar/UserSidebar";

const DashboardPage = () => {
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">hdh</div>
      </div>
    </>
  );
};

export default DashboardPage;
