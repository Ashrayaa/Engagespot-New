import React from "react";
type Props = {};

const PayAsYouGo = () => {
  return (
    <>
      <div className="bg-[#151516] rounded-3xl mt-12 lg:mt-24 p-4 mx-4 sm:mx-8 sm:gap-10 md:p-6 2xl:mx-44 xl:mx-44">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-4xl text-white font-semibold">Pay As you Go</h1>
            <p className="text-[#C0C0C8] text-xs xl:text-lg xl:leading-7 text-center xl:px-28">
              Get started with our on-demand pricing that requires no upfront
              commitment. You&apos;ll be billed as per the usage. Ideal for MVPs
              and pre-seed companies with very low volume requirements.
            </p>
          </div>

          <div className="flex flex-col md:flex-row  md:justify-between mt-12  justify-center items-center text-center md:items-start gap-10 md:px-6 xl:pl-28">
            <div className="flex flex-col gap-4 items-center md:items-start md:text-left">
              <h2 className="text-white font-bold text-3xl lg:text-4xl">
                Standard
              </h2>
              <p className="text-[#C0C0C8] text-sm">
                Essential features to build your notification system.
              </p>
              <h1 className="font-extrabold text-white text-4xl lg:text-4xl">
                $ 19.00
              </h1>
              <p className="text-[#C0C0C8] text-sm">
                per 10K notifications / month
              </p>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-[#AE62A7] rounded-full "></div>
                <p className="text-white text-sm font-medium">
                  Powered by engagespot branding present
                </p>{" "}
              </div>

              <button className="w-[155px] rounded-full font-semibold p-4 bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110 md:mt-12 lg:mt-[73px]">
                Get Started
              </button>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start md:text-left">
              <h2 className="text-white font-bold text-3xl lg:text-4xl">
                Premium
              </h2>
              <p className="text-[#C0C0C8] text-sm">
                Advanced capabilities for scaling products and companies
              </p>
              <h1 className="font-extrabold text-white text-4xl lg:text-4xl    ">
                $ 23.00
              </h1>
              <p className="text-[#C0C0C8] text-sm">
                per 10K notifications / month
              </p>
              <ul className="text-white text-sm leading-5 font-medium">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 bg-[#AE62A7] rounded-full "></div>
                  <li>No branding</li>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 bg-[#AE62A7] rounded-full "></div>
                  <li>Conditional Provider Routing</li>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 bg-[#AE62A7] rounded-full "></div>
                  <li>Internationalisation</li>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 bg-[#AE62A7] rounded-full "></div>
                  <li>Advance analytics</li>
                </div>
              </ul>
              <button className="w-[155px] rounded-full font-semibold p-4 bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110 xl:mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PayAsYouGo;
