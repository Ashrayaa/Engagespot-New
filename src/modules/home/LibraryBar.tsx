import React from "react";
import Image from "next/image";
import Reacticon from "public/reacticon.svg";
import Javascript from "public/js.svg";
import Node from "public/node.svg";

type Props = {};

const LibraryBar = (props: Props) => {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-b from-[#D6D6D6] to-[#232323] via-[#FFFFFF] p-[0.5px] mt-6 mx-4 lg:mx-44 xl:mx-[300px] 2xl:mx-[450px]">
        <div className="grid grid-flow-row grid-cols-6 border-none rounded-lg text-white gap-1 bg-[#232323] p-2">
          <button className="flex  flex-col font-extralight text-[10px] px-[6px]  justify-center items-center focus:border-[#8D8D8D] rounded-lg lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
            <Image src={Reacticon} alt="Reacticon"  className="w-7 lg:w-12    "/>
            <p>React</p>
          </button>
          <button className="flex flex-col font-extralight text-[10px]  px-[6px] justify-center items-center focus:border-[#8D8D8D] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
            <Image src={Javascript} alt="Reacticon"  className="w-7 lg:w-12    "/>
            <p>Javascript</p>
          </button>
          <button className="flex  flex-col font-extralight text-[10px]  px-[6px] justify-center items-center focus:border-[#8D8D8D] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
            <Image src={Node} alt="Reacticon"  className="w-7 lg:w-12    "/>
            <p>Node</p>
          </button>
 
          <button className="flex  flex-col font-extralight text-[10px]  px-[6px] justify-center items-center focus:border-[#8D8D8D] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
            <Image src={Javascript} alt="Reacticon"  className="w-7 lg:w-12    "/>
            <p>Javascript</p>
          </button> 
          <button className="flex  flex-col font-extralight text-[10px] px-[6px]  justify-center items-center focus:border-[#8D8D8D] rounded-lg lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 focus:border">
            <Image src={Node} alt="Reacticon"  className="w-7 lg:w-12    "/>
            <p>Node</p>
          </button>
          <button className="flex  flex-col font-extralight text-[10px] px-[6px]  justify-center items-center focus:border-[#8D8D8D] rounded-lg lg:font-light lg:px-6 lg:py-4 lg:text-lg gap-4 focus:border">
            <Image src={Javascript} alt="Reacticon" className="w-7 lg:w-12 "    />
            <p>Javascript</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default LibraryBar;
