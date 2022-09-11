import React from "react";
import "./Frame125.css";

function Frame125(props) {
  const { className } = props;

  return (
    <div className={`frame-125 ${className || ""}`}>
      <div className="overlap-group-1">
        <div className="lorem-ipsum-dolor valign-text-middle keplerstd-medium-black-54px">Lorem ipsum dolor</div>
        <div className="sed-ut-perspiciatis-1 valign-text-middle sfprodisplay-medium-gray-29px">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>
    </div>
  );
}

export default Frame125;
