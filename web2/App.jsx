import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import BlockBaseIcon202 from "./components/BlockBaseIcon202";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/landing-page">
          <LandingPage {...landingPageData} />
        </Route>
        <Route path="/:path(|block-base-icon-2-02)">
          <BlockBaseIcon202 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const tabData = {
    children: "Login",
};

const tokenIcon2Data = {
    className: "logo-3",
};

const frame1231Data = {
    signUp: "Sign up",
    tokenIconProps: tokenIcon2Data,
};

const tokenIcon4Data = {
    className: "logo-3",
};

const frame1232Data = {
    signUp: "Join",
    className: "frame-123-1",
    tokenIconProps: tokenIcon4Data,
};

const logo3Data = {
    className: "logo-1",
};

const tokenIcon6Data = {
    className: "logo-4",
};

const frame128Data = {
    x3DFluencyBitcoinMoneyBag1: "/img/3d-fluency-bitcoin-money-bag-1@2x.png",
};

const frame1252Data = {
    className: "frame-125-1",
};

const frame1253Data = {
    className: "frame-125-2",
};

const frame1282Data = {
    frame125Props: frame1253Data,
};

const frame1331Data = {
    learnMore: "Learn more",
    documentation: "Documentation",
    termsOfService: "Terms of Service",
};

const frame1332Data = {
    learnMore: "Community",
    documentation: "Discord",
    termsOfService: "Twitter",
    className: "frame-134",
};

const landingPageData = {
    blockBase01: "/img/block-base-01@2x.png",
    nemoEnimIpsamVolu: "Nemo enim ipsam voluptatem quia voluptas",
    sedUtPerspiciatis: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    iphone_Mockup1: "/img/iphone-mockup-1@1x.png",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    learnMore: "Learn more",
    frame131: "/img/3d-fluency-coin-wallet-1@2x.png",
    x3DFluencySandClock11: "/img/3d-fluency-sand-clock-1-1@2x.png",
    blockBase03: "/img/block-base-03@1x.png",
    tabProps: tabData,
    frame1231Props: frame1231Data,
    frame1232Props: frame1232Data,
    logoProps: logo3Data,
    tokenIconProps: tokenIcon6Data,
    frame128Props: frame128Data,
    frame125Props: frame1252Data,
    frame1282Props: frame1282Data,
    frame1331Props: frame1331Data,
    frame1332Props: frame1332Data,
};

