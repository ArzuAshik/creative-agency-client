import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  return (
    <div
      className="test"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <RingLoader css={override} size={200} color={"orange"} />
    </div>
  );
};

export default Loading;
