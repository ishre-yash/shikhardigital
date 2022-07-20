import React from "react";
import Header from "../layouts/Header";
import HeroSection from "../components/home/HeroSection";
import Contect from "../components/home/Contact";
import Faq from "../components/home/Faq";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Contect />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
