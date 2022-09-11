import React from "react";
import Frame3 from "../Frame3";
import "./Data2.css";

function Data2(props) {
  const { className, frame3Props } = props;

  return (
    <div className={`data-2 ${className || ""}`}>
      <div className="logo-21">
        <img className="image-25-9" src="/img/image-25-4@2x.png" />
      </div>
      <Frame3>{frame3Props.children}</Frame3>
    </div>
  );
}

export default Data2;
