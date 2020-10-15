import React, { useState } from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import UserSidebar from "../UserSidebar/UserSidebar";

const Review = () => {
  document.title = "Customer Review - Dashboard | Creative Agency";
  const [formInput, setFormInput] = useState({});

  const handleOnBlur = (e) => {
    function handleInput() {
      const newInput = { ...formInput };
      newInput[e.target.name] = e.target.value;
      setFormInput(newInput);
    }

    e.target.value.length > 0
      ? handleInput()
      : alert("Please Enter Valid Information.");
  };

  const handleSubmit = (e) => {
    if (formInput.name && formInput.company && formInput.description) {
      fetch("https://ar-creative-agency-server.herokuapp.com/addFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formInput),
      }).then((res) => {
        alert("Thank You For Your Review.");
      });
    } else {
      alert("Please Fill up the form!");
    }
    e.preventDefault();
  };
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <form action="#" onSubmit={handleSubmit}>
            <input
              onBlur={handleOnBlur}
              name="name"
              required
              className="form-control p-4"
              type="text"
              placeholder="Your name"
            />
            <input
              onBlur={handleOnBlur}
              name="company"
              required
              className="form-control p-4 my-2"
              type="text"
              placeholder="Company’s name, Designation"
            />
            <textarea
              onBlur={handleOnBlur}
              name="description"
              required
              rows="5"
              className="form-control p-4 my-2"
              type="text"
              placeholder="Description"
            />
            <button type="submit" className="btn btn-dark px-5 py-2 mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Review;
