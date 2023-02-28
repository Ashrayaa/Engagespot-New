import React from "react";
import Image from "next/image";
import { ProvidersList } from "@/src/components/common/config";

const Section = ({
  id,
  iconimage,
  title,
  description,
  service,
}: {
  id: string;
  iconimage: string;
  title: string;
  description: string;
  service: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10 xl:px-10 rounded-3xl bg-[#151516] px-5 hover:animate-pulse ">
      <Image src={iconimage} alt="Inapp" className="w-16" />
      <h2 className="text-white text-[21px] font-semibold tracking-wide">
        {title}
      </h2>
      <button className="bg-[#212123] rounded-3xl flex px-8 py-1 text-white">
        {service}
      </button>
      <p className="text-[#C0C0C8] opacity-80 text-sm text-center">
        {description}
      </p>
      <h3 className="text-white font-semibold">View Docs</h3>
    </div>
  );
};

const ProvidersGrid = () => {
  return <><div className="xl:mt-24">
  <div className="flex flex-col justify-center items-center">
    <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 sm:grid  sm:grid-cols-1 md:grid-cols-2 lg:gap-4 flex flex-col gap-4 px-6 w-full lg:px-12 xl:px-32 2xl:px-36 mt-8 ">
      {ProvidersList.map((provider: { id: React.Key | null | undefined; title: string; description: string; iconimage: string; service: string; }) => {
        return (
          <Section
                key={provider.id}
                title={provider.title}
                description={provider.description}
                id={""}
                iconimage={provider.iconimage} service={provider.service}            
          />
        );
      })}
    </div>
  </div>
</div></>;
};
export default ProvidersGrid;
