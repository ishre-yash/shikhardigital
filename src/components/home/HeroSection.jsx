import React from "react";
import Herobg from "../../assets/img/hero-bg.svg";

function HeroSection() {
  return (
    <>
      <div class="w-full h-16"></div>
      <section
        class=""
        style={{
          backgroundImage: `url('${Herobg}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto",
        }}
      >
        <section class="relative mx-auto flex max-w-3xl flex-col items-center justify-center pt-16 text-white md:pt-36">
          <div class="text-center text-3xl font-semibold tracking-widest md:text-6xl">
            SaaS UI/UX
            <br />
            design when
            <br />
            you need it.
          </div>
          <div class="mx-8 mt-10 flex max-w-lg flex-col items-center gap-2 md:mx-20">
            <img
              src="https://uploads-ssl.webflow.com/5dcd6ad7e221b6017cfc4706/60f562df993ead01a030abaa_stars.svg"
              loading="lazy"
              alt="5 stars on Clutch."
              class="stars"
            />
            <p class="mb-8 text-center text-lg font-normal tracking-wide opacity-75 md:text-xl">
              "They felt like partners rather than just <br />
              suppliers."
              <a
                href="/"
                class="border-b border-opacity-75 transition duration-300 ease-in-out hover:border-none"
                target="_blank"
              >
                @ShreYash
              </a>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default HeroSection;
