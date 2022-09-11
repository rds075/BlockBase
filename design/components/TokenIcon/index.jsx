import React from "react";
import "./TokenIcon.css";

function TokenIcon(props) {
  const { className } = props;

  return <div className={`token-icon-2 ${className || ""}`}></div>;
}

export default TokenIcon;
