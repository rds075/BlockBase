import React from "react";
import Base3 from "../Base3";
import "./Transactions.css";

function Transactions(props) {
  const {
    spanText1,
    spanText2,
    text1,
    x323PEst,
    image25,
    image24,
    x43423Usdc,
    x1433Sol,
    spanText3,
    spanText4,
    logo1,
    text3,
    x313PEst1,
    x139312Usdc,
    text2,
    spanText5,
    spanText6,
    logo2,
    text5,
    x313PEst2,
    x249149Usdc,
    text4,
    spanText7,
    spanText8,
    logo3,
    text7,
    x313PEst3,
    x325944Usdc,
    text6,
    base3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="transactions screen">
        <div className="overlap-group7">
          <Base3 newTab3Props={base3Props.newTab3Props} />
          <div className="frame-140">
            <div className="frame-120">
              <div className="x-0x3-eofc32 valign-text-middle inter-medium-white-18px">
                <span>
                  <span className="inter-medium-heavy-metal-18px">{spanText1}</span>
                  <span className="span1-8 inter-medium-gray-14px">{spanText2}</span>
                </span>
              </div>
              <div className="overlap-group3-1">
                <div className="frame-130-1">
                  <div className="overlap-group-13">
                    <div className="text-3 valign-text-middle inter-medium-heavy-metal-18px">{text1}</div>
                    <div className="x3p-est valign-text-middle inter-medium-gray-14px">{x323PEst}</div>
                  </div>
                </div>
                <div className="table">
                  <div className="overlap-group2-1">
                    <div className="logo-17"></div>
                    <div className="frame-3"></div>
                    <img className="image-25-8" src={image25} />
                    <img className="image-24" src={image24} />
                  </div>
                </div>
              </div>
              <div className="frame-118-1">
                <div className="frame-125">
                  <div className="overlap-group-15">
                    <div className="x43423-usdc valign-text-middle inter-medium-heavy-metal-16px">{x43423Usdc}</div>
                    <div className="x1433-sol valign-text-middle inter-medium-heavy-metal-14px">{x1433Sol}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-11">
              <div className="x-0x3-eofc32 valign-text-middle inter-medium-white-18px">
                <span>
                  <span className="inter-medium-heavy-metal-18px">{spanText3}</span>
                  <span className="span1-8 inter-medium-gray-14px">{spanText4}</span>
                </span>
              </div>
              <div className="overlap-group-14">
                <div className="logo-16" style={{ backgroundImage: `url(${logo1})` }}></div>
                <div className="frame-130">
                  <div className="overlap-group-13">
                    <div className="text-3 valign-text-middle inter-medium-heavy-metal-18px">{text3}</div>
                    <div className="x3p-est valign-text-middle inter-medium-dove-gray-14px">{x313PEst1}</div>
                  </div>
                </div>
              </div>
              <div className="frame-118">
                <div className="overlap-group-16">
                  <div className="x139312-usdc valign-text-middle inter-medium-heavy-metal-16px">{x139312Usdc}</div>
                  <div className="text-2-1 valign-text-middle inter-medium-dove-gray-14px">{text2}</div>
                </div>
              </div>
            </div>
            <div className="frame-11">
              <div className="x-0x3-eofc32 valign-text-middle inter-medium-white-18px">
                <span>
                  <span className="inter-medium-heavy-metal-18px">{spanText5}</span>
                  <span className="span1-8 inter-medium-gray-14px">{spanText6}</span>
                </span>
              </div>
              <div className="overlap-group-14">
                <div className="logo-16" style={{ backgroundImage: `url(${logo2})` }}></div>
                <div className="frame-130">
                  <div className="overlap-group-13">
                    <div className="text-3 valign-text-middle inter-medium-heavy-metal-18px">{text5}</div>
                    <div className="x3p-est valign-text-middle inter-medium-dove-gray-14px">{x313PEst2}</div>
                  </div>
                </div>
              </div>
              <div className="frame-118">
                <div className="overlap-group-17">
                  <div className="x249149-usdc valign-text-middle inter-medium-heavy-metal-16px">{x249149Usdc}</div>
                  <div className="text-4 valign-text-middle inter-medium-dove-gray-14px">{text4}</div>
                </div>
              </div>
            </div>
            <div className="frame-11">
              <div className="harvest-interest-0x3-eofc32 valign-text-middle inter-medium-white-18px">
                <span>
                  <span className="span0-9 inter-medium-heavy-metal-18px">{spanText7}</span>
                  <span className="span1-8 inter-medium-gray-14px">{spanText8}</span>
                </span>
              </div>
              <div className="overlap-group-14">
                <div className="logo-16" style={{ backgroundImage: `url(${logo3})` }}></div>
                <div className="frame-130">
                  <div className="overlap-group-13">
                    <div className="text-3 valign-text-middle inter-medium-heavy-metal-18px">{text7}</div>
                    <div className="x3p-est valign-text-middle inter-medium-dove-gray-14px">{x313PEst3}</div>
                  </div>
                </div>
              </div>
              <div className="frame-118">
                <div className="overlap-group-13">
                  <div className="x325944-usdc valign-text-middle inter-medium-heavy-metal-16px">{x325944Usdc}</div>
                  <div className="text-6 valign-text-middle">{text6}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
