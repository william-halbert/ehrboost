import React, { useState } from "react";
import "../../css/login.css";
import logo from "../../images/blackText.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";

function VerifyPhone() {
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  function updateForm(e) {
    if (e.target.id === "phone") {
      setPhone(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:4000/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: location.state.token,
      },
      body: JSON.stringify({
        phone,
      }),
    })
      .then((res) => console.log(res))
      .then(() => {
        navigate(
          "../home",
          {
            state: {
              email: location.state.email,
              firstName: location.state.firstName,
              lastName: location.state.lastName,
              token: location.state.token,
              primaryUse: location.state.primaryUse,
              phone,
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
      <img src={logo} className="loginLogo " />
      <h2 className="welcomeLogin">Add your phone number</h2>
      <form action="POST" onSubmit={handleSubmit}>
        <label for="passwordLogin" className="moveLeft">
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          onChange={(e) => updateForm(e)}
          placeholder="+1(999)999-9999"
          className="passwordLogin loginBtn moveLeft"
        />
        <input
          type="submit"
          className="submitLogin loginBtn moveLeft"
          value="Continue"
        />
      </form>
    </motion.div>
  );
}

export default VerifyPhone;
