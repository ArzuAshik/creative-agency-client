import React from "react";
import Feedbacks from "./Feedbacks";

const Feedback = () => {
  return (
    <section class="container feedback-section">
      <h2 className="text-center mb-5">
        Clients <span className="brand-color">Feedback</span>
      </h2>
      <div className="row">
        <Feedbacks />
      </div>
    </section>
  );
};

export default Feedback;
