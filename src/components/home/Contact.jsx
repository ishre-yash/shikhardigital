import React from "react";

function Contact() {
  return (
    <>
      <div className="container mx-auto px-4 bg-gray-100 dark:bg-[#010415] md:px-16 py-8">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#010415] dark:text-gray-100">
            Contact
          </h2>
          <p className="text-gray-500 dark:text-gray-300 leading-loose">
            Got any question? Let’s talk about it.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full md:w-1/2 lg:w-1/2">
                <h3 className="mb-2 text-3xl lg:text-4xl font-bold text-[#010415] dark:text-gray-100">
                  Office
                </h3>
                <p className="text-gray-400 dark:text-gray-200">
                  India - Dehradun
                </p>
                <p className="text-gray-400 dark:text-gray-200">
                  Haridwar -249205
                </p>
              </div>
              <div className="mb-12 w-full md:w-1/2">
                <h3 className="mb-2 text-3xl lg:text-4xl font-bold text-[#010415] dark:text-gray-100">
                  Contacts
                </h3>
                <p className="text-gray-400 dark:text-gray-200">
                  example@gamil.com
                </p>
              </div>
              <div className="w-full md:w-1/3 lg:w-full">
                <h3 className="mb-2 text-3xl lg:text-4xl font-bold text-[#010415] dark:text-gray-100">
                  Socials
                </h3>
                <div className="flex">
                  <a className="mr-3 w-6" href="/">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
                      alt=""
                    />
                  </a>
                  <a className="mr-3 w-6" href="/">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="mb-12 w-full mt-6">
                <h3 className="mb-2 text-3xl lg:text-4xl font-bold text-[#010415] dark:text-gray-100">
                  Get an estimate of your account’s growth.
                </h3>
                <p className="text-gray-400 dark:text-gray-200">
                  Fill out the form below and we will get back to you as soon as
                  we can!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="max-w-md lg:mx-auto">
              <form action="">
                <div className="mb-4">
                  <label
                    className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                    for="grid-first-name"
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
                    for="grid-first-name"
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
                    for="grid-first-name"
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
                    for="grid-first-name"
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
                      class="mr-1"
                      type="checkbox"
                      name="terms"
                      value="1"
                    />
                    <span class="text-sm font-semibold dark:text-gray-200">
                      I agree to the{" "}
                      <span className="text-blue-500">Terms of Service</span>{" "}
                      and <span className="text-blue-500">Privacy Policy</span>
                    </span>
                  </label>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="w-full py-2 px-6 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-50 font-bold leading-loose transition duration-200">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
