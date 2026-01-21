import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";
import React from "react";
import Footer from "./Footer";

function Home() {
  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection className="bg-[#281894]" />
      <PortfolioSection />

      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
