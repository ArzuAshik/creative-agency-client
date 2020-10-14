import React from "react";
import "./App.css";
import Home from "./Components/HomePage/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import Order from "./Components/DashboardPage/Order/Order";
import ServiceStatus from "./Components/DashboardPage/ServiceStatus/ServiceStatus";
import Review from "./Components/DashboardPage/Review/Review";
import Services from "./Components/DashboardPage/Services/Services";
import AddService from "./Components/DashboardPage/AddService/AddService";
import MakeAdmin from "./Components/DashboardPage/MakeAdmin/MakeAdmin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/dashboard/order">
          <Order />
        </Route>
        <Route path="/dashboard/service-status">
          <ServiceStatus />
        </Route>
        <Route path="/dashboard/review">
          <Review />
        </Route>
        <Route path="/dashboard/services">
          <Services />
        </Route>
        <Route path="/dashboard/add-service">
          <AddService />
        </Route>
        <Route path="/dashboard/make-admin">
          <MakeAdmin />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
