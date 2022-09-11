import React from "react";
import "./Tab.css";

function Tab(props) {
  const { children } = props;

  return (
    <div className="tab">
      <div className="home valign-text-middle">{children}</div>
    </div>
  );
}

export default Tab;
