import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./components/Splash";
import Hover from "./components/Hover";
import NFTs from "./components/NFTs";
import Swap from "./components/Swap";
import Menu from "./components/Menu";
import Transactions from "./components/Transactions";
import Hover2 from "./components/Hover2";
import HoverLine from "./components/HoverLine";
import Send from "./components/Send";
import Interest from "./components/Interest";
import Tokens from "./components/Tokens";
import Hover3 from "./components/Hover3";
import Hover4 from "./components/Hover4";
import Hover5 from "./components/Hover5";
import Receive from "./components/Receive";
import Interest2 from "./components/Interest2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|splash)">
          <Splash blockBase01="/img/block-base-01@2x.png" blockBaseIcon01="/img/block-base-icon-01@2x.png" />
        </Route>
        <Route path="/hover-4">
          <Hover
            frame1311Props={hoverData.frame1311Props}
            frame1312Props={hoverData.frame1312Props}
            frame1313Props={hoverData.frame1313Props}
          />
        </Route>
        <Route path="/nfts">
          <NFTs baseProps={nFTsData.baseProps} nFTProps={nFTsData.nFTProps} />
        </Route>
        <Route path="/swap">
          <Swap {...swapData} />
        </Route>
        <Route path="/menu">
          <Menu
            viewAccountOnBlockExplorer="View account on block explorer"
            addressBook="Address Book"
            connectedApps="Connected Apps"
            changePassword="Change Password"
          />
        </Route>
        <Route path="/transactions">
          <Transactions {...transactionsData} />
        </Route>
        <Route path="/hover">
          <Hover2
            account1="Account 1"
            account2="Account 2"
            account3="Account 3"
            addAccount="Add account"
            accounts="Accounts"
            inputProps={hover2Data.inputProps}
          />
        </Route>
        <Route path="/hover-line">
          <HoverLine />
        </Route>
        <Route path="/send">
          <Send place="Send" input2Props={sendData.input2Props} />
        </Route>
        <Route path="/interest-1">
          <Interest
            interest="Interest"
            x71Apy1="7.1% APY"
            viewPerformance1="View performance"
            x71Apy2="7.1% APY"
            viewPerformance2="View performance"
            dataProps={interestData.dataProps}
            data2Props={interestData.data2Props}
          />
        </Route>
        <Route path="/tokens">
          <Tokens {...tokensData} />
        </Route>
        <Route path="/hover2">
          <Hover3 {...hover3Data} />
        </Route>
        <Route path="/hover3">
          <Hover4
            mainnet="Mainnet"
            testnetGoerli="Testnet - Goerli"
            testnetRopsten="Testnet - Ropsten"
            addNetwrok="Add netwrok"
            inputProps={hover4Data.inputProps}
            backTitle2Props={hover4Data.backTitle2Props}
          />
        </Route>
        <Route path="/hover4">
          <Hover5
            rpc1="RPC 1"
            rpc2="RPC 2"
            addRpc="Add RPC"
            inputProps={hover5Data.inputProps}
            addProps={hover5Data.addProps}
            backTitle2Props={hover5Data.backTitle2Props}
          />
        </Route>
        <Route path="/receive">
          <Receive
            receive="Receive"
            account3="Account 3"
            x0X92A2039O94M3475B21="0x92A 2039O 94M34 75b21"
            newTabButtonProps={receiveData.newTabButtonProps}
          />
        </Route>
        <Route path="/interest">
          <Interest2 {...interest2Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame1311Data = {
    blockchain: "Blockchain",
    solana: "Solana",
};

const frame1312Data = {
    blockchain: "Network",
    solana: "Mainnet - Beta",
    className: "frame-132",
};

const frame1313Data = {
    blockchain: "RPC",
    solana: "api.serum...",
    className: "frame-133",
};

const hoverData = {
    frame1311Props: frame1311Data,
    frame1312Props: frame1312Data,
    frame1313Props: frame1313Data,
};

const newTabData = {
    nfts: "NFTs",
};

const baseData = {
    newTabProps: newTabData,
};

const x11Data = {
    x1: "/img/1@2x.png",
    apocalpyse: "Apocalpyse...",
    number: "2",
};

const x12Data = {
    number: 1,
    x1: "/img/rectangle-2737@2x.png",
    apocalpyse: "Moonly ...",
    className: "x3",
};

const x13Data = {
    number: 1,
    x1: "/img/rectangle-2736@2x.png",
    apocalpyse: "Moonly ...",
    className: "x2-1",
};

const nFTData = {
    x11Props: x11Data,
    x12Props: x12Data,
    x13Props: x13Data,
};

const nFTsData = {
    baseProps: baseData,
    nFTProps: nFTData,
};

const logo23Data = {
    className: "logo-12",
};

const tokenIcon3Data = {
    className: "logo-14",
};

const newTabButton1Data = {
    shareAddress: "Swap",
    logo2Props: logo23Data,
    tokenIconProps: tokenIcon3Data,
};

const swapData = {
    swap1: "Swap",
    balance562361: "Balance: 5,623.61",
    swapFrom: "Swap from",
    logo1: "/img/image-24-2@2x.png",
    usdc: "USDC",
    number: "200",
    logo2: "/img/image-25-2@2x.png",
    sol: "SOL",
    estimatedAmount45: "Estimated amount: 4.5",
    swapTo: "Swap to",
    exchangeRate4573Usdc1Sol: "Exchange rate: 45.73 USDC = 1 SOL",
    newTabButtonProps: newTabButton1Data,
};

const newTab3Data = {
    transactions: "Transactions",
};

const base3Data = {
    newTab3Props: newTab3Data,
};

const transactionsData = {
    spanText1: <React.Fragment>Swapped<br /></React.Fragment>,
    spanText2: "0x3EO...FC32",
    text1: "5/22",
    x323PEst: "3:23p EST",
    image25: "/img/image-25-4@2x.png",
    image24: "/img/image-24-2@2x.png",
    x43423Usdc: "-434.23 USDC",
    x1433Sol: "+14.33 SOL",
    spanText3: <React.Fragment>Sent<br /></React.Fragment>,
    spanText4: "0x3EO...FC32",
    logo1: "/img/image-24-2@2x.png",
    text3: "5/22",
    x313PEst1: "3:13p EST",
    x139312Usdc: "-1,393.12 USDC",
    text2: "-$1,393.12",
    spanText5: <React.Fragment>Received<br /></React.Fragment>,
    spanText6: "0x3EO...FC32",
    logo2: "/img/image-24-2@2x.png",
    text5: "5/22",
    x313PEst2: "3:13p EST",
    x249149Usdc: "+2,491.49 USDC",
    text4: "+$2,491.49",
    spanText7: <React.Fragment>Harvest Interest<br /></React.Fragment>,
    spanText8: "0x3EO...FC32",
    logo3: "/img/image-24-2@2x.png",
    text7: "5/22",
    x313PEst3: "3:13p EST",
    x325944Usdc: "+3259.44 USDC",
    text6: "+$3259.44",
    base3Props: base3Data,
};

const triggerDefault4Data = {
    className: "trigger-default-3",
};

const input1Data = {
    searchAccounts: "Search accounts",
    triggerDefaultProps: triggerDefault4Data,
};

const hover2Data = {
    inputProps: input1Data,
};

const triggerDefault6Data = {
    className: "trigger-default-5",
};

const input2Data = {
    searchPublicAddressOrEns: "Search public address or ENS",
    triggerDefaultProps: triggerDefault6Data,
};

const sendData = {
    input2Props: input2Data,
};

const frame31Data = {
    children: "USDC",
};

const data1Data = {
    frame3Props: frame31Data,
};

const frame32Data = {
    children: "SOL",
};

const data21Data = {
    frame3Props: frame32Data,
};

const interestData = {
    interest: "Interest",
    x71Apy1: "7.1% APY",
    viewPerformance1: "View performance",
    x71Apy2: "7.1% APY",
    viewPerformance2: "View performance",
    dataProps: data1Data,
    data2Props: data21Data,
};

const frame33Data = {
    children: "USDC",
};

const data3Data = {
    className: "data-1",
    frame3Props: frame33Data,
};

const frame34Data = {
    children: "SOL",
};

const data22Data = {
    className: "data-3",
    frame3Props: frame34Data,
};

const tokensData = {
    receive1: "Receive",
    place: "Send",
    swap1: "Swap",
    interest: "Interest",
    price1: "$7,498.15",
    accountBalance: "Account Balance",
    text8: "+$14.25  (+0.19%)",
    tokens: "TOKENS",
    surname: "PRICE",
    balance: "BALANCE",
    price2: "$1",
    text10: "+0.01%",
    text9: "5,623.61",
    price3: "$5,623.61",
    text11: "38.46",
    price4: "$1874.53",
    price5: "$48.73",
    text12: "-0.2%",
    dataProps: data3Data,
    data2Props: data22Data,
};

const triggerDefault9Data = {
    className: "trigger-default-8",
};

const input3Data = {
    searchAccounts: "Search blockchains",
    triggerDefaultProps: triggerDefault9Data,
};

const add2Data = {
    className: "add-2",
};

const backTitle21Data = {
    blockchain: "Blockchain",
};

const hover3Data = {
    solana: "Solana",
    ethereum: "Ethereum",
    addBlockchain: "Add blockchain",
    logo: "/img/image-24-15@2x.png",
    image25: "/img/image-25-10@2x.png",
    inputProps: input3Data,
    addProps: add2Data,
    backTitle2Props: backTitle21Data,
};

const triggerDefault10Data = {
    className: "trigger-default-9",
};

const input4Data = {
    searchAccounts: "Search networks",
    triggerDefaultProps: triggerDefault10Data,
};

const backTitle22Data = {
    blockchain: "Network",
};

const hover4Data = {
    inputProps: input4Data,
    backTitle2Props: backTitle22Data,
};

const triggerDefault11Data = {
    className: "trigger-default-10",
};

const input5Data = {
    searchAccounts: "Search networks",
    triggerDefaultProps: triggerDefault11Data,
};

const add4Data = {
    className: "add-6",
};

const backTitle23Data = {
    blockchain: "RPC",
};

const hover5Data = {
    inputProps: input5Data,
    addProps: add4Data,
    backTitle2Props: backTitle23Data,
};

const logo24Data = {
    className: "logo-13",
};

const tokenIcon5Data = {
    className: "logo-15",
};

const newTabButton2Data = {
    shareAddress: "Share address",
    className: "new-tab-button-1",
    logo2Props: logo24Data,
    tokenIconProps: tokenIcon5Data,
};

const receiveData = {
    newTabButtonProps: newTabButton2Data,
};

const frame35Data = {
    children: "USDC",
};

const data4Data = {
    frame3Props: frame35Data,
};

const frame241Data = {
    children: "1Y",
};

const frame242Data = {
    children: "All",
    className: "frame-2-1",
};

const interest2Data = {
    x71Apy: "7.1% APY",
    text13: "5,623.61",
    price: "$5,623.61",
    text14: "+7.1%",
    text15: "+$702.59",
    x1W: "1W",
    x1M: "1M",
    x1D: "1D",
    all: "All",
    money1: "6k",
    money2: "5k",
    money3: "4k",
    money4: "3k",
    money5: "2k",
    money6: "1k",
    money7: "0",
    details: <React.Fragment>$168,293.42<br />11:12 am</React.Fragment>,
    usdc: "USDC",
    dataProps: data4Data,
    frame241Props: frame241Data,
    frame242Props: frame242Data,
};

