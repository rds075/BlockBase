import React from "react";
import TriggerDefault from "../TriggerDefault";
import "./Input2.css";

function Input2(props) {
  const { searchPublicAddressOrEns, triggerDefaultProps } = props;

  return (
    <div className="input-5">
      <div className="overlap-group1-3">
        <p className="search-public-address-or-ens valign-text-middle inter-medium-gray-16px">
          {searchPublicAddressOrEns}
        </p>
        <TriggerDefault className={triggerDefaultProps.className} />
        <img className="search-4" src="/img/search-1@2x.svg" />
      </div>
    </div>
  );
}

export default Input2;
