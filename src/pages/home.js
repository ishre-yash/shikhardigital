import React from "react";
import Header from "../layouts/Header";
import HeroSection from "../components/home/HeroSection";
import Contect from "../components/home/Contact";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";
import CallToAction2 from "../components/home/CallToAction2";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Testimonials />
      <Contect />
      <Faq />
      <CallToAction2 />
      <Footer />
    </>
  );
}

export default Home;
