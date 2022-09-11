import React from "react";
import "./Frame24.css";

function Frame24(props) {
  const { children, className } = props;

  return (
    <div className={`frame-2-1-1 ${className || ""}`}>
      <div className="x1-y inter-medium-gray-16px">{children}</div>
    </div>
  );
}

export default Frame24;
