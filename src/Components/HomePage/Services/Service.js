import React, { useEffect, useState } from "react";
import Services from "./Services";
import loading from "../../../images/loading.gif";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://ar-creative-agency-server.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section id="services" className="container service-section">
      <h2 className="text-center mb-3">
        Provide awesome <span className="brand-color">services</span>
      </h2>

      {services.length === 0 ? (
        <div className="loading col-12">
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <div className="row mt-5">
          {services.map((service) => (
            <Services service={service} key={service._id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Service;
