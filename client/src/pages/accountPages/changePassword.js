import React, { useState } from "react";
import HeaderAccount from "../../components/headerAccount";
import Footer from "../../components/footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import sidebarProfile from "../../images/greyProfile.png";
import "../../css/chat.css";
import "../../css/AccountPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import AvailablePlansSection from "../../components/accountProfile/availablePlans";
import PremiumBusinessSection from "../../components/accountProfile/premiumBusiness";
import EditProfileSection from "../../components/accountProfile/editProfile";
import AddressSection from "../../components/accountProfile/address";
import ChangePasswordSection from "../../components/accountProfile/changePassword";
import SavedPaymentCardsSection from "../../components/accountProfile/savedPayments";
import ReceiptsSection from "../../components/accountProfile/receipts";

import {
  faHome,
  faCreditCard,
  faClipboard,
  faPencilAlt,
  faLock,
  faBell,
  faClock,
  faAddressCard,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

//for now we'll chat on the home page
function ChangePassword() {
  // State for the opened tab
  const [openedTab, setOpenedTab] = useState("changePassword");
  const [yourPlan, setYourPlan] = useState("premiumBusiness");

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setOpenedTab(tab);
  };

  const navigate = useNavigate();
  const location = useLocation();

  // Function to render the right-side component based on the opened tab
  const renderRightSideComponent = () => {
    //scroll
    window.scrollTo(0, 0);
    return (
      <ChangePasswordSection
        openedTab={openedTab}
        setOpenedTab={setOpenedTab}
        yourPlan={yourPlan}
        setYourPlan={setYourPlan}
      />
    );
  };
  console.log(location.state.token);
  // Add more conditions for other components

  const { currentPlan } = location.state;

  return (
    <div className="accountOverviewPage">
      <HeaderAccount token={location.state.token} />
      {openedTab == "profile" && currentPlan == "premiumIndividual" && (
        <div className="profile-your-plan pink">
          <h1>Premium Provider</h1>
          <h3>Unlimited EHR automation to save your time.</h3>
        </div>
      )}
      {openedTab == "profile" && currentPlan == "premiumBusiness" && (
        <div className="profile-your-plan blue">
          <h1>Premium Company</h1>
          <h3>
            Unlimited EHR automation for your company's medical providers.
          </h3>
        </div>
      )}
      {openedTab == "profile" && currentPlan == "ehrBoostFree" && (
        <div className="profile-your-plan grey">
          <h1>EHR Boost Free</h1>
          <h3>Use EHR automation, with limited functionality.</h3>
        </div>
      )}

      <div className="account-page">
        <div className="sidebar">
          <div className="profile-logo-container">
            <img
              src={sidebarProfile}
              alt="Profile Logo"
              className="profile-logo"
            />
          </div>
          <ul>
            <li
              className={openedTab === "profile" ? "active" : ""}
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
              <FontAwesomeIcon icon={faHome} />
              Account Overview
            </li>
            <li
              className={openedTab === "availablePlans" ? "active" : ""}
              onClick={() => {
                navigate(
                  "../account-overview/available-plans",
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
              <FontAwesomeIcon icon={faCreditCard} />
              Available Plans
            </li>
            {currentPlan == "premiumBusiness" && (
              <li
                className={openedTab === "premiumBusiness" ? "active" : ""}
                onClick={() => {
                  navigate(
                    "../account-overview/premium-company",
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
                <FontAwesomeIcon icon={faClipboard} />
                Premium Business
              </li>
            )}
            <li
              className={openedTab === "editProfile" ? "active" : ""}
              onClick={() => {
                navigate(
                  "../account-overview/edit-profile",
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
              <FontAwesomeIcon icon={faPencilAlt} />
              Edit Profile
            </li>
            <li
              className={openedTab === "address" ? "active" : ""}
              onClick={() => {
                navigate(
                  "../account-overview/address",
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
              <FontAwesomeIcon icon={faAddressCard} />
              Address
            </li>
            <li
              className={openedTab === "changePassword" ? "active" : ""}
              onClick={() => {
                navigate(
                  "../account-overview/change-password",
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
              <FontAwesomeIcon icon={faLock} />
              Change Password
            </li>

            <li
              className={openedTab === "savedPaymentCards" ? "active" : ""}
              onClick={() => {
                navigate(
                  "../account-overview/saved-payment-cards",
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
              <FontAwesomeIcon icon={faCreditCard} />
              Saved Payment Cards
            </li>
            <li
              className={openedTab === "receipts" ? "active" : ""}
              onClick={() => {
                navigate(
                  "../account-overview/receipts",
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
              <FontAwesomeIcon icon={faClock} />
              Receipts
            </li>
          </ul>
        </div>
        {renderRightSideComponent()}
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;
