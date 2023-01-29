import React from "react";
import Image from "next/image";
import Code from "public/commu.svg";

type Props = {};

const CommunicationLayer = (props: Props) => {
  return (
    <>
      <div className="flex flex-col mt-16 justify-center items-center ">
        <h2 className="text-[#E7E3E3] text-xl px-10 mb-4 text-center font-semibold">
          Simple to use outgoing communication layer{" "}
        </h2>
        <p className="text-[#8B8B8B]  tracking-normal leading-7 lg:text-[#a9a9a9] text-xs  px-9 xl:text-lg xl:font-semibold 2xl:text-xl 2xl:font-semibold text-center shadow-2xl opacity-60">
          Engagespot is built by developers, for developers. Simply use our
          front-end and backend SDKs or REST APIs to build a scalable
          notification infrastructure for your product in minutes.
        </p>
        <div className="-mt-48">
          <Image src={Code} alt="zapier" />
        </div>
      </div>
    </>
  );
};
export default CommunicationLayer;
