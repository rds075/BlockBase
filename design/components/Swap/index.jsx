import React from "react";
import { Link } from "react-router-dom";
import Base2 from "../Base2";
import Logo2 from "../Logo2";
import NewTabButton from "../NewTabButton";
import "./Swap.css";

function Swap(props) {
  const {
    swap1,
    balance562361,
    swapFrom,
    logo1,
    usdc,
    number,
    logo2,
    sol,
    estimatedAmount45,
    swapTo,
    exchangeRate4573Usdc1Sol,
    newTabButtonProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="swap screen">
        <div className="overlap-group4">
          <Base2 />
          <div className="back-title">
            <Link to="/tokens" className="align-self-flex-center">
              <img className="back" src="/img/back@2x.svg" />
            </Link>
            <div className="swap-1 valign-text-middle inter-semi-bold-heavy-metal-26px">{swap1}</div>
          </div>
          <div className="swap-2">
            <div className="swap-from">
              <div className="overlap-group-10">
                <div className="balance-562361 valign-text-bottom">{balance562361}</div>
                <div className="swap-from-1 valign-text-middle inter-medium-heavy-metal-18px">{swapFrom}</div>
              </div>
              <div className="input">
                <div className="content">
                  <div className="left">
                    <div className="token-dropdown">
                      <div className="logo-8" style={{ backgroundImage: `url(${logo1})` }}></div>
                      <div className="logo-9">
                        <div className="text-1">
                          <div className="usdc valign-text-middle inter-medium-heavy-metal-18px">{usdc}</div>
                        </div>
                      </div>
                      <img className="chevron-down" src="/img/chevron-down@2x.svg" />
                    </div>
                    <img className="divider" src="/img/divider@2x.svg" />
                  </div>
                  <div className="number-1 valign-text-middle inter-medium-heavy-metal-18px">{number}</div>
                </div>
              </div>
            </div>
            <div className="overlap-group2">
              <div className="swap-3">
                <img className="swap-4" src="/img/swap@2x.svg" />
              </div>
              <div className="swap-to">
                <div className="overlap-group1-1">
                  <div className="bottom">
                    <div className="logo-10" style={{ backgroundImage: `url(${logo2})` }}></div>
                    <div className="overlap-group-11">
                      <div className="text-2">
                        <div className="sol valign-text-middle">{sol}</div>
                      </div>
                      <Logo2 />
                    </div>
                    <div className="estimated-amount-45 valign-text-middle inter-medium-heavy-metal-18px">
                      {estimatedAmount45}
                    </div>
                  </div>
                  <div className="swap-to-1 valign-text-middle inter-medium-heavy-metal-18px">{swapTo}</div>
                </div>
              </div>
              <p className="exchange-rate-4573-usdc-1-sol valign-text-middle">{exchangeRate4573Usdc1Sol}</p>
            </div>
          </div>
          <NewTabButton
            shareAddress={newTabButtonProps.shareAddress}
            logo2Props={newTabButtonProps.logo2Props}
            tokenIconProps={newTabButtonProps.tokenIconProps}
          />
        </div>
      </div>
    </div>
  );
}

export default Swap;
