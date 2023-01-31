import React from "react";
import Image from "next/image";
import Code from "public/code.svg";
import Codedesk from "public/codedesk.svg";
type Props = {};

const Fordevelopers = (props: Props) => {
  return (
    <>
      <div className="flex flex-col bg-hero-pattern lg:mt-24 mt-10 bg-no-repeat bg-cover bg-center bg-fixed justify-center items-center ">
        <h2 className="text-[#E7E3E3] text-2xl lg:text-4xl xl:text-5xl px-10 mb-4 text-center font-semibold">
          Built for Developers
        </h2>
        <p className="text-[#8B8B8B] lg:text-[#c3c3c3] xl:tracking-wider tracking-normal leading-7 lg:text-[16px] text-xs  px-9 xl:text-lg xl:font-semibold 2xl:text-xl 2xl:font-semibold text-center shadow-2xl opacity-60">
          Engagespot is built by developers, for developers. Simply use our
          front-end and backend <br></br> SDKs or REST APIs to build a scalable
          notification infrastructure for your product in minutes.
        </p>
        <div className="mt-10 ml-4 lg:hidden">
          <Image src={Code} alt="zapier" />
        </div>
        <div className="hidden lg:flex mt-12">
          <Image src={Codedesk} alt="zapier" />
        </div>
      </div>
    </>
  );
};

export default Fordevelopers;
