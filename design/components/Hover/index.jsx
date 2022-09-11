import React from "react";
import Frame131 from "../Frame131";
import "./Hover.css";

function Hover(props) {
  const { frame1311Props, frame1312Props, frame1313Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hover-4 screen">
        <div className="hover">
          <div className="overlap-group3">
            <img className="rectangle-2725" src="/img/rectangle-2725@2x.svg" />
            <img className="bump" src="/img/bump@2x.svg" />
            <Frame131 blockchain={frame1311Props.blockchain} solana={frame1311Props.solana} />
            <Frame131
              blockchain={frame1312Props.blockchain}
              solana={frame1312Props.solana}
              className={frame1312Props.className}
            />
            <Frame131
              blockchain={frame1313Props.blockchain}
              solana={frame1313Props.solana}
              className={frame1313Props.className}
            />
            <img className="outline-up" src="/img/outline-up@2x.svg" />
            <img className="outline-up-1" src="/img/outline-up@2x.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hover;
