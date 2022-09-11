import React from "react";
import Base from "../Base";
import NFT from "../NFT";
import "./NFTs.css";

function NFTs(props) {
  const { baseProps, nFTProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="nfts screen">
        <div className="overlap-group1">
          <Base newTabProps={baseProps.newTabProps} />
          <NFT x11Props={nFTProps.x11Props} x12Props={nFTProps.x12Props} x13Props={nFTProps.x13Props} />
        </div>
      </div>
    </div>
  );
}

export default NFTs;
