import React from "react";
import "./Menu.css";

function Menu(props) {
  const { viewAccountOnBlockExplorer, addressBook, connectedApps, changePassword } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-8 screen">
        <div className="menu-9">
          <img className="icon-close" src="/img/close@2x.svg" />
          <div className="frame-124">
            <div className="overlap-group-12 inter-medium-white-24px">
              <div className="view-account-on-block-explorer valign-text-middle">{viewAccountOnBlockExplorer}</div>
              <div className="address-book valign-text-middle">{addressBook}</div>
              <div className="connected-apps valign-text-middle">{connectedApps}</div>
              <div className="change-password valign-text-middle">{changePassword}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
