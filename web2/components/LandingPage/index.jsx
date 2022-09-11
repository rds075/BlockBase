import React from "react";
import Tab from "../Tab";
import Frame123 from "../Frame123";
import Logo from "../Logo";
import TokenIcon from "../TokenIcon";
import Frame128 from "../Frame128";
import Frame125 from "../Frame125";
import Frame1282 from "../Frame1282";
import Frame133 from "../Frame133";
import "./LandingPage.css";

function LandingPage(props) {
  const {
    blockBase01,
    nemoEnimIpsamVolu,
    sedUtPerspiciatis,
    iphone_Mockup1,
    loremIpsumDolorSi,
    learnMore,
    frame131,
    x3DFluencySandClock11,
    blockBase03,
    tabProps,
    frame1231Props,
    frame1232Props,
    logoProps,
    tokenIconProps,
    frame128Props,
    frame125Props,
    frame1282Props,
    frame1331Props,
    frame1332Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <div className="overlap-group6">
          <div className="overlap-group5">
            <div className="header">
              <img className="block-base-01" src={blockBase01} />
              <div className="overlap-group1">
                <Tab>{tabProps.children}</Tab>
                <Frame123 signUp={frame1231Props.signUp} tokenIconProps={frame1231Props.tokenIconProps} />
              </div>
            </div>
            <div className="rectangle-1"></div>
            <div className="frame-135">
              <div className="nemo-enim-ipsam-volu valign-text-middle">{nemoEnimIpsamVolu}</div>
              <div className="sed-ut-perspiciatis valign-text-middle">{sedUtPerspiciatis}</div>
            </div>
            <img className="iphone_mockup-1" src={iphone_Mockup1} />
          </div>
          <div className="frame-124">
            <div className="overlap-group2">
              <h1 className="lorem-ipsum-dolor-si valign-text-middle">{loremIpsumDolorSi}</h1>
              <Frame123
                signUp={frame1232Props.signUp}
                className={frame1232Props.className}
                tokenIconProps={frame1232Props.tokenIconProps}
              />
              <div className="button">
                <div className="overlap-group1-1">
                  <Logo className={logoProps.className} />
                  <TokenIcon className={tokenIconProps.className} />
                  <div className="learn-more valign-text-middle inter-semi-bold-heavy-metal-24px">{learnMore}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Frame128 x3DFluencyBitcoinMoneyBag1={frame128Props.x3DFluencyBitcoinMoneyBag1} />
        <div className="frame-129">
          <Frame125 className={frame125Props.className} />
          <div className="frame-131" style={{ backgroundImage: `url(${frame131})` }}></div>
        </div>
        <div className="frame-132">
          <div className="overlap-group3">
            <Frame1282 frame125Props={frame1282Props.frame125Props} />
            <img className="x3d-fluency-sand-clock-1-1" src={x3DFluencySandClock11} />
          </div>
        </div>
        <div className="overlap-group4">
          <div className="rectangle-2"></div>
          <img className="block-base-03" src={blockBase03} />
          <Frame133
            learnMore={frame1331Props.learnMore}
            documentation={frame1331Props.documentation}
            termsOfService={frame1331Props.termsOfService}
          />
          <Frame133
            learnMore={frame1332Props.learnMore}
            documentation={frame1332Props.documentation}
            termsOfService={frame1332Props.termsOfService}
            className={frame1332Props.className}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
