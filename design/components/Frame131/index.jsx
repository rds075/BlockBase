import React from "react";
import "./Frame131.css";

function Frame131(props) {
  const { blockchain, solana, className } = props;

  return (
    <div className={`frame-131 ${className || ""}`}>
      <div className="overlap-group">
        <div className="blockchain valign-text-middle inter-semi-bold-screamin-green-18px">{blockchain}</div>
        <div className="solana valign-text-middle inter-medium-white-13px">{solana}</div>
      </div>
    </div>
  );
}

export default Frame131;
