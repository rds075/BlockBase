import React from "react";
import "./TriggerDefault.css";

function TriggerDefault(props) {
  const { className } = props;

  return (
    <div className={`trigger-default ${className || ""}`}>
      <img className="outline-up-3" src="/img/outline-up-2@2x.svg" />
    </div>
  );
}

export default TriggerDefault;
