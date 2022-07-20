import React from "react";
import Logo from "../../assets/img/Logo.svg";

function Index() {
  return (
    <>
      <footer className="antialiased bg-gray-100 dark:bg-[#010415] py-4 md:py-8">
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <a
              className="inline-block mb-2 text-white text-xl font-bold"
              href="/"
            >
              <img className="w-16" src={Logo} alt="" width="auto" />
            </a>
            <div className="text-4xl dark:text-white text-[#010415] font-black">
              shikhardigital
            </div>
            <p className="text-lg dark:text-white text-[#010415] font-medium">
              shikhardigital Ltd. <br />
              UK India
            </p>
            <ul className="flex flex-wrap items-center justify-center space-x-2 text-lg font-medium text-[#010415] dark:text-white">
              <li className="">Privacy</li>
              <li className="">•</li>
              <li className="">Blog</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;
