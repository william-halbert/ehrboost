import React, { useState } from "react";
import HeaderAccount from "../../components/headerAccount";
import Footer from "../../components/footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import sidebarProfile from "../../images/greyProfile.png";
import "../../css/chat.css";
import "../../css/AccountPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import AvailablePlans from "../../components/accountProfile/availablePlans";
import PremiumBusiness from "../../components/accountProfile/premiumBusiness";
import EditProfile from "../../components/accountProfile/editProfile";
import Address from "../../components/accountProfile/address";
import ChangePassword from "../../components/accountProfile/changePassword";
import SavedPaymentCards from "../../components/accountProfile/savedPayments";
import Receipts from "../../components/accountProfile/receipts";

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

const PlanCard = (props) => {
  const currentPlan = props.planDetails;

  return (
    <div className={`plan-card ${props.backgroundColor}`}>
      <div className="top">
        <h2 className="plan-title">{currentPlan.name}</h2>
      </div>
      <div className="bottom">
        <div className="left-side">
          <h5>{currentPlan.description}</h5>
          <Link
            to="/availablePlans"
            onClick={() => props.setOpenedTab("availablePlans")}
            className="learn-more"
          >
            Learn more about your plan
          </Link>
        </div>
        <div className="right-side">
          <h5 className="payment">Payment</h5>
          <p className="nextBill">
            Your next bill is for{" "}
            <span className="bold">{currentPlan.price}</span> + tax on{" "}
            <span className="bold">5/4/2023.</span>
          </p>
          <div className="row">
            <div>
              <p className="bold card">Visa ending in 8089</p>
              <p className="expires">Expires: 10/2024</p>
            </div>
            <Link
              to="#"
              onClick={() => props.setOpenedTab("savedPayments")}
              className="update"
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function AccountOverviewSection(props) {
  const getCardBackgroundColor = (plan) => {
    if (plan === "premiumIndividual") {
      return "pink";
    } else if (plan === "premiumBusiness") {
      return "blue";
    } else {
      return "grey";
    }
  };

  const getPlanDetails = (plan) => {
    const plans = [
      {
        id: "premiumIndividual",
        name: "Premium Provider",
        description: "Description for Premium Individual plan",
        price: "$9.99",
      },
      {
        id: "premiumBusiness",
        name: "Premium Company",
        description: "Description for Premium Business plan",
        price: "$49.99",
      },
      {
        id: "ehrBoostFree",
        name: "EHR Boost Free",
        description: "Description for EHR Boost Free plan",
        price: "Free",
      },
    ];

    return plans.find((p) => p.id === plan);
  };
  const currentPlan = getPlanDetails(props.yourPlan);
  const backgroundColor = getCardBackgroundColor(props.yourPlan);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="account-overview">
      <h2>Account Overview</h2>
      <h3 className="profileText">Profile</h3>
      <table>
        <table>
          <tr>
            <td className="key">Username</td>
            <td className="value">JohnDoe</td>
          </tr>
          <tr>
            <td className="key">Email</td>
            <td className="value">john.doe@example.com</td>
          </tr>
          <tr>
            <td className="key">Country of Origin</td>
            <td className="value">United States</td>
          </tr>
        </table>
      </table>
      <motion.button
        className="btn"
        whileHover={{ scale: 1.05 }}
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
        Edit Profile
      </motion.button>
      <h3 className="your-plan">Your Plan</h3>
      <PlanCard
        planDetails={currentPlan}
        backgroundColor={backgroundColor}
        setOpenedTab={props.setOpenedTab}
      />
      <div className="plan-buttons">
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
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
          Change Plan
        </motion.button>
        <motion.button
          className="btn cancel-premium"
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            props.setOpenedTab("cancelPremium");
          }}
        >
          Cancel Premium
        </motion.button>
      </div>
      <h3 className="manage-business">Manage your business accounts</h3>
      <h5>Want to remove or add members?</h5>
      <motion.button
        className="btn go"
        whileHover={{ scale: 1.05 }}
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
        Go
      </motion.button>
      <h3 className="manage-business">Sign out everywhere</h3>
      <h5>
        This logs you out of EHR Boost everywhere you’re logged in, including
        mobile, tablet, and desktop devices.
      </h5>
      <motion.button
        className="btn go"
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          props.setOpenedTab("signOutEverywhere");
        }}
      >
        Sign out everywhere
      </motion.button>
    </div>
  );
}

//for now we'll chat on the home page
function AccountOverview() {
  // State for the opened tab
  const [openedTab, setOpenedTab] = useState("profile");
  const [currentPlan, setCurrentPlan] = useState("premiumBusiness");

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setOpenedTab(tab);
  };

  const navigate = useNavigate();
  const location = useLocation();
  // Access token from the location object

  // Function to render the right-side component based on the opened tab
  const renderRightSideComponent = () => {
    //scroll
    window.scrollTo(0, 0);
    return (
      <AccountOverviewSection
        openedTab={openedTab}
        setOpenedTab={setOpenedTab}
        yourPlan={currentPlan}
        setYourPlan={setCurrentPlan}
      />
    );
  };
  // Add more conditions for other components
  location.state.currentPlan = currentPlan;

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

export default AccountOverview;
