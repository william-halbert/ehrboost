import React, { useState } from "react";
import HeaderAccount from "../../components/headerAccount";
import Footer from "../../components/footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../css/chat.css";
import "../../css/AccountPage.css";

//for now we'll chat on the home page
function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="accountOverviewPage">
      <HeaderAccount token={location.state.token} />

      <Footer />
    </div>
  );
}

export default Home;
