import React from "react";
import Input from "../Input";
import Add from "../Add";
import BackTitle2 from "../BackTitle2";
import "./Hover5.css";

function Hover5(props) {
  const { rpc1, rpc2, addRpc, inputProps, addProps, backTitle2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hover4 screen">
        <div className="overlap-group1-7 inter-medium-white-16px">
          <img className="rectangle-2725-4" src="/img/rectangle-2725-4@2x.svg" />
          <img className="bump-4" src="/img/bump@2x.svg" />
          <Input searchAccounts={inputProps.searchAccounts} triggerDefaultProps={inputProps.triggerDefaultProps} />
          <div className="rpc-1 valign-text-middle">{rpc1}</div>
          <img className="akar-iconscheck-3" src="/img/akar-icons-check@2x.svg" />
          <div className="rpc-2 valign-text-middle">{rpc2}</div>
          <div className="add-rpc valign-text-middle">{addRpc}</div>
          <Add className={addProps.className} />
          <BackTitle2 blockchain={backTitle2Props.blockchain} />
        </div>
      </div>
    </div>
  );
}

export default Hover5;
