import React from "react";
import Image from "next/image";
import Zapie from "public/zapier.svg";

type Props = {};

const Zapier = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row mt-8 justify-center items-center">
      <h2 className="text-[#E7E3E3] text-xl px-10 mb-4 text-center font-semibold">It&apos;s like Zapier for notifications</h2>
      <p className="text-[#8B8B8B]  tracking-normal leading-7 lg:text-[#a9a9a9] text-xs  px-9 xl:text-lg xl:font-semibold 2xl:text-xl 2xl:font-semibold text-center shadow-2xl opacity-60">
        Don&apos;t complicate your backend with AP Integrations of several
        notificationproviders .Just write a single clean integration and then
        send notifications to any service you want.
      </p>
      <Image
        src={Zapie}
        alt="zapier"
        className="w-96 -mt-[440px] px-"
      />
    </div>
  );
};
export default Zapier;