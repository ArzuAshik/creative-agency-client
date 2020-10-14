import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCommentDots,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const UserSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard/order">
            <FontAwesomeIcon icon={faShoppingCart} /> Order
          </Link>
        </li>
        <li>
          <Link to="/dashboard/service-status">
            <FontAwesomeIcon icon={faCubes} /> Service list
          </Link>
        </li>
        <li>
          <Link to="/dashboard/review">
            <FontAwesomeIcon icon={faCommentDots} /> Review
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
