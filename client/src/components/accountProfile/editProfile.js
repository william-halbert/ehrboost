import React, { useState } from "react";
import "../../css/editProfile.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const EditProfileSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleDayChange = (e) => setDay(e.target.value);
  const handleMonthChange = (e) => setMonth(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const handleCancel = () => {
    // Handle cancel button click
  };

  const handleSaveProfile = () => {
    // Handle save profile button click
  };

  return (
    <div className="account-page-right-wrap">
      <div className="edit-profile">
        <h1>Edit Profile</h1>
        <form action="POST">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control accountInput"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                className="form-control changePassword accountInput"
                id="password"
                disabled
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select className="form-control accountInput" id="gender">
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date-of-birth">Date of birth</label>
            <div className="date-of-birth-inputs">
              <input
                type="number"
                className="form-control accountInput"
                id="day"
                placeholder="DD"
                min="1"
                max="31"
              />
              <select className="form-control accountInput" id="month">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <input
                type="number"
                className="form-control accountInput small"
                id="year"
                placeholder="YYYY"
                min="1900"
                max="2099"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="country-of-origin">Country of origin</label>
            <select
              className="form-control accountInput"
              id="country-of-origin"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>India</option>
              <option>China</option>
              <option>Japan</option>
              <option>South Korea</option>
            </select>
          </div>
          <hr />
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

export default EditProfileSection;
