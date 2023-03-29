import React, { useEffect, useState } from "react";
import logo from "../images/whiteText.png";
import white from "../images/whiteProfile.png";
import orange from "../images/orangeProfile.png";
import "../css/header.css";
import "../css/headerAccount.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function HeaderAccount(props) {
  const [headerClassName, setHeader] = useState("header");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/home";
  const handleLinkClick = (event) => {
    if (isHomePage) {
      event.preventDefault();
    }
  };
  const token = props.token;
  console.log(token);
  return (
    <div className="headerAccount">
      <Link
        to={"../home"}
        state={{ token: props.token }}
        onClick={handleLinkClick}
      >
        <img src={logo} className="headerLogo headerAccountLogo" />
      </Link>
      <Link to="features" className="features"></Link>
      <div>
        <div className="profileWrap">
          <Link
            to={"../account-overview"}
            state={{ token }}
            className="profile"
          >
            Profile
            <img src={white} className="whiteProfile" />
            <img src={orange} className="orangeProfile" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderAccount;
