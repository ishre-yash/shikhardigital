import React from "react";
import Header from "../layouts/Header";
// import Hero01 from "../components/home/Hero01";
import Hero02 from "../components/home/Hero02";
import Security from "../components/home/Security";
import Contect from "../components/home/Contact";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";
import CallToAction2 from "../components/home/CallToAction2";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero02 />
      {/* <Hero01 /> */}
      <Security />
      <Testimonials />
      <Contect />
      <Faq />
      <CallToAction2 />
      <Footer />
    </>
  );
}

export default Home;
