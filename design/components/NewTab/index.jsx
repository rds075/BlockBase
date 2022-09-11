import React from "react";
import { Link } from "react-router-dom";
import "./NewTab.css";

function NewTab(props) {
  const { nfts } = props;

  return (
    <div className="new-tab">
      <Link to="/tokens">
        <img className="epcoin" src="/img/ep-coin-1@2x.svg" />
      </Link>
      <div className="flex-col">
        <img className="akar-iconsgrid" src="/img/akar-icons-grid@2x.svg" />
        <div className="nf-ts valign-text-middle inter-semi-bold-screamin-green-16px">{nfts}</div>
        <div className="rectangle-2731"></div>
      </div>
      <Link to="/transactions">
        <img className="fluenthistory-16-regular" src="/img/fluent-history-16-regular@2x.svg" />
      </Link>
    </div>
  );
}

export default NewTab;
