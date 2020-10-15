import React from "react";

const Feedbacks = ({ feedback }) => {
  return (
    <div className="col-md-4 pt-2" style={{ border: "1px solid gray" }}>
      <div className="row mb-2 d-flex align-items-center">
        <div className="col-3">
          <img
            className="rounded-circle"
            height="64"
            width="64"
            src="https://dummyimage.com/64x64/7a7a7a/fff"
            alt=""
          />
        </div>
        <div className="col-9">
          <h5 className="m-0 p-0">{feedback.name}</h5>
          <h6 className="m-0 p-0">{feedback.company}</h6>
        </div>
      </div>
      <p className="text-muted">{feedback.description}</p>
    </div>
  );
};

export default Feedbacks;
