import React from "react";
import "./Frame3.css";

function Frame3(props) {
  const { children } = props;

  return (
    <div className="frame-3-1">
      <div className="usdc-1 valign-text-middle inter-medium-heavy-metal-18px">{children}</div>
    </div>
  );
}

export default Frame3;
