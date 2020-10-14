import React from "react";
import icon from "../../../images/icons/service1.png";

const OrderedService = () => {
  const pending = {
    backgroundColor: "#FFE3E3",
    color: "#FF4545",
    minWidth: "120px",
    display: "inline-block",
    textAlign: "center",
  };
  const done = {
    backgroundColor: "#C6FFE0",
    color: "#009444",
    minWidth: "120px",
    display: "inline-block",
    textAlign: "center",
  };
  return (
    <>
      <div className="col-md-5 p-2 m-2 rounded bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img height="74" className="rounded-circle" src={icon} alt="" />
          </div>
          <div>
            <span style={pending} className="p-2 rounded">
              Pending
            </span>
          </div>
        </div>
        <h4>GraphicsDesign</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          magni?
        </p>
      </div>
      <div className="col-md-5 p-3 m-2 rounded bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img height="74" className="rounded-circle" src={icon} alt="" />
          </div>
          <div>
            <span style={done} className="p-2 rounded">
              Done
            </span>
          </div>
        </div>
        <h4>GraphicsDesign</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          magni?
        </p>
      </div>
    </>
  );
};

export default OrderedService;
