import React from "react";

const Services = ({ service }) => {
  return (
    <div className="col-md-4 text-center p-5">
      <img className="d-inline-block" height="74" width="74" src="" alt="" />
      <h5 className="my-2">{service.title}</h5>
      <p className="text-secondary">{service.description}</p>
    </div>
  );
};

export default Services;
