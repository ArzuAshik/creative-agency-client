import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item px-2 active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="#">
              Our Portfolio
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="#">
              Our Team
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="#">
              Contact Us
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="btn btn-dark text-white px-3" to="#">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
