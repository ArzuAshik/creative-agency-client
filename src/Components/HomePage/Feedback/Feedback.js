import React, { useEffect, useState } from "react";
import Feedbacks from "./Feedbacks";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("https://ar-creative-agency-server.herokuapp.com/feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);
  return (
    <section class="container feedback-section">
      <h2 className="text-center mb-5">
        Clients <span className="brand-color">Feedback</span>
      </h2>
      <div className="row">
        {feedbacks.map((feedback) => (
          <Feedbacks feedback={feedback} />
        ))}
      </div>
    </section>
  );
};

export default Feedback;
