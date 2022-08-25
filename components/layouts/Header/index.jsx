import React, { useState } from "react";
import { useTheme } from "next-themes";

function NavLink({ name, link }) {
  return (
    <>
      <a
        className="mt-4 rounded-3xl bg-transparent p-2 pl-4 transition duration-300 ease-in-out dark:hover:bg-white hover:bg-[#010415] hover:text-white dark:hover:text-black md:p-1 md:pl-0 lg:px-6"
        href={link}
      >
        {name}
      </a>
    </>
  );
}

function Index() {
  const { theme, setTheme } = useTheme();
  const [LinkName] = useState([
    { name: "Home", link: "#home" },
    { name: "Security", link: "#security" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact Us", link: "#contact" },
    { name: "Faq", link: "#faq" },
  ]);
  const [show, setShow] = useState(false);

  return (
    <nav className="fixed z-50 w-full shadow-md bg-white/75 dark:bg-black/75 backdrop-blur-sm">
      <div className="container mx-auto p-6 md:py-6 md:px-20 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <img className="w-10" src="/logo/logo.svg" alt="caboodle logo" />

          {/* <!-- Mobile menu button --> */}
          <div className="flex lg:hidden" onClick={() => setShow(!show)}>
            {!show ? (
              <button
                type="button"
                className="rounded bg-[#1f57d3] p-1 px-2 text-white shadow-xl"
                aria-label="toggle menu"
                id="menu-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                type="button"
                className="rounded bg-[#1f57d3] p-1 px-2 text-white shadow-xl"
                aria-label="toggle menu"
                id="menu-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div
          className={`mt-4 flex ${
            show ? "block" : "hidden"
          } flex-col space-y-4 space-x-0 text-base font-medium capitalize dark:text-white text-[#010415] lg:-mx-6 lg:mt-0 lg:block lg:flex-row lg:space-y-0 md:space-x-2`}
          id="menu"
        >
          {LinkName.map((l, index) => {
            return <NavLink name={l.name} link={l.link} key={index} />;
          })}
          <div className=" block md:hidden flex justify-center items-center">
            {/* {theme == "light" ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  onClick={() => setTheme("dark")}
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  >
                    <path d="M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </g>
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  onClick={() => setTheme("dark")}
                >
                  <path
                    fill="currentColor"
                    d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10.007 10.007 0 0 0 2.583-4.491a1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343a7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483a10.027 10.027 0 0 0 2.89 7.848a9.972 9.972 0 0 0 7.848 2.891a8.036 8.036 0 0 1-1.484 2.059z"
                  ></path>
                </svg>
              </div>
            )} */}
          </div>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </nav>
  );
}

export default Index;
