import { useState } from "react";
import { Link } from "react-router-dom";
import UserHeader from "../../../Components/User/UserHeader";
import Footer from "./Footer";
import { Offer } from "./Offer";
import { HeroSection } from "./HeroSection";
import OurMenu from "./OurMenu";
import ExploreSection from "../../../Components/User/ExploreSection";

function UserHome() {
  return (
    <div className="min-h-screen bg-background text-heading">
      {/* Navbar */}
      <UserHeader />

      <main>
        {/* Hero */}

        <HeroSection />
        {/* Popular Food */}
        <OurMenu />
        {/* Offer */}
        {<Offer />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserHome;
