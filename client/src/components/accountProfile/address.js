import React, { useState } from "react";
import "../../css/editProfile.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const AddressSection = () => {
  const USStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleSaveAddress = () => {
    // Handle save address button click
  };

  return (
    <div className="account-page-right-wrap">
      <div className="edit-profile">
        <h1 className="yourAddress">Your Address</h1>
        <h3>Enter your billing address</h3>
        <form>
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              className="form-control accountInput"
              id="street"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Town/City</label>
            <input
              type="text"
              className="form-control accountInput"
              id="city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select className="form-control accountInput" id="state">
              {USStates.map((state) => (
                <option key={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input type="text" className="form-control accountInput" id="zip" />
          </div>
          <div className="form-actions-address">
            <motion.button
              type="submit"
              className="btn orangeSubmit saveAddress"
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
              Save Address
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressSection;
