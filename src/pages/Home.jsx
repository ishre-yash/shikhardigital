import React from "react";
import Header from "../layouts/Header";
import Hero01 from "../components/home/Hero01";
import Hero02 from "../components/home/Hero02";
import Security from "../components/home/Security";
import Pricing from "../components/home/Pricing";
import Testimonials from "../components/home/Testimonials";
import Contect from "../components/home/Contact";
import Faq from "../components/home/Faq";
import CallToAction from "../components/home/CallToAction";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero01 />
      <Hero02 />
      <Security />
      <Pricing />
      <Contect />
      <Faq />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
