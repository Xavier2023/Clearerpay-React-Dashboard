import React from "react";
import "./Transactions.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { TbArrowsExchange } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";

const transactions = [
  {
    type: "Sent",
    currency: "GBP",
    recipient: "Sent to John Doe",
    time: "Today, 13:30",
    amount: "-₦1,000,000",
    icon: <FaArrowUp className="icon red" />,
    button: <BsThreeDotsVertical className="icon" />,
  },
  {
    type: "Exchanged",
    fromTo: "GBP → NGN",
    recipient: "Sent to John Doe",
    time: "Today, 13:30",
    amount: "-₤1,000 / ₦200,000",
    icon: <TbArrowsExchange className="icon orange" />,
    button: <BsThreeDotsVertical className="icon" />,
  },
  {
    type: "Received",
    currency: "GBP → NGN",
    recipient: "Sent to John Doe",
    time: "Today, 13:30",
    amount: "+₦200,000",
    icon: <FaArrowDown className="icon green" />,
    button: <BsThreeDotsVertical className="icon" />,
  },
  {
    type: "Withdrawn",
    currency: "GBP",
    recipient: "Sent to John Doe",
    time: "Today, 13:30",
    amount: "+₦200,000",
    icon: <FaArrowDown className="icon gray" />,
    button: <BsThreeDotsVertical className="icon" />,
  },
];

const Transactions = () => (
  <div className="transactions">
    <div className="transaction-header">
      <h3 className="transactions-title">Recent Transactions</h3>
      <p>See all</p>
    </div>
    <div className="table-container">
      <table className="transactions-table no-head">
        <tbody>
          {transactions.map((tx, idx) => (
            <tr key={idx}>
              <td>
                <span className="type-icon">{tx.icon}</span>
                <span className="tx-type">
                  {tx.type} {tx.currency || tx.fromTo}
                </span>
              </td>
              <td>
                <span className="recipient">{tx.recipient}</span> . <span className="time">{tx.time}</span>
              </td>
              <td
                className={`amount ${
                  tx.amount.startsWith("-") ? "negative" : "positive"
                }`}
              >
                {tx.amount}
              </td>
              <td>{tx.button}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Transactions;
