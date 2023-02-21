import React from "react";
import Image from "next/image";
import Intro from "public/integration_bg.svg";

type Props = {};

const Pricingintro = (props: Props) => {
  return (
    <div className="relative z-0">
      <div className="flex justify-center items-center">
        <Image src={Intro} alt="intro image" className="lg:-mt-20" />
      </div>
      {/* <div className="lg:hidden flex justify-center items-center">
        <Image src={Intro} alt="intro image" className="-mt-20" />
      </div> */}
      <div className="absolute -mt-[260px] sm:-mt-[390px] md:-mt-[470px] lg:-mt-[600px] xl:-mt-[600px] 2xl:-mt-[590px] flex flex-col rounded-xl lg:rounded-none p-10 gap-8 lg:gap-8 justify-center items-center text-white z-10 lg:mx-0 ">
        <h1 className="font-semibold text-center leading-10 text-[27px] md:text-4xl lg:text-5xl lg:leading-normal xl:text-[75px] xl:leading-normal 2xl:text-[80px] 2xl:leading-normal">
          Simple Pricing{" "}
        </h1>
        <p className="lg:text-sm -mt-6 text-center text-xs xl:text-xl 2xl:text-2xl">
          Building a sophisticated transactional notification system in your
          product needs lot of engineering effort. Why build from scratch when
          you can just buy and use it from day one?{" "}
        </p>
      </div>
    </div>
  );
};
export default Pricingintro;
