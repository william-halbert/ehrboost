import React, { useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import "../../css/chat.css";
import "../../css/AccountPage.css";
import "../../css/premiumBusiness.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import AvailablePlans from "./availablePlans";
import {
  faArrowRight,
  faUser,
  faCopy,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PremiumBusinessSection = ({ currentPlan, openedTab }) => {
  return (
    <div className="account-page-right-wrap">
      <div className="plan-management">
        <div className={`plan-color blue`}>
          <h1>
            Manage your <br></br>Premium Company
          </h1>
          <h5>
            Here you can update your home address as well as invite or remove
            providers.
          </h5>
        </div>
        <div className="plan-address">
          <div>
            <h3>Your address</h3>
            <p>1234 XYZ Rd Austin, TX 48484, USA</p>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow-icon"
            onClick={() => openedTab("address")}
          />
        </div>
        <div className="plan-content-wrap">
          <div className="plan-content">
            <div className="plan-providers">
              <h3>Premium providers</h3>
              <h5>7 premium provider accounts being used</h5>
              <div className="provider">
                <FontAwesomeIcon icon={faUser} className="user-icon" />
                <div className="provider-details">
                  <h5>You</h5>
                  <h5>Plan manager</h5>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </div>
              <div className="provider">
                <FontAwesomeIcon icon={faUser} className="user-icon" />
                <div className="provider-details">
                  <h5>Dr. Douglas Halbert</h5>
                  <h5>Plan member</h5>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </div>
              <div className="provider">
                <FontAwesomeIcon icon={faUser} className="user-icon" />
                <div className="provider-details">
                  <h5>Dr. Kyra Halbert</h5>
                  <h5>Plan member</h5>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </div>
            </div>
            <div className="add-to-company-wrap">
              <h5>
                Send someone the link below, or create an invitation using a
                messaging service or email.
              </h5>
              <h5>
                The person you invite will be asked to confirm their address so
                they can join your plan.
              </h5>
              <button className="copy-code" whileHover={{ scale: 1.05 }}>
                <FontAwesomeIcon icon={faCopy} className="copy-icon" />
                http://www.ehrboost.com/join...
              </button>
              <div className="plan-buttons company-email">
                <motion.button className="btn" whileHover={{ scale: 1.05 }}>
                  <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                  <h4>Email</h4>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PremiumBusinessSection;
