import React from "react";
import X1 from "../X1";
import "./NFT.css";

function NFT(props) {
  const { x11Props, x12Props, x13Props } = props;

  return (
    <div className="nft">
      <div className="flex-col-1">
        <X1 x1={x11Props.x1} apocalpyse={x11Props.apocalpyse} number={x11Props.number} />
        <X1 number={x12Props.number} x1={x12Props.x1} apocalpyse={x12Props.apocalpyse} className={x12Props.className} />
      </div>
      <X1 number={x13Props.number} x1={x13Props.x1} apocalpyse={x13Props.apocalpyse} className={x13Props.className} />
    </div>
  );
}

export default NFT;
