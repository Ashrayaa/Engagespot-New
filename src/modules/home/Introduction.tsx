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
      <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-20">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          <h1 className="text-white text-center font-semibold px-3 text-4xl leading-snug sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:text-[116px] xl:px-16 2xl:px-32 xl:leading-none">
            Product notification 🚀 infrastructure
          </h1>
          <p className="text-[#C0C0C8] xl:leading-9 tracking-normal leading-7 lg:text-[16px] text-[14px]  px-8 sm:px-20 lg:px-32 xl:px-72 2xl:px-80 xl:text-[24px]  xl:py-4 2xl:text-xl xl:font-semibold text-center">
            Add in-app, push, email, sms, whatsapp, slack notification
            capabilities to your product in minutes with Engagespot&apos;s
            product notification infrastructure APIs and SDKs
          </p>
          <div className="flex flex-row gap-6 justify-center py-6">
              <button className=" rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl  bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white  transition duration-300 transform hover:scale-110">
                Get Started
              </button>
              <button className="rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl text-white bg-[#212123] transition duration-300 transform hover:scale-110 hover:outline">
                Book a Demo
              </button>
          </div>
        </div>
       
      </div>

      <div className="px-4 flex flex-col gap-6 justify-center items-center xl:mt-12 ">
        <h4 className="text-[#FFFFFF] mt-12 sm:text-[13px] lg:text-lg text-[11px] xl:text-[20px]">
        Trusted By Happy Developers Worldwide       </h4>
        {/* animate-move infinite */}
        <div className="flex gap-3 mt-4 lg:gap-16 ">
          <Image
            src={Yolkart}
            alt="Yolkart"
            className="w-28 lg:w-32 xl:w-52"
            quality={80}
          />
           <Image
            src={Sameday}
            alt="Sameday"
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
            src={Yolkart}
            alt="Yolkart"
            className=" hidden md:flex w-28 lg:w-32 xl:w-52"
            quality={80}
          />
            <Image
            src={Sameday}
            alt="Sameday"
            className=" hidden lg:flex w-28 lg:w-32 xl:w-52"
            quality={80}
          />
          
        </div>
      </div>
    </>
  );
};
export default Introduction;
