import React from "react";
import "./Add.css";

function Add(props) {
  const { className } = props;

  return (
    <div className={`add ${className || ""}`}>
      <img className="add-1" src="/img/add@2x.svg" />
    </div>
  );
}

export default Add;
