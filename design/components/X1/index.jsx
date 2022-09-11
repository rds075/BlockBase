import React from "react";
import "./X1.css";

function X1(props) {
  const { x1, apocalpyse, number, className } = props;

  return (
    <div className={`x1 ${className || ""}`} style={{ backgroundImage: `url(${x1})` }}>
      <div className="text">
        <div className="overlap-group-9">
          <div className="rectangle-2738"></div>
          <div className="apocalpyse valign-text-middle inter-normal-white-18px">{apocalpyse}</div>
          <div className="number valign-text-middle inter-normal-gray-18px">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default X1;
