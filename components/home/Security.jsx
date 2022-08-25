import React from "react";

function Security() {
  return (
    <>
      <section
        className="container mx-auto bg-white dark:bg-[#010415] select-none"
        id="security"
      >
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto pt-8 md:pt-32 px-4">
          <div className="w-full md:w-[50%]">
            <img
              src="https://gramglow.com/wp-content/uploads/2022/05/Image-15-7.png"
              alt=""
            />
          </div>
          <div className="md:w-[50%] w-full pt-10 text-center md:text-left">
            <div className="text-xs font-medium tracking-tighter text-gray-600 dark:text-gray-300 ">
              SECURITY
            </div>
            <h2 className="mb-2 text-4xl font-bold tracking-tighter text-[#1d1d1f] dark:text-white md:text-4xl w-full md:w-[75%] select-none">
              Service Security
            </h2>
            <p className=" text-md font-normal tracking-tighter text-gray-600 dark:text-gray-300 mb-6 w-full md:w-[75%] select-none">
              Our top concern is to keep your account safe. Before we adopt any
              of our growth techniques or login processes, we put them through a
              thorough testing process, and we continue to test them on a
              regular basis.
              <br />
              <br />
              Unlike many other services, we have updated our system to be
              completely compliant with Instagram’s requirements and not cause
              any restrictions as their security measures for 3rd party services
              and logins increased in 2019. When working with us, you may also
              maintain your 2 Factor Authentication active, which is linked to
              our device and phone number.
            </p>
            <button className="w-fit py-2 px-6 rounded-xl bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-800 text-gray-50 font-bold leading-loose transition duration-200 select-none">
              To Security
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto pt-8 px-4">
          <div className="md:w-[50%] w-full pt-10 text-center md:text-left ">
            <div className="text-xs font-medium tracking-tighter text-gray-600 dark:text-gray-300 ">
              BLOCK PREVENTION
            </div>
            <h2 className="mb-2 w-full md:w-[75%] text-4xl font-bold tracking-tighter text-[#1d1d1f] dark:text-white md:text-4xl">
              Proxy IP’s & GPS Spoofing
            </h2>
            <p className=" text-md font-normal tracking-tighter text-gray-600 dark:text-gray-300 mb-6 w-full md:w-[75%]">
              When working on your account, we make sure that each device and
              client account has a different IP address by using dedicated IP
              addresses. In order to alter data and make it appear as though our
              device is nearby the client’s location, we also utilize GPS
              spoofing. We do this to prevent blocks because Instagram may
              decide to restrict a device if it determines that it is engaging
              with your account from an entirely different location.
              <br />
              <br />
              Our security precautions make sure we maintain a secure and
              efficient workflow on your account without blocks.
            </p>
            <button className="w-fit py-2 px-6 rounded-xl bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-800 text-gray-50 font-bold leading-loose transition duration-200">
              To Security
            </button>
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src="https://gramglow.com/wp-content/uploads/2022/03/img2-1.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Security;
