import React from "react";
import TokenIcon from "../TokenIcon";
import "./Logo2.css";

function Logo2(props) {
  const { className } = props;

  return (
    <div className={`logo-11 ${className || ""}`}>
      <TokenIcon />
    </div>
  );
}

export default Logo2;
