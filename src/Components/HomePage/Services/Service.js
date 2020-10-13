import React, { useEffect, useState } from "react";
import Services from "./Services";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://ar-creative-agency-server.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="container service-section">
      <h2 className="text-center mb-3">
        Provide awesome <span className="brand-color">services</span>
      </h2>
      <div className="row mt-5">
        {services.map((service) => (
          <Services service={service} />
        ))}
      </div>
    </section>
  );
};

export default Service;
