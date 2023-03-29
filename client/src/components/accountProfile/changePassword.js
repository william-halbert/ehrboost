import React, { useState } from "react";
import "../../css/changePassword.css"; // Reuse the same CSS file

import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ChangePasswordSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="account-page-right-wrap">
      <div className="edit-profile">
        {" "}
        {/* Reuse this class */}
        <h1>Change your password</h1>
        <form>
          <div className="form-group">
            <label htmlFor="current-password">Current Password</label>
            <input
              type="password"
              className="form-control accountInput" // Reuse these classes
              id="current-password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              className="form-control accountInput"
              id="new-password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeat-new-password">Repeat New Password</label>
            <input
              type="password"
              className="form-control accountInput"
              id="repeat-new-password"
            />
          </div>
          <div className="form-actions">
            <motion.button
              className="btn"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                navigate(
                  "../account-overview",
                  {
                    state: {
                      token: location.state.token,
                      currentPlan: location.state.currentPlan,
                    },
                  },
                  { replace: true }
                );
              }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="btn orangeSubmit"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                navigate(
                  "../account-overview",
                  {
                    state: {
                      token: location.state.token,
                      currentPlan: location.state.currentPlan,
                    },
                  },
                  { replace: true }
                );
              }}
            >
              Save Profile
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordSection;
