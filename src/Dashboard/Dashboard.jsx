import React from "react";

import WelcomeBanner from "../WelcomeBanner/WelcomeBanner";
import BalanceCard from "../BalanceCard/BalanceCard";

import './Dashboard.css'
import MerchantsCard from "../MerchantsCard/MerchantsCard";
import FXRates from "../FxRates/FxRates";
import Transactions from "../Transactions/Transactions";

function Dashboard() {
  return (
    <div className='dashboard'>
      <WelcomeBanner />
      <div className="section-1">
        <BalanceCard />
        <MerchantsCard />
      </div>
      <FXRates />
      <Transactions />
      {/* Other dashboard components go here */}
    </div>
  );
}

export default Dashboard;
