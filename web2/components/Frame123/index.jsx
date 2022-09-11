import React from "react";
import Logo from "../Logo";
import TokenIcon from "../TokenIcon";
import "./Frame123.css";

function Frame123(props) {
  const { signUp, className, tokenIconProps } = props;

  return (
    <div className={`frame-123 ${className || ""}`}>
      <div className="bottom">
        <div className="overlap-group">
          <Logo />
          <TokenIcon className={tokenIconProps.className} />
          <div className="sign-up valign-text-middle inter-semi-bold-heavy-metal-24px">{signUp}</div>
        </div>
      </div>
    </div>
  );
}

export default Frame123;
