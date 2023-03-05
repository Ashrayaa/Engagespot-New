import React from "react";
import Image from "next/image";
import Intro from "public/build.png";
import Link from "next/link";

type Props = {};

const Build = (props: Props) => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl xl:m-12  mx-4">
        <div className="border gap-5 lg:py-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a] lg:px-6 xl:ml-[0.5px] flex flex-col md:flex-row md:justify-between md:mx-4 lg:mx-0 lg:-ml-5 justify-center items-center">
          {/* 2xl:-ml-12 xl:-ml-14 */}
          <div className="md:flex md:flex-col md:float-left md:justify-start md:w-[2900px] lg:w-[540px] xl:w-[2250px] 2xl:w-[1200px] 2xl:gap-6 xl:gap-2 md:-mt-14">
            <h1 className="text-white text-center md:text-left font-semibold text-3xl md:text-4xl lg:text-5xl  xl:leading-[70px] 2xl:leading-[80px] px-2 sm:px-20 md:pl-4 py-4 mt-6">
              Build your first notification in minutes{" "}
            </h1>
            <p className="text-[#8B8B8B] lg:text-[#a9a9a9] xl:mt-3 text-xs md:text-left px-7 sm:px-28 md:px-0 md:pl-4 xl:text-xl xl:tracking-wide xl:font-medium 2xl:text-3xl 2xl:font-semibold text-center shadow-2xl opacity-60">
              Create a free account and add a complete notification system to
              your product in minutes. No credit card required.{" "}
            </p>
            <div className="flex gap-4 justify-center xl:mt-1 lg:justify-start lg:ml-3 md:pl-1 py-6">
              <div className="bg-white p-[0.5px] rounded-lg shadow-white">
                <button className="border-none text-lg xl:text-xl xl:py-3 rounded-lg shadow-[inset_0_0px_10px_#EFEFEF] font-semibold  p-2 px-4 bg-[#a513b4] text-white">
                  Try for free
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image src={Intro} alt="logo" className="mb-10 px-8 2xl:-mt-16" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Build;
