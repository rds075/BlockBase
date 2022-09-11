import React from "react";
import { Link } from "react-router-dom";
import Base2 from "../Base2";
import NewTabButton from "../NewTabButton";
import "./Receive.css";

function Receive(props) {
  const { receive, account3, x0X92A2039O94M3475B21, newTabButtonProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="receive-3 screen">
        <div className="overlap-group3-3">
          <Base2 />
          <img className="qr" src="/img/qr@2x.svg" />
          <div className="back-title-7">
            <Link to="/tokens" className="align-self-flex-center">
              <img className="back-7" src="/img/back-7@2x.svg" />
            </Link>
            <div className="receive-4 valign-text-middle inter-semi-bold-heavy-metal-26px">{receive}</div>
          </div>
          <div className="account">
            <div className="overlap-group1-8">
              <div className="bg"></div>
              <div className="account-3-9 valign-text-middle">{account3}</div>
              <div className="account-number">
                <div className="x0x92-a-2039-o-94-m34-75b21 valign-text-middle inter-medium-eagle-14px">
                  {x0X92A2039O94M3475B21}
                </div>
              </div>
              <img className="bxcopy" src="/img/bx-copy@2x.svg" />
            </div>
          </div>
          <NewTabButton
            shareAddress={newTabButtonProps.shareAddress}
            className={newTabButtonProps.className}
            logo2Props={newTabButtonProps.logo2Props}
            tokenIconProps={newTabButtonProps.tokenIconProps}
          />
        </div>
      </div>
    </div>
  );
}

export default Receive;
