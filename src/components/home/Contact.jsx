import React from "react";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900" id="contact">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-current text-white dark:text-[#010415]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <div className="px-4 bg-gray-100 dark:bg-gray-900 md:px-16 pb-8 py-16 md:py-4">
        <section className="max-w-5xl mx-auto">
          <div className="mb-12 select-none">
            <div className="text-center text-sm font-medium tracking-tighter text-gray-600 dark:text-gray-300 ">
              <Fade bottom>Contact us</Fade>
            </div>
            <h2 className=" text-4xl font-semibold tracking-tighter dark:text-white text-[#1d1d1f] md:text-6xl mb-4 text-center max-w-xl mx-auto">
              <Fade bottom>Get an estimate of your account’s growth.</Fade>
            </h2>
            <p className="text-black/75 dark:text-white/75 font-medium text-md mb-16 max-w-xl mx-auto text-center">
              <Fade bottom>
                Fill out the form below and we will get back to you as soon as
                we can!
              </Fade>
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full md:w-1/2 lg:w-1/2">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold text-[#010415] dark:text-gray-100 select-none">
                    <Fade bottom>Office</Fade>
                  </h3>
                  <p className="text-gray-400 dark:text-gray-200">
                    <Fade bottom>India - Dehradun</Fade>
                  </p>
                  <p className="text-gray-400 dark:text-gray-200">
                    <Fade bottom> Haridwar -249205</Fade>
                  </p>
                </div>
                <div className="mb-12 w-full md:w-1/2">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold text-[#010415] dark:text-gray-100 select-none">
                    <Fade bottom> Contacts</Fade>
                  </h3>
                  <p className="text-gray-400 dark:text-gray-200">
                    <Fade bottom>example@gamil.com</Fade>
                  </p>
                </div>
                <div className="w-full md:w-1/3 lg:w-full">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold text-[#010415] dark:text-gray-100 select-none">
                    <Fade bottom>Socials</Fade>
                  </h3>
                  <div className="flex">
                    <a className="mr-3 w-6" href="/">
                      <Fade bottom>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
                          alt=""
                        />
                      </Fade>
                    </a>
                    <a className="mr-3 w-6" href="/">
                      <Fade bottom>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                          alt=""
                        />
                      </Fade>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="max-w-md lg:mx-auto">
                <Fade bottom>
                  <form action="">
                    <div className="mb-4">
                      <label
                        className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full p-4 text-xs font-semibold leading-none bg-white dark:bg-gray-800 text-black dark:text-white
                     rounded outline-none"
                        type="text"
                        placeholder="Shre Yash"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Work Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full p-4 text-xs font-semibold leading-none bg-white dark:bg-gray-800 text-black dark:text-white
                    rounded outline-none"
                        type="email"
                        placeholder="example@exampal.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Instagram account name
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full p-4 text-xs font-semibold leading-none bg-white dark:bg-gray-800 text-black dark:text-white
                    rounded outline-none"
                        type="text"
                        placeholder="username"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Message
                      </label>
                      <textarea
                        className="w-full p-4 text-xs font-semibold leading-none bg-white dark:bg-gray-800 text-black dark:text-white
                    rounded outline-none"
                        type="text"
                        placeholder="Message..."
                      ></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                      <label>
                        <input
                          className="mr-1"
                          type="checkbox"
                          name="terms"
                          value="1"
                        />
                        <span className="text-sm font-semibold dark:text-gray-200">
                          I agree to the{" "}
                          <span className="text-blue-500">
                            Terms of Service
                          </span>{" "}
                          and{" "}
                          <span className="text-blue-500">Privacy Policy</span>
                        </span>
                      </label>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button className="w-full py-2 px-6 rounded-xl bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-800 text-gray-50 font-bold leading-loose transition duration-200">
                        Get Started
                      </button>
                    </div>
                  </form>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-white dark:bg-[#010415]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-current text-gray-100 dark:text-gray-900"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Contact;
