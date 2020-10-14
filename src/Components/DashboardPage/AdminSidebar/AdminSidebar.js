import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCubes, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="mt-5 sidebar">
      <ul>
        <li>
          <Link to="/dashboard/services">
            <FontAwesomeIcon icon={faCubes} /> Service list
          </Link>
        </li>
        <li>
          <Link to="/dashboard/add-service">
            <FontAwesomeIcon icon={faPlus} /> Add Service
          </Link>
        </li>
        <li>
          <Link to="/dashboard/make-admin">
            <FontAwesomeIcon icon={faUserPlus} /> Make Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
