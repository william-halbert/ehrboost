import React from "react";
import Header from "./components/header";
import Landing from "./pages/landing";
import Signup from "./pages/signup";
import LogIn from "./pages/login";
import TermsOfUse from "./pages/termsOfUse";
import PrivacyPolicy from "./pages/privacyPolicy";
import AboutYou from "./pages/moreSignup/aboutYou";
import NoteOnCredits from "./pages/moreSignup/noteOnCredits";
import PrimaryUse from "./pages/moreSignup/primaryUse";
import VerifyPhone from "./pages/moreSignup/verifyPhone";
import Home from "./pages/accountPages/home";
import AccountOverview from "./pages/accountPages/accountOverview";
import AvailablePlans from "./pages/accountPages/availablePlans";
import Address from "./pages/accountPages/address";
import ChangePassword from "./pages/accountPages/changePassword";
import EditProfile from "./pages/accountPages/editProfile";
import PremiumBusiness from "./pages/accountPages/premiumBusiness";
import SavedPaymentCards from "./pages/accountPages/savedPaymentCards";
import Receipts from "./pages/accountPages/receipts";

import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EHR Boost</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="EHR optmization and automation to make them quicker and easier for Athena Health."
        />
      </Helmet>
      <Routes>
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/about-you" element={<AboutYou />} />
        <Route path="/signup/note-on-credits" element={<NoteOnCredits />} />
        <Route path="/signup/primary-use" element={<PrimaryUse />} />
        <Route path="/signup/verify-phone" element={<VerifyPhone />} />

        <Route
          path="/account-overview/available-plans"
          element={<AvailablePlans />}
        />

        <Route path="/account-overview/address" element={<Address />} />

        <Route
          path="/account-overview/change-password"
          element={<ChangePassword />}
        />

        <Route
          path="/account-overview/edit-profile"
          element={<EditProfile />}
        />

        <Route
          path="/account-overview/premium-company"
          element={<PremiumBusiness />}
        />

        <Route
          path="/account-overview/available-plans"
          element={<AvailablePlans />}
        />

        <Route path="/account-overview/receipts" element={<Receipts />} />

        <Route
          path="/account-overview/saved-payment-cards"
          element={<SavedPaymentCards />}
        />
        <Route path="/account-overview" element={<AccountOverview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
