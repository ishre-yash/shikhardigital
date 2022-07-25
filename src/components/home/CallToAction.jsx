import React from "react";
import Fade from "react-reveal/Fade";

function CallToAction() {
  return (
    <>
      <section
        className="py-36 bg-[#010415] w-full"
        style={{
          backgroundImage: `url('https://uploads-ssl.webflow.com/5dcd6ad7e221b6017cfc4706/6222380d3b4baea4500c39bc_body-bg-new.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100vw 100vh",
        }}
      >
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="mb-8 max-w-xl mx-auto font-black text-center text-4xl sm:text-5xl text-white select-none">
            <Fade bottom>Give your Instagram the reach it deserves! </Fade>
          </h2>

          <p className="text-white/75 font-medium text-lg max-w-md mx-auto text-center select-none">
            <Fade bottom>
              7500+ businesses, creatives and everyday Instagram users have
              worked with Gramglow to grow their Instagram account organically
              and manually{" "}
            </Fade>
          </p>
          <div className="space-x-2 flex items-center justify-center">
            <Fade bottom>
              <button className="w-fit py-2 mt-6 px-16 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-50 font-bold leading-loose cursor-pointer select-none">
                <Fade bottom>Pricing</Fade>
              </button>
            </Fade>
            <Fade bottom>
              <button className="bg-[#1f57D3] py-2 px-6 rounded-full font-normal text-xl mt-6 drop-shadow-md shadow-md w-fit mx-auto text-white cursor-pointer select-none">
                <Fade bottom>Discovery call</Fade>
              </button>
            </Fade>
          </div>
          <div className="flex items-center justify-center mt-8 text-white font-xs select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              className="fill-current text-gray-200"
              viewBox="0 0 30 30"
              width="15"
              height="15"
            >
              <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
            </svg>

            <span className="mr-6 ml-1 text-xs">
              <Fade bottom>100% refund policy</Fade>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              className="fill-current text-gray-200"
              viewBox="0 0 30 30"
              width="15"
              height="15"
            >
              <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
            </svg>

            <span className="mr-6 ml-1 text-xs">
              <Fade bottom>No Software or bots used</Fade>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              className="fill-current text-gray-200"
              viewBox="0 0 30 30"
              width="15"
              height="15"
            >
              <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
            </svg>

            <span className="mr-6 ml-1 text-xs">
              <Fade bottom>Login optional</Fade>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
