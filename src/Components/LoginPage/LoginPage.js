import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import googleIcon from "../../images/icons/googleIcon.png";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <img className="d-block mx-auto my-5" src={logo} alt="" />
      <section className="login-area p-5">
        <h3 className="text-center mb-5">Login With</h3>
        <p className="google-login">
          <img height="34" src={googleIcon} alt="Google Icon" />
          <span>Continue with Google</span>
        </p>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/login" className="text-primary">
            Create an account
          </Link>
        </p>
      </section>
    </div>
  );
};

export default LoginPage;
