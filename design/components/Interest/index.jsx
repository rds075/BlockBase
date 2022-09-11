import React from "react";
import { Link } from "react-router-dom";
import Base2 from "../Base2";
import Data from "../Data";
import Data2 from "../Data2";
import "./Interest.css";

function Interest(props) {
  const { interest, x71Apy1, viewPerformance1, x71Apy2, viewPerformance2, dataProps, data2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="interest-1 screen">
        <div className="overlap-group2-3">
          <Base2 />
          <div className="back-title-3">
            <Link to="/tokens" className="align-self-flex-center">
              <img className="back-3" src="/img/back-3@2x.svg" />
            </Link>
            <div className="interest valign-text-middle inter-semi-bold-heavy-metal-26px">{interest}</div>
          </div>
          <div className="table-1">
            <div className="row">
              <div className="overlap-group-22">
                <Data frame3Props={dataProps.frame3Props} />
                <div className="x71-apy valign-text-middle inter-medium-heavy-metal-16px">{x71Apy1}</div>
              </div>
              <Link to="/interest">
                <div className="view-performance valign-text-middle inter-medium-apple-16px">{viewPerformance1}</div>
              </Link>
            </div>
            <div className="row-1">
              <div className="overlap-group-22">
                <Data2 frame3Props={data2Props.frame3Props} />
                <div className="x71-apy valign-text-middle inter-medium-heavy-metal-16px">{x71Apy2}</div>
              </div>
              <Link to="/interest">
                <div className="view-performance valign-text-middle inter-medium-apple-16px">{viewPerformance2}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest;
