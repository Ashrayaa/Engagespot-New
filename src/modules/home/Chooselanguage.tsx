import React from "react";
import Image from "next/image";
import Code from "public/code.svg";
import Codedesk from "public/codedesk.svg";
import Light from "public/light.png";
import LibraryBar from "./LibraryBar";
import Reacticon from "public/reacticon.svg";
import Ellipse from "src/assets/backgroundimage/ellipse.svg";
import Javascript from "public/js.svg";
import Node from "public/node.svg";
//import Ellipse from "public/ellipse.png";

type Props = {};

const Fordevelopers = (props: Props) => {
  return (
    <div className="">
      <div className="flex flex-col bg-hero-pattern lg:mt-24 mt-10 bg-no-repeat bg-cover bg-center bg-fixed justify-center items-center ">
        <h2 className="text-[#E7E3E3] text-2xl lg:text-4xl xl:text-5xl px-10 mb-4 text-center font-semibold">
          Built for Developers
        </h2>
        <p className="text-[#8B8B8B] lg:text-[#c3c3c3] xl:leading-9 xl:tracking-wide  tracking-normal leading-7 lg:text-[16px] text-xs  px-9 xl:text-lg xl:font-light xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-semibold text-center shadow-2xl opacity-60">
          Engagespot is built by developers, for developers. Simply use our
          front-end and backend <br></br> SDKs or REST APIs to build a scalable
          notification infrastructure for your product in minutes.
        </p>
        <div className="relative z-20 flex flex-col justify-center items-center">
          {/* <LibraryBar/> */}
          <div className="rounded-lg bg-gradient-to-b from-[#D6D6D6] to-[#232323] via-[#FFFFFF] p-[0.5px] z-10 mt-6 mb-12 mx-4 lg:mx-44 xl:mx-[360px] 2xl:mx-[450px]">
            <div className="grid grid-flow-row grid-cols-6  border-none rounded-lg text-white gap-1 bg-[#232323] p-2">
              <button className="flex  flex-col font-extralight text-[10px] px-[6px]  justify-center items-center focus:border-[#8D8D8D] rounded-lg lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
                <Image
                  src={Reacticon}
                  alt="Reacticon"
                  className="w-7 lg:w-12    "
                />
                <p>React</p>
              </button>
              <button className="flex flex-col font-extralight text-[10px]  px-[6px] justify-center items-center focus:border-[#8D8D8D] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
                <Image
                  src={Javascript}
                  alt="Reacticon"
                  className="w-7 lg:w-12    "
                />
                <p>Javascript</p>
              </button>
              <button className="flex  flex-col font-extralight text-[10px]  px-[6px] justify-center items-center focus:border-[#8D8D8D] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
                <Image src={Node} alt="Reacticon" className="w-7 lg:w-12    " />
                <p>Node</p>
              </button>

              <button className="flex  flex-col font-extralight text-[10px]  px-[6px] justify-center items-center focus:border-[#8D8D8D] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
                <Image
                  src={Javascript}
                  alt="Reacticon"
                  className="w-7 lg:w-12    "
                />
                <p>Javascript</p>
              </button>
              <button className="flex  flex-col font-extralight text-[10px] px-[6px]  justify-center items-center focus:border-[#8D8D8D] rounded-lg lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
                <Image src={Node} alt="Reacticon" className="w-7 lg:w-12    " />
                <p>Node</p>
              </button>
              <button className="flex  flex-col font-extralight text-[10px] px-[6px]  justify-center items-center focus:border-[#8D8D8D] rounded-lg lg:font-light lg:px-6 lg:py-4 lg:text-lg gap-4 focus:border">
                <Image
                  src={Javascript}
                  alt="Reacticon"
                  className="w-7 lg:w-12 "
                />
                <p>Javascript</p>
              </button>
            </div>
          </div>

          <div className="ml-4 lg:hidden">
            <Image src={Code} alt="code" />
          </div>
          <div className="hidden lg:flex z-20">
            <Image src={Codedesk} alt="codedesk" className="" />
          </div>

          <div className="hidden z-0 absolute lg:flex mt-[400px]">
            <Image src={Ellipse} alt="ellipse" className="w-auto" />
          </div>
          {/* <div className="hidden lg:flex justify-center items-center">
              <Image src={Light} alt="intro image" className="lg:-mt-[330px]" />
            </div>
          <div className="hidden lg:flex justify-center items-center">
              <Image src={Light} alt="intro image" className="lg:" />
            </div>

          <div className="hidden absolute lg:flex -mx-4 ">
            <Image src={Ellipse} alt="ellipse" /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Fordevelopers;
