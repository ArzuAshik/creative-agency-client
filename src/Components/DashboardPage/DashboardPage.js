import React from "react";
import { Redirect } from "react-router-dom";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import UserSidebar from "./UserSidebar/UserSidebar";

const DashboardPage = () => {
  return <Redirect to="/dashboard/order" />;
};

export default DashboardPage;
