import React from "react";
import Image from "next/image";
import Code from "public/code.png";
import Codedesk from "public/codedesk.svg";
import Light from "public/light.png";
import LibraryBar from "./LibraryBar";
import Reacticon from "public/reacticon.svg";
import Ellipse from "src/assets/backgroundimage/ellipse.svg";
import Javascript from "public/js.svg";
import Node from "public/node.svg";

type Props = {};

const Fordevelopers = (props: Props) => {
  return (
    <div className="xl:mt-32">
      <div className="flex flex-col bg-hero-pattern lg:mt-24 mt-10 bg-no-repeat bg-cover bg-center bg-fixed justify-center items-center ">
        <h2 className="text-[#E7E3E3] tracking-wider text-2xl lg:text-4xl xl:text-5xl px-10 mb-4 text-center font-semibold">
          Built for Developers
        </h2>
        <p className="text-[#C0C0C8] xl:leading-9 leading-7 lg:text-[16px] text-[14px] xl:px-72 2xl:px-80 px-12 xl:text-lg xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-medium text-center">
          Engagespot is built by developers, for developers. Simply use our
          front-end and backend SDKs or REST APIs to build a scalable
          notification infrastructure for your product in minutes.
        </p>
        <div className="relative z-20 flex flex-col justify-center items-center" data-aos="zoom-in-up">
          {/* <LibraryBar/> */}
            <div className="grid grid-flow-row grid-cols-6  border-none rounded-lg text-white gap-1 bg-[#0D0D11] p-2 mx-6 mt-6">
              <button className="flex  flex-col font-extralight text-[10px] px-[6px]  justify-center items-center focus:border-[#8D8D8D] focus:bg-[#303034] rounded-lg lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border checked:">
                <Image
                  src={Reacticon}
                  alt="Reacticon"
                  className="w-7 lg:w-12    "
                />
                <p>React</p>
              </button>
              <button className="flex flex-col font-extralight text-[10px]  px-[6px] justify-center items-center focus:border-[#8D8D8D] focus:bg-[#303034] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
                <Image
                  src={Javascript}
                  alt="Reacticon"
                  className="w-7 lg:w-12    "
                />
                <p>Javascript</p>
              </button>
              <button className="flex  flex-col font-extralight text-[10px]  px-[6px] justify-center items-center focus:border-[#8D8D8D] focus:bg-[#303034] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
                <Image src={Node} alt="Reacticon" className="w-7 lg:w-12    " />
                <p>Node</p>
              </button>

              <button className="flex  flex-col font-extralight text-[10px]  px-[6px] justify-center items-center focus:border-[#8D8D8D] focus:bg-[#303034] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
                <Image
                  src={Javascript}
                  alt="Reacticon"
                  className="w-7 lg:w-12    "
                />
                <p>Javascript</p>
              </button>
              <button className="flex  flex-col font-extralight text-[10px] px-[6px]  justify-center items-center focus:border-[#8D8D8D] focus:bg-[#303034] rounded-lg lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
                <Image src={Node} alt="Reacticon" className="w-7 lg:w-12    " />
                <p>Node</p>
              </button>
              <button className="flex  flex-col font-extralight text-[10px] px-[6px]  justify-center items-center focus:border-[#8D8D8D] focus:bg-[#303034] rounded-lg lg:font-light lg:px-6 lg:py-4 lg:text-lg gap-4 focus:border">
                <Image
                  src={Javascript}
                  alt="Reacticon"
                  className="w-7 lg:w-12 "
                />
                <p>Javascript</p>
              </button>
            </div>
          </div>

          <div className="ml-4 mt-6 lg:w-[900px] "data-aos="zoom-in-up">
            <Image src={Code} alt="code" />
          </div>
          {/* <div className="hidden lg:flex z-20">
            <Image src={Code} alt="codedesk" className="" />
          </div> */}

         
        </div>
      </div>
  );
};

export default Fordevelopers;
