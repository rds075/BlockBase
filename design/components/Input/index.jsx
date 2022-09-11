import React from "react";
import TriggerDefault from "../TriggerDefault";
import "./Input.css";

function Input(props) {
  const { searchAccounts, triggerDefaultProps } = props;

  return (
    <div className="input-1">
      <div className="overlap-group-18">
        <div className="search-accounts valign-text-middle inter-medium-gray-16px">{searchAccounts}</div>
        <TriggerDefault className={triggerDefaultProps.className} />
        <img className="search" src="/img/search@2x.svg" />
      </div>
    </div>
  );
}

export default Input;
