import React from "react";
import "../css/landing.css";
import hero from "../images/hero.png";
import usaMap from "../images/usaMap.png";
import arrow from "../images/rightArrow.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import HeaderLanding from "../components/headerLanding";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderLanding />
      <div className="heroWrapper">
        <div id="heroText">
          <motion.h1
            className="everythingText"
            initial={{ opacity: 0.5, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Saving doctors time,<br></br>so they can focus on the patient.
          </motion.h1>
          <motion.h1
            className="withKeyText"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            We automate filling out electronic health records<br></br>
            to make life easier for medical professionals.
          </motion.h1>
          <motion.div
            onClick={() => navigate("signup")}
            className="btn tryNow"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="signup" className="tryText">
              TRY EHR BOOST NOW
            </Link>
          </motion.div>
        </div>
        <img src={hero} id="heroImg" />
      </div>
      <div className="mapsWrap">
        <img src={usaMap} id="usaMap" />
        <div className="mapsText">
          <h1 className="h1 white italics">The Problem</h1>
          <ul className="">
            <h1 className="h2 white">
              U.S. primary doctors spend{" "}
              <span className="orange italics">1.4 hours</span> daily after work
              on electronic health records (EHRs),{" "}
              <span className="orange italicse">37%</span> of patient time on
              EHRs, and <span className="white">a third</span> spend{" "}
              <span className="orange italics">over two hours</span> daily after
              work on EHRs.
            </h1>
            <h1 className="h2 white">
              This time is <span className="orange italics">unpaid.</span>
            </h1>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
