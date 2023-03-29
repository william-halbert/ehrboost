import React, { useState } from "react";
import "../../css/login.css";
import logo from "../../images/blackText.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function PrimaryUse() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:4000/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: location.state.token,
      },
      body: JSON.stringify({
        primaryUse: e.target.value,
      }),
    })
      .then((res) => console.log(res))
      .then(() => {
        navigate(
          "../signup/verify-phone",
          {
            state: {
              email: location.state.email,
              firstName: location.state.firstName,
              lastName: location.state.lastName,
              token: location.state.token,
              primaryUse: e.target.value,
            },
          },
          { replace: true }
        );
      })
      .catch((error) => {});
  };

  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logo} className="loginLogo" />
      <h2 className="welcomeLogin">What type of medical provider are you?</h2>
      <button
        type="button"
        value="M.D."
        className="signupUse"
        onClick={handleSubmit}
      >
        Doctor of Medicine
      </button>
      <button
        type="button"
        value="N.P."
        className="signupUse"
        onClick={handleSubmit}
      >
        Nurse Practitioner
      </button>
      <button
        type="button"
        value="D.O."
        className="signupUse"
        onClick={handleSubmit}
      >
        Doctor of Osteopathic Medicine
      </button>
      <button
        type="button"
        value="D.D.S."
        className="signupUse"
        onClick={handleSubmit}
      >
        Doctor of Dental Surgery
      </button>
      <button
        type="button"
        value="Psy.D."
        className="signupUse"
        onClick={handleSubmit}
      >
        Doctor of Psychology
      </button>
    </motion.div>
  );
}

export default PrimaryUse;
