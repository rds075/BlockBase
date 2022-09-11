import React from "react";
import Frame125 from "../Frame125";
import "./Frame1282.css";

function Frame1282(props) {
  const { frame125Props } = props;

  return (
    <div className="frame-130">
      <Frame125 className={frame125Props.className} />
    </div>
  );
}

export default Frame1282;
