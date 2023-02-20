import React from "react";
import Image from "next/image";
import Newspaper from "public/Newspaper.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Build from "./components/Home/Build";
import Code from "public/codewidth.svg";

const Multichannel = () => {
  return (
    <div className="bg-black">
      <Header />
      <div className="bg-black">
        <div className="lg:px-6 flex flex-col md:flex-row md:justify-between xl:mx-6 md:mx-4 lg:mx-0 lg:-ml-5 xl:mt-[72px] justify-center items-center">
          <div className="md:flex md:flex-col md:float-left lg:justify-start lg:w-[540px] xl:w-[850px] 2xl:w-[1200px] 2xl:gap-6 md:w-[600px] md:-mt-14">
            <h1 className="text-white text-center md:text-left font-semibold text-3xl lg:text-5xl xl:text-6xl xl:leading-[70px] 2xl:leading-[80px] px-2 sm:px-20 md:pl-4 py-4 mt-6">
              Perfectly formatted messages for every channel{" "}
            </h1>
            <p className="text-[#8B8B8B] lg:text-[#a9a9a9] xl:mt-6 text-xs md:text-left px-7 sm:px-28 md:px-0 md:pl-4 xl:text-xl xl:leading-10 xl:font-semibold 2xl:font-semibold text-center shadow-2xl opacity-60">
              Courier Templates allow you to deliver the same message across
              multiple channels using the same data. Buttons, links, text, and
              more are auto-formatted for your channel and provider.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start lg:ml-3 md:-ml-44 md:pl-1 py-6">
              <div className="bg-white p-[0.5px] rounded-lg shadow-white">
                <button className="border-none text-lg xl:text-xl xl:py-3 rounded-lg shadow-[inset_0_0px_10px_#EFEFEF] font-semibold  p-2 px-4 bg-[#a513b4] text-white">
                  Get Started for free
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={Newspaper}
              alt="logo"
              className="mb-10 px-8 md:py-12 md:px-0 2xl:-mt-16"
            />
          </div>
        </div>
      </div>



      <div className="bg-black">
        <div className="lg:px-6 flex flex-col md:flex-row md:justify-between xl:mx-6 md:mx-4 lg:mx-0 lg:-ml-5 xl:mt-[72px] justify-center items-center">
          <div className="md:flex md:flex-col md:float-left lg:justify-start lg:w-[540px] xl:w-[850px] 2xl:w-[1200px] 2xl:gap-6 md:w-[600px] md:-mt-14">
            <h1 className="text-white text-center md:text-left font-semibold text-3xl lg:text-5xl xl:text-6xl xl:leading-[70px] 2xl:leading-[80px] px-2 sm:px-20 md:pl-4 py-4 mt-6">
            Easy drag and drop editor for designing templates            </h1>
            <p className="text-[#8B8B8B] lg:text-[#a9a9a9] xl:mt-6 text-xs md:text-left px-7 sm:px-28 md:px-0 md:pl-4 xl:text-xl xl:leading-10 xl:font-semibold 2xl:font-semibold text-center shadow-2xl opacity-60">
              Courier Templates allow you to deliver the same message across
              multiple channels using the same data. Buttons, links, text, and
              more are auto-formatted for your channel and provider.
            </p>
           
          </div>
          <div className="">
            <Image
              src={Newspaper}
              alt="logo"
              className="mb-10 px-8 md:py-12 md:px-0 2xl:-mt-16"
            />
          </div>
        </div>
      </div>


      <div className="bg-black">
        <div className="lg:px-6 flex flex-col md:flex-row-reverse md:justify-between xl:mx-6 md:mx-4 lg:mx-0 lg:-ml-5 xl:mt-[72px] justify-center items-center">
          <div className="md:flex md:flex-col md:float-left lg:justify-start lg:w-[540px] xl:w-[850px] 2xl:w-[1200px] 2xl:gap-6 md:w-[600px] md:-mt-14">
            <h1 className="text-white text-center md:text-right font-semibold text-3xl lg:text-5xl xl:text-6xl xl:leading-[70px] 2xl:leading-[80px] px-2 sm:px-20 md:pl-4 py-4 mt-6">
            Easy drag and drop editor for designing templates            </h1>
            <p className="text-[#8B8B8B] lg:text-[#a9a9a9] xl:mt-6 text-xs md:text-right px-7 sm:px-28 md:px-0 md:pl-4 xl:text-xl xl:leading-10 xl:font-semibold 2xl:font-semibold text-center shadow-2xl opacity-60">
              Courier Templates allow you to deliver the same message across
              multiple channels using the same data. Buttons, links, text, and
              more are auto-formatted for your channel and provider.
            </p>
           
          </div>
          <div className="">
            <Image
              src={Code}
              alt="logo"
              className="mb-10 px-8 md:py-12 md:px-0 2xl:-mt-16"
            />
          </div>
        </div>
      </div>

<Build/>
      <Footer />
    </div>
  );
};

export default Multichannel;
