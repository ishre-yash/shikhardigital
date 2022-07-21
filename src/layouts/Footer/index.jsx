import React from "react";
import Logo from "../../assets/img/Logo.svg";
import Fade from "react-reveal/Fade";

function Index() {
  return (
    <>
      <footer className="antialiased bg-[#010415] py-4 md:py-8">
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <a
              className="inline-block mb-2 text-white text-xl font-bold"
              href="/"
            >
              <Fade bottom>
                <img className="w-16" src={Logo} alt="" width="auto" />
              </Fade>
            </a>
            <div className="text-4xl text-white font-black">
              <Fade bottom>shikhardigital</Fade>
            </div>
            <p className="text-lg text-white font-medium">
              <Fade bottom>
                shikhardigital Ltd. <br />
                UK India
              </Fade>
            </p>
            <ul className="flex flex-wrap items-center justify-center space-x-2 text-lg font-medium  text-white">
              <li className="">
                <Fade bottom>Privacy</Fade>
              </li>
              <li className="">•</li>
              <li className="">
                <Fade bottom>Blog</Fade>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;
