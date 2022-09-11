import React from "react";
import { Link } from "react-router-dom";
import "./NewTab3.css";

function NewTab3(props) {
  const { transactions } = props;

  return (
    <div className="new-tab-7">
      <Link to="/tokens">
        <img className="epcoin-7" src="/img/ep-coin-1@2x.svg" />
      </Link>
      <Link to="/nfts">
        <img className="akar-iconsgrid-7" src="/img/akar-icons-grid-2@2x.svg" />
      </Link>
      <div className="flex-col-8">
        <img className="fluenthistory-16-regular-7" src="/img/fluent-history-16-regular-2@2x.svg" />
        <div className="transactions-1 valign-text-middle inter-semi-bold-screamin-green-16px">{transactions}</div>
        <div className="rectangle-2731-7"></div>
      </div>
    </div>
  );
}

export default NewTab3;
