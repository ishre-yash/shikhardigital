import React, { useState } from "react";
import Fade from "react-reveal/Fade";

function Faq() {
  const [faq, setFaq] = useState([
    {
      title: "Can I trial Suggestr before paying",
      answer:
        "Yes, we want you to try Suggestr on your store for 30 days, free of charge, before committing. The analytics dashboard embedded within your Shopify Admin will tell you exactly how much addition upsells and cross-sells revenue Suggestr has generated for your brand.",
      open: false,
    },
    {
      title: "Is there any Free plan for small stores?",
      answer:
        "Unfortunately, there is no free plan available, but if you are just starting out or you are an agency looking to explore our solution – fill the demo form and we will be happy to discuss special terms with you.",
      open: false,
    },
    {
      title: "Can I trial Suggestr before paying?",
      answer:
        "Yes, we want you to try Suggestr on your store for 30 days, free of charge, before committing. The analytics dashboard embedded within your Shopify Admin will tell you exactly how much addition upsells and cross-sells revenue Suggestr has generated for your brand.",
      open: false,
    },
    {
      title: "Can I make manual recommendations for some items?",
      answer:
        "Yes, we support some degree of manual intervention through a No-Show List. This allows you to tag specific products as 'no show' that will not be displayed in recommendations. However, we do not support manual recommendations because we have seen that our visual AI generates higher conversions than humans for any shop with over 25 SKUs.",
      open: false,
    },
    {
      title: "What kind of support do you offer?",
      answer:
        "We offer 24x7 live support from within the app itself. This includes initial setup and visual configuration. We also offer fast email support within 24 hours for any complex queries. Our customer happiness manager will follow-up with you every month to ensure your satisfaction  .",
      open: false,
    },
  ]);

  const handleOpenClick = (index) => {
    const f = [...faq];
    f[index].open = !f[index].open;
    setFaq(f);
  };
  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-6 md:py-28  md:bg-white dark:bg-[#010415] px-1" id="faq">
      <h1 className="mb-12 max-w-4xl text-center text-4xl font-bold tracking-tighter dark:text-white text-[#1d1d1f] md:text-7xl select-none">
        <Fade bottom>FAQs </Fade>
      </h1>
      <section className="w-full rounded-3xl bg-[#f1f4f6] dark:bg-[#141727] p-10 md:max-w-4xl">
        {faq.map((f, index) => {
          return (
            <div className="border-b border-[#86868b26] py-6" key={index}>
              <div
                className="flex w-full cursor-pointer items-center justify-between"
                onClick={() => handleOpenClick(index)}
              >
                <div
                  className={`text-xl font-medium tracking-tighter select-none ${
                    f.open ? "text-[#007aff]" : "text-[#1d1d1f] dark:text-white"
                  } `}
                >
                  <Fade bottom>{f.title} </Fade>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#1d1d1f] dark:border-white p-0.5 text-center font-bold">
                  <svg
                    className={`${
                      f.open ? "rotate-45" : "rotate-0"
                    } transition  duration-150 fill-current text-black dark:text-white`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentcolor"
                    stroke="currentcolor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
              {f.open && (
                <div className=" mt-3 w-full text-left text-base font-normal -tracking-wider text-[#1d1d1f] dark:text-white/80 select-none">
                  <Fade bottom>{f.answer} </Fade>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Faq;
