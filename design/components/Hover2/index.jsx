import React from "react";
import Input from "../Input";
import Add from "../Add";
import "./Hover2.css";

function Hover2(props) {
  const { account1, account2, account3, addAccount, accounts, inputProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hover-1 screen">
        <div className="hover-2">
          <div className="overlap-group1-2 inter-medium-white-16px">
            <img className="rectangle-2725-1" src="/img/rectangle-2725-2@2x.svg" />
            <img className="bump-1" src="/img/bump@2x.svg" />
            <Input searchAccounts={inputProps.searchAccounts} triggerDefaultProps={inputProps.triggerDefaultProps} />
            <div className="account-1 valign-text-middle">{account1}</div>
            <img className="akar-iconscheck" src="/img/akar-icons-check@2x.svg" />
            <div className="account-2 valign-text-middle">{account2}</div>
            <div className="account-3-8 valign-text-middle">{account3}</div>
            <div className="add-account valign-text-middle">{addAccount}</div>
            <Add />
            <div className="back-title-1">
              <div className="accounts valign-text-middle inter-semi-bold-white-20px">{accounts}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hover2;
