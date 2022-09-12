import React from "react";
import "./Frame125.css";

function Frame125(props) {
  const { className } = props;

  return (
    <div className={`frame-125 ${className || ""}`}>
      <div className="overlap-group-1">
        <div className="lorem-ipsum-dolor valign-text-middle keplerstd-medium-black-54px">Thank you very much</div>
        <div className="sed-ut-perspiciatis-1 valign-text-middle sfprodisplay-medium-gray-29px">
          But in order that you may see whence all this born error of those who accuse pleasure and praise pain, I will open the whole matter, 
          and explain the very things which were said by that discoverer of truth and, as it were, the architect of a happy life.
        </div>
      </div>
    </div>
  );
}

export default Frame125;
