import React from "react";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  return (
    <div className="service-item col-md-4 text-center p-5">
      <Link to={`/dashboard/order/${service._id}`}>
        <img
          className="d-inline-block rounded-circle"
          height="74"
          width="74"
          src={`data:image/jpeg;base64,${service.img.img}`}
          alt=""
        />
        <h5 className="my-2">{service.title}</h5>
        <p className="text-secondary">{service.description}</p>
      </Link>
    </div>
  );
};

export default Services;
