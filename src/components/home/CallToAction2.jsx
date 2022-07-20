import React from "react";

function CallToAction2() {
  return (
    <>
      <section
        class="py-36 bg-black w-full"
        style={{
          backgroundImage: `url('https://uploads-ssl.webflow.com/5dcd6ad7e221b6017cfc4706/6222380d3b4baea4500c39bc_body-bg-new.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100vw 100vh",
        }}
      >
        <div class="relative z-10 container mx-auto px-4">
          <h2 class="mb-8 max-w-lg mx-auto font-black text-center text-4xl sm:text-5xl text-white">
            SaaS UI/UX design when you need it.
          </h2>

          <p class="text-white/75 font-medium text-lg max-w-md mx-auto text-center">
            A few slots left (to maintain quality standards, we take on limited
            projects)
          </p>
          <div className="bg-[#1f57D3] py-2 px-6 rounded-lg font-normal text-xl mt-6 drop-shadow-md shadow-md w-fit mx-auto text-white cursor-pointer hover:-translate-y-1 transition duration-300 ease-in-out">
            Get started
          </div>
        </div>
      </section>
    </>
  );
}

export default CallToAction2;
