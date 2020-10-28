import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link, useHistory } from "react-router-dom";

const Services = ({ service }) => {
  const history = useHistory();
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <div className="col-md-4" onMouseOver={() => toggle(!state)}>
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [1, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate((x) => `scale(${x})`),
        }}
      >
        <div className="service-item text-center p-5">
          <Link to={`/dashboard/order/${service._id}`}>
            <img
              className="d-inline-block rounded-circle"
              height="74"
              width="74"
              src={`data:image/jpeg;base64,${service.img.img}`}
              alt={service.title}
            />
            <h5 className="my-2">{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
          </Link>
        </div>
      </animated.div>
    </div>
  );
};

export default Services;
