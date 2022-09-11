import React from "react";
import "./BackTitle2.css";

function BackTitle2(props) {
  const { blockchain } = props;

  return (
    <div className="back-title-4">
      <img className="back-4" src="/img/back-4@2x.svg" />
      <div className="blockchain-1 valign-text-middle inter-semi-bold-white-20px">{blockchain}</div>
    </div>
  );
}

export default BackTitle2;
