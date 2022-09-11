import React from "react";
import Frame125 from "../Frame125";
import "./Frame128.css";

function Frame128(props) {
  const { x3DFluencyBitcoinMoneyBag1 } = props;

  return (
    <div className="frame-128">
      <img className="x3d-fluency-bitcoin-money-bag-1" src={x3DFluencyBitcoinMoneyBag1} />
      <Frame125 />
    </div>
  );
}

export default Frame128;
