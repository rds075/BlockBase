import React from "react";
import NewHeader from "../NewHeader";
import NewTab3 from "../NewTab3";
import "./Base3.css";

function Base3(props) {
  const { newTab3Props } = props;

  return (
    <div className="base-7">
      <NewHeader />
      <div className="tab-base-7">
        <NewTab3 transactions={newTab3Props.transactions} />
      </div>
    </div>
  );
}

export default Base3;
