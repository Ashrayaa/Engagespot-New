import React from "react";
import Image from "next/image";
import Commu1 from "public/commu.png";
import Commu2 from "public/commu2.svg";

type Props = {};

const CommunicationLayer = (props: Props) => {
 
  return (
    <>
      <div className="flex flex-col lg:mt-72 mt-10 justify-center items-center">
        <h2 className="text-[#E7E3E3] lg:text-4xl text-2xl xl:text-5xl px-10 mb-4 text-center font-semibold">
          Simple to use outgoing communication layer{" "}
        </h2>
        <p className="text-[#8B8B8B] lg:text-[#c3c3c3] xl:leading-9 xl:tracking-wide  tracking-normal leading-7 lg:text-[16px] text-xs  px-9 xl:text-lg xl:font-light xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-semibold text-center shadow-2xl opacity-60">
          Engagespot is built by developers, for developers. Simply use our
          front-end and backend SDKs or REST APIs to build a scalable
          notification infrastructure for your product in minutes.
        </p>
        <div className="-mt-44 ml-4 lg:hidden">
          <Image src={Commu1} alt="communication" quality={80}
      />
        </div>
        <div className="hidden xl:-mt-[620px] 2xl:-mt-[600px] lg:flex -mt-[410px]">
          <Image src={Commu2} alt="communication" quality={80}/>
        </div>
      </div>
    </>
  );
};

export default CommunicationLayer;