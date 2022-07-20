import React, { useState } from "react";
import Logo from "../../assets/img/Logo.svg";
import Switcher from "../Switcher";

function NavLink({ name, link }) {
  return (
    <>
      <a
        class="mt-4 rounded-3xl bg-transparent p-2 pl-4 transition duration-300 ease-in-out dark:hover:bg-white hover:bg-[#010415] hover:text-white dark:hover:text-black md:p-1 md:pl-0 lg:px-6"
        href="#Home"
      >
        {name}
      </a>
    </>
  );
}

function Index() {
  const [LinkName, setLinkName] = useState([
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Blog", link: "#Blog" },
    { name: "Testimonials", link: "#Testimonials" },
    { name: "Contact Us", link: "#Contact Us" },
  ]);
  const [show, setShow] = useState(false);

  return (
    <nav class="fixed z-50 w-full shadow-md bg-gray-100 dark:bg-[#010415]">
      <div class="container mx-auto p-6 md:py-6 md:px-20 lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between">
          <img class="w-10" src={Logo} alt="caboodle logo" />

          {/* <!-- Mobile menu button --> */}
          <div class="flex lg:hidden" onClick={() => setShow(!show)}>
            {!show ? (
              <button
                type="button"
                class="rounded bg-[#1f57d3] p-1 px-2 text-white shadow-xl"
                aria-label="toggle menu"
                id="menu-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="h-6 w-6 fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                type="button"
                class="rounded bg-[#1f57d3] p-1 px-2 text-white shadow-xl"
                aria-label="toggle menu"
                id="menu-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="h-6 w-6 fill-current"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div
          class={`mt-4 flex ${
            show ? "block" : "hidden"
          } flex-col space-y-4 space-x-0 text-base font-medium capitalize dark:text-white text-[#010415] lg:-mx-6 lg:mt-0 lg:block lg:flex-row lg:space-y-0 md:space-x-2`}
          id="menu"
        >
          {LinkName.map((l, index) => {
            return <NavLink name={l.name} link={l.link} />;
          })}
        </div>
        <div className="hidden md:block">
          <Switcher />
        </div>
      </div>
    </nav>
  );
}

export default Index;
