import React from "react";
import Image from "next/image";
import Zapie from "public/zapier.svg";
import Secured from "public/secured.png";
import Easy from "public/easy.png";
import Affordable from "public/affordable.png";
import Getstarted from "public/getstarted.svg";

type Props = {};

const GetStarted = (props: Props) => {
  return (

    <>
      <div className="flex flex-col mt-8 lg:mt-12 lg:pt-12 lg:border-t lg:border-[#8D8D8D] justify-center items-center bg-[#1f1f1f]">
      
        <h2 className="text-[#E7E3E3] text-2xl px-10 mb-4 mt-12 text-center xl:text-5xl font-semibold">
          Get started
        </h2>

        <p className="text-[#8B8B8B]  tracking-wide leading-7 lg:text-[#a9a9a9] text-xs lg:text-sm px-7 xl:text-lg xl:font-semibold 2xl:text-xl 2xl:font-semibold text-center shadow-2xl opacity-60">
          Create a free account and add a complete notification system to{" "}
          <br></br> your product in minutes. No credit card required.
        </p>

        <div className="bg-white p-[0.5px] rounded-lg shadow-white mt-4">
          <button className="border-none rounded-lg xl:text-[24px] font-semibold  p-2 px-4 bg-gradient-radial from-[#a513b4] via-[#da2fec] to-[#c968d4]  text-white">
            Try for free
          </button>
        </div>

        <div className="lg:-mt-[370px] 2xl:-mt-[500px] -mt-[120px] xl:-mt-[450px]">
          <Image src={Getstarted} alt="Getstarted" className="" />
        </div>

        <div className="flex -mt-40 lg:-mt-96 xl:-mt-[600px]">
          <Image src={Secured} alt="Secured" className="w-[125px] h-[115px] lg:w-[300px] lg:h-[200px]" />
          <Image src={Easy} alt="Easy" className="w-[125px] h-[115px] lg:w-[300px] lg:h-[200px]" />
          <Image src={Affordable} alt="Affordable" className="w-[125px] h-[115px] lg:w-[300px] lg:h-[200px]" />
        </div>
      </div>
    </>
  
  );
};

export default GetStarted;
