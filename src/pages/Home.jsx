import React from "react";
import Header from "../layouts/Header";
import Hero from "../components/home/Hero";
import Security from "../components/home/Security";
import Testimonials from "../components/home/Testimonials";
import Contect from "../components/home/Contact";
import Faq from "../components/home/Faq";
import CallToAction from "../components/home/CallToAction";
import Footer from "../layouts/Footer";
// import Hero01 from "../components/home/Hero01";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Hero01 /> */}
      <Security />
      <Testimonials />
      <Contect />
      <Faq />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
