import React from "react";
import { Link } from "react-router-dom";
import Base2 from "../Base2";
import Data from "../Data";
import Frame24 from "../Frame24";
import "./Interest2.css";

function Interest2(props) {
  const {
    x71Apy,
    text13,
    price,
    text14,
    text15,
    x1W,
    x1M,
    x1D,
    all,
    money1,
    money2,
    money3,
    money4,
    money5,
    money6,
    money7,
    details,
    usdc,
    dataProps,
    frame241Props,
    frame242Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="interest-3 screen">
        <div className="overlap-group5">
          <Base2 />
          <div className="bg-1"></div>
          <div className="data-8">
            <div className="overlap-group2-5">
              <div className="button-1"></div>
              <div className="frame-113">
                <div className="overlap-group1-9">
                  <Data frame3Props={dataProps.frame3Props} />
                  <div className="x71-apy-1 valign-text-middle inter-medium-heavy-metal-16px">{x71Apy}</div>
                </div>
                <div className="overlap-group-26">
                  <div className="frame-112"></div>
                  <div className="text-13 valign-text-middle inter-medium-heavy-metal-18px">{text13}</div>
                  <div className="price-4 valign-text-middle inter-medium-eagle-14px">{price}</div>
                  <div className="text-14 valign-text-middle">{text14}</div>
                  <div className="text-15 valign-text-middle inter-medium-eagle-14px">{text15}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="time">
            <div className="overlap-group3-4">
              <div className="frame-85">
                <div className="frame-2">
                  <div className="x1-w inter-medium-gray-16px">{x1W}</div>
                </div>
                <div className="frame-2">
                  <div className="x1-m inter-medium-gray-16px">{x1M}</div>
                </div>
                <Frame24>{frame241Props.children}</Frame24>
                <Frame24 className={frame242Props.className}>{frame242Props.children}</Frame24>
              </div>
              <div className="frame-20">
                <div className="x1-d">{x1D}</div>
              </div>
              <div className="all">{all}</div>
            </div>
          </div>
          <div className="chart">
            <div className="overlap-group4-1">
              <div className="frame-119">
                <div className="frame-86 inter-medium-mine-shaft-12px">
                  <div className="money-1 valign-text-middle">{money1}</div>
                  <div className="money valign-text-middle">{money2}</div>
                  <div className="money valign-text-middle">{money3}</div>
                  <div className="money valign-text-middle">{money4}</div>
                  <div className="money valign-text-middle">{money5}</div>
                  <div className="money valign-text-middle">{money6}</div>
                  <div className="money valign-text-middle">{money7}</div>
                </div>
                <img className="vector" src="/img/vector@2x.svg" />
              </div>
              <div className="hover-line-1">
                <div className="details valign-text-middle">{details}</div>
                <div className="overlap-group-27">
                  <img className="line" src="/img/line@2x.svg" />
                  <div className="rectangle-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="back-title-8">
            <Link to="/interest-1" className="align-self-flex-center">
              <img className="back-8" src="/img/back-8@2x.svg" />
            </Link>
            <div className="usdc-4 valign-text-middle inter-semi-bold-heavy-metal-26px">{usdc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest2;
