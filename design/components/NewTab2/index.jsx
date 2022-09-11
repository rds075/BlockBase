import React from "react";
import { Link } from "react-router-dom";
import "./NewTab2.css";

function NewTab2() {
  return (
    <div className="new-tab-1">
      <div className="flex-col-2">
        <img className="epcoin-1" src="/img/ep-coin@2x.svg" />
        <div className="tokens valign-text-middle inter-semi-bold-screamin-green-16px">Tokens</div>
        <div className="rectangle-2731-1"></div>
      </div>
      <Link to="/nfts">
        <img className="akar-iconsgrid-1" src="/img/akar-icons-grid-1@2x.svg" />
      </Link>
      <Link to="/transactions">
        <img className="fluenthistory-16-regular-1" src="/img/fluent-history-16-regular@2x.svg" />
      </Link>
    </div>
  );
}

export default NewTab2;
