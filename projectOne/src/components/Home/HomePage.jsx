import React from "react";
import HeroSection from "./HeroSection";

import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";
const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most Pro Camera ever."
        link="/"
        image={iphone}
      />
      {/* Featured Products */}
      <FeaturedProducts />
      {/* Hero */}
      <HeroSection
        title="Build the Ultimate Setup"
        subtitle="You can add Studio Display and color-matched Magic accessories to your ag after confgure your Mac mini."
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
