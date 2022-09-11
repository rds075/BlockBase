import React from "react";
import Input from "../Input";
import Add from "../Add";
import BackTitle2 from "../BackTitle2";
import "./Hover4.css";

function Hover4(props) {
  const { mainnet, testnetGoerli, testnetRopsten, addNetwrok, inputProps, backTitle2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hover3 screen">
        <div className="overlap-group1-6 inter-medium-white-16px">
          <img className="rectangle-2725-3" src="/img/rectangle-2725-2@2x.svg" />
          <img className="bump-3" src="/img/bump@2x.svg" />
          <Input searchAccounts={inputProps.searchAccounts} triggerDefaultProps={inputProps.triggerDefaultProps} />
          <div className="mainnet valign-text-middle">{mainnet}</div>
          <img className="akar-iconscheck-2" src="/img/akar-icons-check@2x.svg" />
          <div className="testnet-goerli valign-text-middle">{testnetGoerli}</div>
          <div className="testnet-ropsten valign-text-middle">{testnetRopsten}</div>
          <div className="add-netwrok valign-text-middle">{addNetwrok}</div>
          <Add />
          <BackTitle2 blockchain={backTitle2Props.blockchain} />
        </div>
      </div>
    </div>
  );
}

export default Hover4;
