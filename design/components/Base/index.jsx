import React from "react";
import NewHeader from "../NewHeader";
import NewTab from "../NewTab";
import "./Base.css";

function Base(props) {
  const { newTabProps } = props;

  return (
    <div className="base">
      <NewHeader />
      <div className="tab-base">
        <NewTab nfts={newTabProps.nfts} />
      </div>
    </div>
  );
}

export default Base;
