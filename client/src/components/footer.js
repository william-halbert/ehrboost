import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <p className="willfulFooter">2023 EHR Boost, Inc.</p>
        <Link to="terms-of-use" className="termsFooter"></Link>
        <Link to="privacy-policy" className="privacyFooter"></Link>
      </div>
    </div>
  );
}

export default Footer;
