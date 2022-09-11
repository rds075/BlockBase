import React from "react";
import Logo2 from "../Logo2";
import TokenIcon from "../TokenIcon";
import "./NewTabButton.css";

function NewTabButton(props) {
  const { shareAddress, className, logo2Props, tokenIconProps } = props;

  return (
    <div className={`new-tab-button ${className || ""}`}>
      <div className="logo-container">
        <Logo2 className={logo2Props.className} />
        <TokenIcon className={tokenIconProps.className} />
      </div>
      <div className="share-address valign-text-middle inter-semi-bold-heavy-metal-24px">{shareAddress}</div>
    </div>
  );
}

export default NewTabButton;
