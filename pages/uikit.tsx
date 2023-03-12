import React from "react";
import Image from "next/image";
import Newspaper from "public/Newspaper.svg";
import Extension from "public/extension1.svg";
import Extensiontwo from "public/extension2.svg";
import Header from "src/components/header/Header";
import Footer from "src/components/footer/Footer";
import Build from "src/components/common/Build";
import Code from "public/codewidth.svg";
import CTASection from "@/src/modules/home/CTASection";
import { UIkitList } from "src/components/common/config";

const Section = ({
  id,
  iconimage,
  title,
  description,
}: {
  id: string;
  iconimage: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-10 xl:px-10 2xl:py-16 rounded-3xl bg-[#151516] px-5 hover:animate-pulse "data-aos="zoom-out">
      <Image src={iconimage} alt="Inapp" className="w-16" />
      <h2 className="text-white text-[21px] font-semibold tracking-wide">
        {title}
      </h2>
      <p className="text-[#C0C0C8] opacity-80 text-sm text-center">
        {description}
      </p>
    </div>
  );
};

const Multichannels = () => {
  return (
    <div className="bg-black sm:pt-8 antialiased">
      <Header />

      <section className="flex flex-col md:flex-row md:justify-between xl:gap-6 md:mt-16 mt-12 mx-6 lg:px-6">
        <div className="md:w-1/2 flex items-center md:items-start justify-center  md:p-8 xl:pl-14 flex-col gap-3 lg:gap-6 text-center md:text-left "data-aos="fade-right">
          <h2 className="text-[#FFFF] text-4xl leading-10 xl:text-6xl xl:leading-tight font-bold">
            Ready To Use Notification UI Kit
          </h2>

          <p className="text-[#C0C0C8] text-[14px] leading-7 px-4 md:text-left xl:text-lg xl:leading-9 text-center">
            Add a beautiful notification inbox component to your React, Angular,
            Vue.JS & HTML app using our pre-built UI-Kit. Show all notifications
            in a single component inside your app.
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
        <div className="md:w-1/2 hidden md:flex md:h-auto md:overflow-hidden"data-aos="fade-left">
          <Image
            src={Newspaper}
            alt="newsletter"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <div className="xl:mt-24 mt-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#E7E3E3] text-4xl lg:text-4xl xl:text-5xl xl:px-44 px-3 tracking-wide mb-4 text-center font-semibold">
            Features
          </h2>
          <p className="text-[#C0C0C8] xl:leading-9 xl:px-80  tracking-normal leading-7 lg:text-[16px] text-[14px]  px-8 xl:text-lg xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-semibold text-center">
            Save weeks of design and development effort by using our pre-built,
            fully customizable notification UI-Kit in your React, Angular,
            Vue.JS or any other HTML app.
          </p>
          <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 sm:grid  sm:grid-cols-1 md:grid-cols-2 lg:gap-4 flex flex-col gap-4 px-6 w-full lg:px-12 xl:px-32 2xl:px-36 mt-8 ">
            {UIkitList.map((feature) => {
              return (
                <Section
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  id={""}
                  iconimage={feature.iconimage}
                />
              );
            })}
          </div>
        </div>
      </div>

      <CTASection />
      <div className="hidden lg:flex lg:px-6 flex-col justify-center items-center mt-10 xl:mt-20">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          <h1 className="text-white text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:text-7xl xl:px-80 xl:leading-tight">
            Get Started
          </h1>{" "}
          <p className="text-[#C0C0C8] text-xs lg:text-sm xl:text-xl px-5 sm:px-32 md:px-36 lg:px-44 xl:px-[310px] 2xl:px-[400px] 2xl:font-semibold text-center shadow-2xl opacity-90">
            Create a free account and add a complete notification system to your
            product in minutes. No credit card required.{" "}
          </p>
          <button className=" rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl  bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white  transition duration-300 transform hover:scale-110">
            Try for free
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Multichannels;
