import React from "react";

const PayAsYouGo = () => {
  return (
    <>
      <div className="bg-[#151516] rounded-3xl mt-12 lg:mt-24 p-4 mx-4 sm:mx-8 sm:gap-10 md:p-6 2xl:mx-44 xl:mx-44">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-4xl text-white font-semibold">Pay As you Go</h1>
            <p className="text-[#C0C0C8] text-sm text-center px-6 md:px-20 lg:px-24 xl:px-36">
              Get started with our on-demand pricing that requires no upfront
              commitment. You&apos;ll be billed as per the usage. Ideal for MVPs
              and pre-seed companies with very low volume requirements.
            </p>
          </div>

          <div className="flex flex-col md:flex-row  md:justify-between mt-6  justify-center items-center text-center md:items-start gap-10 md:px-6 xl:px-14">
            <div className="flex flex-col gap-4 md:gap-7 items-center md:items-start md:text-left">
              <h2 className="text-white font-bold text-3xl lg:text-4xl">
                Standard
              </h2>
              <p className="text-[#C0C0C8] text-sm">Essential features to build your notification system.</p>
              <h1 className="font-extrabold text-white text-4xl lg:text-4xl    ">
                $19.00
              </h1>
              <p className="text-[#C0C0C8] text-sm">per 10K notifications / month</p>
              <p className="text-[#C0C0C8] text-sm">Powered by engagespot branding present</p>
              <button className="w-[155px] rounded-full font-semibold p-4 bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
                Get Started
              </button>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start md:text-left">
              <h2 className="text-white font-bold text-3xl lg:text-4xl">
                Premium
              </h2>
              <p className="text-[#C0C0C8] text-sm">Advanced capabilities for scaling products and companies</p>
              <h1 className="font-extrabold text-white text-4xl lg:text-4xl    ">
                $ 23.00
              </h1>
              <p className="text-[#C0C0C8] text-sm">per 10K notifications / month</p>
              <ul className="text-[#C0C0C8] text-xs leading-5">
                <li>No branding</li>
                <li>Conditional Provider Routing</li>
                <li>Internationalisation</li>
                <li>Advance analytics</li>
              </ul>
              <button className="w-[155px] rounded-full font-semibold p-4 bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
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
