import React from "react";
import Herobg from "../../assets/img/hero-bg.svg";
import Fade from "react-reveal/Fade";

function Hero01() {
  return (
    <>
      <div className="w-full h-10 bg-[#010415]"></div>
      <section
        className="bg-[#010415] h-screen p-10"
        id="home"
        style={{
          backgroundImage: `url('${Herobg}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "1000px",
        }}
      >
        <section className="relative mx-auto flex max-w-3xl flex-col items-center justify-center pt-16 text-white md:pt-36">
          <h1 className="text-center text-3xl font-semibold tracking-widest md:text-6xl">
            <Fade bottom>Give your Instagram the reach it deserves!</Fade>
          </h1>
          <div className="mx-8 mt-10 flex max-w-lg flex-col items-center gap-2 md:mx-20">
            <img
              src="https://uploads-ssl.webflow.com/5dcd6ad7e221b6017cfc4706/60f562df993ead01a030abaa_stars.svg"
              loading="lazy"
              alt="5 stars on Clutch."
              className="stars"
            />
            <p className="mb-8 text-center text-lg font-normal tracking-wide opacity-75 md:text-xl">
              <Fade bottom>
                "They felt like partners rather than just suppliers."
              </Fade>
              <a
                href="/"
                className="border-b border-opacity-75 transition duration-300 ease-in-out hover:border-none"
                target="_blank"
              >
                <Fade bottom>@ShreYash</Fade>
              </a>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Hero01;
