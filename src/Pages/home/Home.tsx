import { lazy, Suspense } from "react";
import Services from "./services/Services";
import SaleItem from "./sales/SaleItem";
import Categories from "./categories/Categories";
import HeroSection from "./herosection/HeroSection";
import About from "./about/About";
import Companies from "./companies/Companies";
import Gallery from "./gallery/Gallery";

import WhyChooseUs from "./whychooseus/WhyChooseUs";
import CompanyStats from "./CompanyStats/CompanyStats";
import { BeforeAfter } from "./BeforeAfter/BeforeAfter";
import { HowWeWork } from "./HowWeWork/HowWeWork";

const Home = () => {
  return (
    <>
      <HeroSection />
        <Categories />
        <Services />
        <SaleItem Type="sell" />
        <WhyChooseUs />
        <About />
        <Companies />
        <BeforeAfter/>
        <HowWeWork/>
        <CompanyStats />
      <Gallery />
    </>
  );
};

export default Home;
