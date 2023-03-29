import React, { useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import "../../css/availablePlans.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import "../../css/AccountPage.css";

const PlanCard = ({ plan, isCurrentPlan, navigate, currentPlan }) => {
  const [selected, setSelected] = useState(false);
  const planCardColor = () => {
    if (isCurrentPlan) {
      if (plan.planClass === "premiumIndividual") {
        return "pink";
      } else if (plan.planClass === "ehrBoostFree") {
        return "grey";
      } else if (plan.planClass === "premiumBusiness") {
        return "dark-blue";
      }
    }
    return "";
  };
  const handleClick = () => {
    setSelected(true);
    setTimeout(() => {
      navigate("../account/change/confirm", {
        state: { currentPlan, selectedPlan: plan.id },
      });
    }, 500);
  };

  return (
    <div className="available-plans-container">
      <div className={`plan-card ${plan.planClass} ${planCardColor()}`}>
        {isCurrentPlan && (
          <div className="your-plan-section">
            <h5>Current Plan</h5>
          </div>
        )}
        <div className={`top ${plan.planClass}`}>
          <h4 className="plan-title">{plan.title}</h4>
        </div>
        <div className="bottom">
          <div className="planFeatures">
            <p>Ad-free music listening</p>
          </div>
          <Link to="#" onClick={plan.learnMore} className="learn-more">
            Learn more
          </Link>
          <hr className="bottom-divider" />
          <div className="bottom-pricing">
            <div className="price-section">
              <span className="price">{plan.price}</span>
              <span className="billing-details">/month + tax</span>
            </div>
            {!isCurrentPlan && (
              <div className="plan-buttons select">
                <motion.button
                  className="btn"
                  whileHover={{ scale: 1.05 }}
                  onClick={handleClick}
                >
                  Select
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function AvailablePlansSection(props) {
  const [openedTab, setOpenedTab] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(props.yourPlan);
  const navigate = useNavigate();
  const availablePlans = [
    {
      id: "premiumBusiness",
      title: "Premium Company",
      planClass: "premiumBusiness",
      description: "Unlimited automation with EHR Boost Chrome Extension",
      learnMore: () => setOpenedTab("availablePlans"),
      update: () => setOpenedTab("savedPayments"),
      isCurrentPlan: false,
      price: "$49.99",
    },
    {
      id: "premiumIndividual",
      title: "Premium Provider",
      planClass: "premiumIndividual",
      description: "Unlimited automation with EHR Boost Chrome Extension",
      learnMore: () => setOpenedTab("availablePlans"),
      update: () => setOpenedTab("savedPayments"),
      isCurrentPlan: false,
      price: "$9.99",
    },
    {
      id: "ehrBoostFree",
      title: "EHR Boost Free",
      planClass: "ehrBoostFree",
      description: "Unlimited automation with EHR Boost Chrome Extension",
      learnMore: () => setOpenedTab("availablePlans"),
      update: () => setOpenedTab("savedPayments"),
      isCurrentPlan: true,
      price: "Free",
    },
  ];

  return (
    <div className="availablePlans">
      {availablePlans
        .filter((plan) => plan.id === currentPlan)
        .map((plan, index) => (
          <PlanCard
            key={index}
            plan={plan}
            isCurrentPlan={currentPlan === plan.id}
            setOpenedTab={setOpenedTab}
          />
        ))}
      <h3>Available Plans</h3>
      {availablePlans
        .filter((plan) => plan.id !== currentPlan)
        .map((plan, index) => (
          <PlanCard
            key={index}
            plan={plan}
            isCurrentPlan={currentPlan === plan.id}
            setOpenedTab={setOpenedTab}
            navigate={navigate}
          />
        ))}
    </div>
  );
}

export default AvailablePlansSection;
