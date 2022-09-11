import React from "react";
import TokenIcon from "../TokenIcon";
import "./Logo.css";

function Logo(props) {
  const { className } = props;

  return (
    <div className={`logo-2 ${className || ""}`}>
      <TokenIcon />
    </div>
  );
}

export default Logo;
