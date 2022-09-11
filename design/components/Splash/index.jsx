import React from "react";
import { Link } from "react-router-dom";
import "./Splash.css";

function Splash(props) {
  const { blockBase01, blockBaseIcon01 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="splash screen">
        <div className="block-base-container">
          <Link to="/tokens">
            <img className="block-base-01" src={blockBase01} />
            <img className="block-base-icon-01" src={blockBaseIcon01} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Splash;
