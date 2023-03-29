import React, { useState } from "react";
import "../../css/receipts.css";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const ReceiptsSection = () => {
  const receiptsData = [
    { date: "5/12/23", orderNumber: "1344715351987108-1-32", price: "$18.05" },
    { date: "4/20/23", orderNumber: "1453715351987108-1-33", price: "$32.10" },
    { date: "4/18/23", orderNumber: "1239715351987108-1-34", price: "$21.50" },
    { date: "3/25/23", orderNumber: "1344754351987108-1-35", price: "$17.05" },
    { date: "3/12/23", orderNumber: "1344712341987108-1-36", price: "$23.95" },
    { date: "2/28/23", orderNumber: "1344715356754108-1-37", price: "$12.50" },
    { date: "2/15/23", orderNumber: "1344715351987654-1-38", price: "$45.25" },
    { date: "1/30/23", orderNumber: "1344715351987108-1-39", price: "$15.00" },
    { date: "1/15/23", orderNumber: "1344715351987108-1-40", price: "$19.99" },
    { date: "1/5/23", orderNumber: "1344715351987108-1-41", price: "$24.20" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="account-page-right-wrap">
      <div className="receipts">
        <h1>Receipts</h1>
        <table className="receipts-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Order Number</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {receiptsData.map((receipt, index) => (
              <tr key={index}>
                <td>{receipt.date}</td>
                <td>{receipt.orderNumber}</td>
                <td>{receipt.price}</td>
                <td>
                  <a href="#" className="view-details">
                    View Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="see-more-btn-container">
          <motion.button
            type="submit"
            className="btn orangeSubmit"
            whileHover={{ scale: 1.05 }}
            onClick={() => {}}
          >
            See more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptsSection;
