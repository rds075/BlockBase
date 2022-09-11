import React from "react";
import Frame3 from "../Frame3";
import "./Data.css";

function Data(props) {
  const { className, frame3Props } = props;

  return (
    <div className={`data ${className || ""}`}>
      <div className="logo-18"></div>
      <Frame3>{frame3Props.children}</Frame3>
    </div>
  );
}

export default Data;
