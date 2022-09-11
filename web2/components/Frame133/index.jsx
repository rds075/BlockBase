import React from "react";
import "./Frame133.css";

function Frame133(props) {
  const { learnMore, documentation, termsOfService, className } = props;

  return (
    <div className={`frame-133 ${className || ""}`}>
      <div className="learn-more-1 inter-medium-white-25px">{learnMore}</div>
      <div className="documentation inter-medium-white-19px">{documentation}</div>
      <div className="terms-of-service inter-medium-white-19px">{termsOfService}</div>
    </div>
  );
}

export default Frame133;
