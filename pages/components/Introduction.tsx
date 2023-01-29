import React from "react";
import Image from "next/image";
import Intro from "public/Introimage.svg";
import Yolkart from "public/yolkart.png";
import Docmentor from "public/docmentor.png";
import Sameday from "public/sameday.png";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <>
      <div className="bg-black flex flex-col md:flex-row md:justify-around md:mx-4 lg:mx-0 lg:-ml-5 2xl:mt-20 justify-center items-center">
        <div className="md:flex md:flex-col md:float-left lg:justify-start lg:w-[540px] xl:w-[650px] 2xl:w-[800px] 2xl:gap-6 xl:gap-2 2xl:-ml-12 xl:-ml-14 md:w-[600px] md:-mt-14 xl:-mt-32">
          <h1 className="text-white text-center md:text-left font-semibold text-3xl lg:text-5xl 2xl:text-7xl xl:text-6xl xl:leading-[70px] 2xl:leading-[80px] px-2 sm:px-20 md:pl-4 py-4 mt-6">
            Build Notification Infrastructure for your Product
          </h1>
          <p className="text-[#8B8B8B] lg:text-[#a9a9a9] text-xs md:text-left px-7 sm:px-28 md:px-0 md:pl-4 xl:text-lg xl:font-semibold 2xl:text-xl 2xl:font-semibold text-center shadow-2xl opacity-60">
            Say goodbye to building & maintaining a notification micro-service.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start lg:ml-3 md:-ml-44 md:pl-1 py-6">
            <div className="bg-white p-[0.5px] rounded-lg shadow-white">
              <button className="border-none rounded-lg font-semibold  p-2 px-4 bg-[#a513b4] text-white">
                Get Started
              </button>
            </div>
            <div className="bg-gradient-to-r from-[#FF38D1] to-[#262626] via-[#FFFFFF] p-[0.5px] rounded-lg">
              <button className="border-none rounded-lg font-medium p-2 px-4 bg-[#262626] text-white">
                Book Demo
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={Intro}
            alt="logo"
            className="mb-10 px-8 md:py-12 md:px-0 2xl:-mt-16"
          />
        </div>
      </div>
      <div className="px-4 2xl:ml-[430px] xl:ml-[360px]">
        <h4 className="text-[#525252] tracking-widest text-[11px] xl:text-lg 2xl:text-xl">
          TRUSTED BY HAPPY DEVELOPER WORLWIDE
        </h4>
        <div className="flex gap-4 mt-4">
          <Image
            src={Yolkart}
            alt="logo"
            className="w-24 xl:w-36 2xl:w-44 fill-[#6b6b6b]"
          />
          <Image
            src={Docmentor}
            alt="logo"
            className="w-24 xl:w-36 2xl:w-44 fill-[#6b6b6b]"
          />
          <Image
            src={Sameday}
            alt="logo"
            className="w-24 xl:w-36 2xl:w-44 fill-[#6b6b6b]"
          />
        </div>
      </div>
    </>
  );
};
export default Introduction;
