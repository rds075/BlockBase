import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import TriggerDefault from "../TriggerDefault";
import "./NewHeader.css";

function NewHeader() {
  return (
    <div className="new-header">
      <a href="javascript:ShowOverlay('hover-4', 'animate-appear');" className="align-self-flex-end">
        <div className="eth-mainnet">
          <Logo />
          <div className="solana-mainnet valign-text-middle inter-medium-white-14px">
            <span>
              <span className="inter-medium-heavy-metal-14px">
                Solana
                <br />
              </span>
              <span className="span1 inter-medium-eagle-11px">Mainnet</span>
            </span>
          </div>
        </div>
      </a>
      <a href="javascript:ShowOverlay('hover', 'animate-appear');">
        <div className="account-3">
          <div className="overlap-group-1">
            <TriggerDefault />
            <div className="account-3-0x92-a75b21 valign-text-middle inter-medium-white-14px">
              <span>
                <span className="inter-medium-heavy-metal-14px">
                  Account 3<br />
                </span>
                <span className="span1 inter-medium-eagle-11px">0x92A...75b21</span>
              </span>
            </div>
          </div>
        </div>
      </a>
      <img className="copy" src="/img/copy@2x.svg" />
      <a href="javascript:ShowOverlay('menu', 'animate-appear');">
        <img className="menu" src="/img/menu-1@2x.svg" />
      </a>
    </div>
  );
}

export default NewHeader;
