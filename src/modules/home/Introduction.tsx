import React from "react";
import Image from "next/image";
import Intro from "src/assets/displayimage/Introimage.svg";
import Yolkart from "public/yolkart.png";
import Docmentor from "public/docmentor.png";
import Sameday from "public/sameday.png";
import Link from "next/link";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <>
      <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-24">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 xl:gap-8">
          <h1 className="text-white text-center font-semibold text-3xl sm:text-4xl sm:px-10 md:text-5xl lg:text-6xl xl:font-bold xl:text-8xl xl:px-28 2xl:px-40">
            Product notification infrastructure
          </h1>
          <p className="text-[#C0C0C8] text-xs lg:text-sm xl:text-xl px-5 sm:px-32 md:px-36 lg:px-44 xl:px-[310px]  2xl:font-semibold text-center shadow-2xl opacity-90">
            Add in-app, push, email, sms, whatsapp, slack notification
            capabilities to your product in minutes with Engagespot&apos;s
            product notification infrastructure APIs and SDKs
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center py-6">
              <button className=" rounded-full font-semibold xl:p-6 p-4 xl:text-xl  bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white  transition duration-300 transform hover:scale-110">
                Get Started
              </button>
              <button className="rounded-full font-semibold xl:p-6 p-4 xl:text-xl text-white bg-[#212123] transition duration-300 transform hover:scale-110 hover:outline">
                Book a Demo
              </button>
          </div>
        </div>
        {/* <div className="">
          <Image
            src={Intro}
            alt="logo"
            className="mb-10 px-8 md:py-12 md:px-0 2xl:-mt-16"
          />
        </div> */}
      </div>

      <div className="px-4 flex flex-col gap-6 justify-center items-center xl:mt-20 ">
        <h4 className="text-[#FFFFFF] mt-12 sm:text-[13px] lg:text-lg text-[11px] xl:text-[20px]">
        Works with most popular languages        </h4>
        <div className="flex gap-3 mt-4 lg:gap-16">
          <Image
            src={Yolkart}
            alt="Yolkart"
            className="w-28 lg:w-32 xl:w-52"
            quality={80}
          />
          <Image
            src={Docmentor}
            alt="Docmentor"
            className="w-28 lg:w-32 xl:w-52"
            quality={80}
          />
          <Image
            src={Sameday}
            alt="Sameday"
            className="w-28 lg:w-32 xl:w-52"
            quality={80}
          />
        </div>
      </div>
    </>
  );
};
export default Introduction;
