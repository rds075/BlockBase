import React from "react";
import { Link } from "react-router-dom";
import Base2 from "../Base2";
import Data from "../Data";
import Data2 from "../Data2";
import "./Tokens.css";

function Tokens(props) {
  const {
    receive1,
    place,
    swap1,
    interest,
    price1,
    accountBalance,
    text8,
    tokens,
    surname,
    balance,
    price2,
    text10,
    text9,
    price3,
    text11,
    price4,
    price5,
    text12,
    dataProps,
    data2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tokens-6 screen">
        <div className="overlap-group3-2">
          <Base2 />
          <div className="wallet">
            <div className="overlap-group2-4">
              <div className="button"></div>
              <div className="rectangle-2742"></div>
              <div className="ellipse-9"></div>
              <div className="actions">
                <div className="overlap-group-25">
                  <div className="rectangle-2744"></div>
                  <div className="rectangle-2745"></div>
                  <div className="rectangle-2746"></div>
                  <div className="rectangle-2744-1"></div>
                  <div className="actions-1">
                    <Link to="/receive">
                      <div className="receive">
                        <div className="receive-1 valign-text-middle inter-medium-white-14px-2">{receive1}</div>
                        <img className="receive-2" src="/img/receive@2x.svg" />
                      </div>
                    </Link>
                    <Link to="/send">
                      <div className="link">
                        <img className="send-1" src="/img/send@2x.svg" />
                        <div className="place-1 valign-text-middle inter-medium-white-14px-2">{place}</div>
                      </div>
                    </Link>
                    <Link to="/swap">
                      <div className="link">
                        <div className="swap-5 valign-text-middle inter-medium-white-14px-2">{swap1}</div>
                        <img className="swap-6" src="/img/swap-1@2x.svg" />
                      </div>
                    </Link>
                    <Link to="/interest-1">
                      <div className="link">
                        <div className="interest-2 valign-text-middle inter-medium-white-14px-2">{interest}</div>
                        <img className="percent" src="/img/percent@2x.svg" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="account-balance">
                <div className="overlap-group1-4">
                  <h1 className="price-1 valign-text-middle">{price1}</h1>
                  <div className="account-balance-1 valign-text-middle">{accountBalance}</div>
                  <div className="frame-135">
                    <div className="text-8 valign-text-middle">{text8}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-2">
            <div className="headers inter-semi-bold-eagle-12px">
              <div className="tokens-7 valign-text-middle">{tokens}</div>
              <div className="surname valign-text-middle">{surname}</div>
              <div className="balance valign-text-middle">{balance}</div>
            </div>
            <div className="row-2">
              <Data className={dataProps.className} frame3Props={dataProps.frame3Props} />
              <div className="data-4">
                <div className="overlap-group-23">
                  <div className="price-2 valign-text-middle inter-medium-heavy-metal-18px">{price2}</div>
                  <div className="text-10 valign-text-middle">{text10}</div>
                </div>
              </div>
              <div className="data-5">
                <div className="overlap-group-23">
                  <div className="text-9 valign-text-middle inter-medium-heavy-metal-18px">{text9}</div>
                  <div className="price valign-text-middle inter-medium-eagle-14px">{price3}</div>
                </div>
              </div>
            </div>
            <div className="row-3">
              <div className="data-container">
                <Data2 className={data2Props.className} frame3Props={data2Props.frame3Props} />
                <div className="data-6">
                  <div className="overlap-group-24">
                    <div className="text-11 valign-text-middle inter-medium-heavy-metal-18px">{text11}</div>
                    <div className="price valign-text-middle inter-medium-eagle-14px">{price4}</div>
                  </div>
                </div>
                <div className="data-7">
                  <div className="overlap-group-24">
                    <div className="price-3 valign-text-middle inter-medium-heavy-metal-18px">{price5}</div>
                    <div className="text-12 valign-text-middle">{text12}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
