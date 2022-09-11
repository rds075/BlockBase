import React from "react";
import Input from "../Input";
import Add from "../Add";
import BackTitle2 from "../BackTitle2";
import "./Hover3.css";

function Hover3(props) {
  const { solana, ethereum, addBlockchain, logo, image25, inputProps, addProps, backTitle2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hover2 screen">
        <div className="overlap-group1-5 inter-medium-white-16px">
          <img className="rectangle-2725-2" src="/img/rectangle-2725-2@2x.svg" />
          <img className="bump-2" src="/img/bump@2x.svg" />
          <Input searchAccounts={inputProps.searchAccounts} triggerDefaultProps={inputProps.triggerDefaultProps} />
          <div className="solana-1 valign-text-middle">{solana}</div>
          <div className="ethereum valign-text-middle">{ethereum}</div>
          <div className="add-blockchain valign-text-middle">{addBlockchain}</div>
          <div className="logo-23" style={{ backgroundImage: `url(${logo})` }}>
            <img className="image-25-11" src={image25} />
          </div>
          <div className="logo-24"></div>
          <img className="thick-check" src="/img/thick-check@2x.svg" />
          <Add className={addProps.className} />
          <BackTitle2 blockchain={backTitle2Props.blockchain} />
          <div className="ellipse-10"></div>
          <img className="logosethereum" src="/img/logos-ethereum@2x.svg" />
          <img className="akar-iconscheck-1" src="/img/akar-icons-check@2x.svg" />
        </div>
      </div>
    </div>
  );
}

export default Hover3;
