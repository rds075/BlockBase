import React from "react";
import { Link } from "react-router-dom";
import Base2 from "../Base2";
import Input2 from "../Input2";
import "./Send.css";

function Send(props) {
  const { place, input2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="send screen">
        <div className="overlap-group2-2">
          <Base2 />
          <img className="back-1" src="/img/back-1@2x.svg" />
          <Input2
            searchPublicAddressOrEns={input2Props.searchPublicAddressOrEns}
            triggerDefaultProps={input2Props.triggerDefaultProps}
          />
          <div className="back-title-2">
            <Link to="/tokens" className="align-self-flex-center">
              <img className="back-2" src="/img/back-2@2x.svg" />
            </Link>
            <div className="place valign-text-middle inter-semi-bold-heavy-metal-26px">{place}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Send;
