import React from "react";
import Image from "next/image";
import Reacticon from "public/reacticon.svg";
import Javascript from "public/js.svg";
import Node from "public/node.svg";

type Props = {};

const LibraryBar = (props: Props) => {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-b from-[#D6D6D6] to-[#232323] via-[#FFFFFF] p-[0.5px] mt-6">
        <div className="flex border-none rounded-lg text-white gap-1 bg-[#232323] p-2">
          <div className="flex flex-col font-extralight text-[10px] px-[6px]  justify-center items-center hover:border-[#8D8D8D] rounded-lg lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 hover:border">
            <Image src={Reacticon} alt="Reacticon"  className="w-7 lg:w-12   "/>
            <p>React</p>
          </div>
          <div className="flex flex-col font-extralight text-[10px]  px-[6px] justify-center items-center hover:border-[#8D8D8D] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 hover:border">
            <Image src={Javascript} alt="Reacticon"  className="w-7 lg:w-12   "/>
            <p>Javascript</p>
          </div>
          <div className="flex flex-col font-extralight text-[10px]  px-[6px] justify-center items-center hover:border-[#8D8D8D] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 hover:border">
            <Image src={Node} alt="Reacticon"  className="w-7 lg:w-12   "/>
            <p>Node</p>
          </div>

          <div className="flex flex-col font-extralight text-[10px]  px-[6px] justify-center items-center hover:border-[#8D8D8D] rounded-lg  lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 hover:border">
            <Image src={Javascript} alt="Reacticon"  className="w-7 lg:w-12   "/>
            <p>Javascript</p>
          </div>
          <div className="flex flex-col font-extralight text-[10px] px-[6px]  justify-center items-center hover:border-[#8D8D8D] rounded-lg lg:font-light lg:px-[14px] lg:py-4 lg:text-lg gap-4 hover:border">
            <Image src={Node} alt="Reacticon"  className="w-7 lg:w-12   "/>
            <p>Node</p>
          </div>
          <div className="flex flex-col font-extralight text-[10px] px-[6px]  justify-center items-center hover:border-[#8D8D8D] rounded-lg lg:font-light lg:px-6 lg:py-4 lg:text-lg gap-4 hover:border">
            <Image src={Javascript} alt="Reacticon" className="w-7 lg:w-12"    />
            <p>Javascript</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LibraryBar;
