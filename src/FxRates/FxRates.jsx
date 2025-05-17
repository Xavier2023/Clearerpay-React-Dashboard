import React from "react";
import "./FxRates.css";
import { TbArrowsExchange2 } from "react-icons/tb";

const fxData = [
  { from: "NGN", to: "USD", rate: "₦1,640", rateForeign: "$1" },
  { from: "NGN", to: "GBP", rate: "₦1,640", rateForeign: "£1" },
  { from: "NGN", to: "EUR", rate: "₦1,640", rateForeign: "€1" },
  { from: "NGN", to: "YEN", rate: "₦1,640", rateForeign: "¥1" },
  { from: "NGN", to: "BTC", rate: "₦1,640", rateForeign: "₿1" },
  { from: "NGN", to: "RUP", rate: "₦1,640", rateForeign: "₿1" },
];

const FXRates = () => (
  <div className="fx-rates">
    <h3 className="fx-title">
      FX Rates
    </h3>
    <div className="fx-list">
      {fxData.map(({ from, to, rate, rateForeign }) => (
        <div key={to} className="fx-item">
          <div className="domestic-currency">
            <p>{from}</p>
            <p>
              <strong>{rate}</strong>
            </p>
          </div>
          <TbArrowsExchange2 />
          <div className="foreign-currency">
            <p>{to}</p>
            <p>
              <strong>{rateForeign}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FXRates;
