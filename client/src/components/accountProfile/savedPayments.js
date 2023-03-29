import React, { useState } from "react";
import "../../css/savedPayments.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faChevronRight,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard as faCreditCardRegular } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion"; // Import motion from framer-motion

const SavedPaymentCardsSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="account-page-right-wrap">
      <div className="saved-payment-cards">
        <h1>Saved Payment Cards</h1>
        <h5>
          Manage your payment details for one-time purchases. To manage payment
          details for your monthly subscription, go to{" "}
          <Link to="/account-overview" state={{ token: location.state.token }}>
            Account Overview
          </Link>
          .
        </h5>
        <div className="cards-header">
          <h3>My Cards</h3>
          <FontAwesomeIcon className="lock-icon" icon={faLock} />
        </div>
        <div className="card-section">
          <div className="card-info">
            <h5>Visa</h5>
            <h5 className="masked-number">8888 | 06/28</h5>
          </div>
          <FontAwesomeIcon
            className="fas fa-chevron-right"
            icon={faChevronRight}
          />
        </div>
        <div className="add-card-section">
          <div className="row">
            <FontAwesomeIcon
              className="credit-card-icon"
              icon={faCreditCardRegular}
            />
            <span>
              <h5 className="masked-add-card">**** 0000 | MM/YY</h5>
            </span>
          </div>
          <motion.button className="add-card-btn" whileHover={{ scale: 1.05 }}>
            Add Card
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SavedPaymentCardsSection;
