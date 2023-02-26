import React from "react";
import Image from "next/image";
import Zapie from "public/zapier.png";
import Zapier2 from "public/zapier2.svg";

type Props = {};

const Zapier = (props: Props) => {
  return (
    <div className="flex flex-col mt-20 justify-center items-center md:animate-wipe-enter md:duration-1000 md:delay-500 xl:mt-28">

      <h2 className="text-[#E7E3E3] text-2xl lg:text-4xl xl:text-5xl px-10 mb-4 text-center font-semibold">
        It&apos;s like Zapier for notifications
      </h2>

      <p className="text-[#C0C0C8] xl:leading-9 tracking-normal leading-7 lg:text-[16px] text-[14px]  px-8 xl:text-lg xl:font-light xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-semibold text-center">
        Don&apos;t complicate your backend with AP Integrations of several
        notificationproviders. <br></br>Just write a single clean integration and then
        send notifications to any service you want.
      </p>

      <div>
        <Image
          src={Zapie}
          alt="zapier"
          className="w-96 lg:hidden -mt-[440px]" 
        />
      </div>

      <div>
        <Image
          src={Zapier2}
          alt="zapier2"
          className="hidden lg:flex xl:-ml-10 2xl:-ml-0 -mt-10" 
        />
      </div>

    </div>
  );
};
export default Zapier;
