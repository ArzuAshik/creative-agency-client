import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import Feedbacks from "./Feedbacks";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const [loading, setLoading] = useState(true);
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  useEffect(() => {
    fetch("https://ar-creative-agency-server.herokuapp.com/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      });
  }, []);
  return (
    <section className="container feedback-section">
      <h2 className="text-center mb-5">
        Clients <span className="brand-color">Feedback</span>
      </h2>
      <div className="row">
        <RingLoader
          css={override}
          size={200}
          color={"orange"}
          loading={loading}
        />
        {feedbacks.map((feedback) => (
          <Feedbacks feedback={feedback} key={feedback._id} />
        ))}
      </div>
    </section>
  );
};

export default Feedback;
