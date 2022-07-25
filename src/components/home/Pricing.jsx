import React from "react";
import Checked from "../../assets/img/checked.svg";
import Circle from "../../assets/img/circle.svg";

import Fade from "react-reveal/Fade";

function Pricing() {
  return (
    <>
      <section className="max-w-6xl mx-auto" id="pricing">
        <div className="font-medium pt-10 xl:pt-32 bg-gray-100 dark:bg-gray-800 md:mt-8 rounded-3xl pb-96">
          <div className="container px-4 mx-auto">
            <h2 className=" text-4xl font-semibold tracking-tighter dark:text-white text-[#1d1d1f] md:text-6xl mb-4 text-center select-none">
              <Fade bottom>Pricing</Fade>
            </h2>
            <p className="text-black/75 dark:text-white/75 font-medium text-md mb-16 max-w-xl mx-auto text-center select-none">
              <Fade bottom>
                We’ve accumulated hundreds of reviews from our website and
                Fiverr Freelance account over the last half-decade. We work hard
                to ensure our clients’ satisfaction, especially because
                Instagram marketing has a bad reputation.
              </Fade>
            </p>
          </div>
        </div>
        <div className="container px-6 mx-auto">
          <div className="-mt-96 grid md:grid-cols-2 lg:grid-cols-3 lg:items-center gap-9 pb-24 2xl:pb-52 font-medium mx-auto max-w-7xl">
            <Fade bottom>
              <div className="pt-14 pb-16 px-8 md:px-16 shadow-2xl rounded-3xl bg-white text-[#010415] dark:text-white dark:bg-gray-900">
                <div className="bg-gray-100 dark:bg-gray-800 max-w-max ml-auto md:-mr-10 rounded-3xl py-2 px-3 uppercase text-xs font-bold tracking-wider text-gray-500 dark:text-gray-300">
                  Trial free
                </div>
                <img className="mb-14 w-10 h-10" src={Circle} alt="" />
                <h3 className=" text-6xl font-bold leading-10 tracking-tight mb-4">
                  Silver
                </h3>
                <div className="text-3xl flex items-center mb-12 leading-5 tracking-tighter">
                  <span className="text-base mr-2 -mb-1">$</span>
                  <span>49.99</span>
                </div>
                <p className="font-normal text-base leading-loose text-gray-500 dark:text-gray-300 mb-6">
                  Get free
                </p>
                <ul className="mb-6">
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Get free consultation</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Profile optimization </span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Optimize Content Strategy</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Hashtag Guide align with latest algorithm</span>
                  </li>
                </ul>
                <Fade bottom>
                  <button className="block py-2 px-6 mx-auto rounded-xl bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-800 text-gray-50 font-bold leading-loose transition duration-200">
                    <Fade bottom>Buy now</Fade>
                  </button>
                </Fade>
              </div>
            </Fade>
            <Fade bottom>
              <div className="pt-14 pb-16 px-8 md:px-16 shadow-2xl rounded-3xl bg-white text-[#010415] dark:text-white dark:bg-gray-900">
                <img className="mb-14 w-10 h-10" src={Circle} alt="" />
                <h3 className=" text-6xl font-bold leading-10 tracking-tight mb-4">
                  Gold
                </h3>
                <div className="text-3xl flex items-center mb-12 leading-5 tracking-tighter">
                  <span className="text-base mr-2 -mb-1">$</span>
                  <span>99.99</span>
                </div>
                <p className="font-normal text-base leading-loose text-gray-500 dark:text-gray-300 mb-6">
                  Organic Growth
                </p>
                <ul className="mb-6">
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Manual page analysis by Experts</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Profile optimization</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Targeted niche Organic Followers</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>10-40 followers per day depending on niche </span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Improve Account Reach and Interactions </span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Dedicated Account Manager </span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Daily google sheets updates for analysis.</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Get life time support</span>
                  </li>

                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Influencer Marketing guide </span>
                  </li>
                </ul>
                <Fade bottom>
                  <button className="block py-2 px-6 mx-auto rounded-xl bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-800 text-gray-50 font-bold leading-loose transition duration-200">
                    <Fade bottom>Buy now</Fade>
                  </button>
                </Fade>
              </div>
            </Fade>
            <Fade bottom>
              <div className="pt-14 pb-16 px-8 md:px-16 shadow-2xl rounded-3xl bg-white text-[#010415] dark:text-white dark:bg-gray-900">
                <div className="bg-gray-100 dark:bg-gray-800 max-w-max ml-auto md:-mr-10 rounded-3xl py-2 px-3 uppercase text-xs font-bold tracking-wider text-gray-500 dark:text-gray-300">
                  Trial free
                </div>
                <img className="mb-14 w-10 h-10" src={Circle} alt="" />
                <h3 className=" text-6xl font-bold leading-10 tracking-tight mb-4">
                  Platinum
                </h3>
                <div className="text-3xl flex items-center mb-12 leading-5 tracking-tighter">
                  <span className="text-base mr-2 -mb-1">$</span>
                  <span>199.99</span>
                </div>
                <p className="font-normal text-base leading-loose text-gray-500 dark:text-gray-300 mb-6">
                  Content Creation
                </p>
                <ul className="mb-6">
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Free demo available</span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Get Value Driven Post </span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Includes Content writing </span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Modern and Simplistic design </span>
                  </li>
                  <li className="flex items-start leading-6 font-normal text-gray-400">
                    <img
                      className="relative top-1 pt-px mr-6"
                      src={Checked}
                      alt=""
                    />
                    <span>Daily Hashtag reasearch </span>
                  </li>
                </ul>
                <Fade bottom>
                  <button className="block py-2 px-6 mx-auto rounded-xl bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-800 text-gray-50 font-bold leading-loose transition duration-200">
                    <Fade bottom>Buy now</Fade>
                  </button>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
