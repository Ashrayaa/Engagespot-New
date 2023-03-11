import React from "react";

type Props = {};

const Pricingintro = () => {
  return (
    <>
      <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-20">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          <h1 className="text-white text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:px-80 xl:leading-tight">
            Flexible Pricing for companies and developers{" "}
          </h1>{" "}
          <p className="text-[#C0C0C8] text-xs xl:text-lg xl:leading-9 text-center xl:px-80 lg:px-64 md:px-44">
            Transparent, simple, pay-as-you-go monthly pricing
          </p>
          
        </div>
      </div>
    </>
  );
};
export default Pricingintro;
