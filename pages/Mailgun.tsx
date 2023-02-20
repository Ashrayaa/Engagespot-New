import React from "react";
import Link from "next/link";
import Image from "next/image";
import Mailgunimg from "public/mailgunintro.svg";
import Header from "src/components/header/Header";
import Footer from "src/components/footer/Footer";

const Mailgun = () => {
  return (
    <div className="bg-black">
    <Header/>
      <div className="bg-black">
        <div className="lg:px-6 flex flex-col md:flex-row md:justify-between xl:mx-6 md:mx-4 lg:mx-0 lg:-ml-5 justify-center items-center">
          <div className="md:flex md:flex-col md:float-left lg:justify-start lg:w-[540px] xl:w-[900px] 2xl:w-[1200px] 2xl:gap-6 md:w-[600px] md:-mt-14">
            <h1 className="text-white text-center md:text-left font-semibold text-3xl lg:text-5xl xl:text-6xl xl:leading-[70px] 2xl:leading-[80px] px-2 sm:px-20 md:pl-4 py-4 mt-6">
              Mailgun + engagespot{" "}
            </h1>
            <p className="text-[#8B8B8B] lg:text-[#a9a9a9] xl:mt-6 text-xs md:text-left px-7 sm:px-28 md:px-0 md:pl-4 xl:text-xl xl:leading-10 xl:font-semibold 2xl:font-semibold text-center shadow-2xl opacity-60">
              Engagespot integrated with SendGrid to deliver your email
              notifications. Add your SendGrid credentials to Knock to build
              cross-channel notification experiences, easily debug messages
              sent, send fewer notifications with batching, and more.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start lg:ml-3 md:-ml-44 md:pl-1 py-6">
              <div className="bg-white p-[0.5px] rounded-lg shadow-white">
                <button className="border-none text-lg xl:text-xl xl:py-3 rounded-lg shadow-[inset_0_0px_10px_#EFEFEF] font-semibold  p-2 px-4 bg-[#a513b4] text-white">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={Mailgunimg}
              alt="logo"
              className=" mb-10 px-8 md:py-12 2xl:-mt-16"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Mailgun;
