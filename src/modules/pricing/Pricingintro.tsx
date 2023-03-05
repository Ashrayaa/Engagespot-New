import React from "react";
import Image from "next/image";
import Intro from "public/integration_bg.svg";

type Props = {};

const Pricingintro = (props: Props) => {
  return (
    <>
      <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-20">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          <h1 className="text-white text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:text-7xl xl:px-80 xl:leading-tight">
            Flexible Pricing for companies and developers{" "}
          </h1>{" "}
          <p className="text-[#C0C0C8] text-xs lg:text-sm xl:text-xl px-5 sm:px-32 md:px-36 lg:px-44 xl:px-[310px]  2xl:font-semibold text-center shadow-2xl opacity-90">
            Transparent, simple, pay-as-you-go monthly pricing
          </p>
          
        </div>
      </div>
    </>
  );
};
export default Pricingintro;
