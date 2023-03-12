import React from "react";
import Image from "next/image";
import 'animate.css';
import { Featurelist } from "src/components/common/config";

type Props = {};

const Section = ({
  id,
  iconimage,
  title,
  description,
}: {
  id: string;
  iconimage: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-10 xl:px-10 2xl:py-16 rounded-3xl bg-[#151516] px-5 ">
      <Image src={iconimage} alt="Inapp" className="w-16" />
      <h2 className="text-white text-[21px] font-semibold tracking-wide">
        {title}
      </h2>
      <p className="text-[#C0C0C8] opacity-80 text-sm text-center">
        {description}
      </p>
    </div>
  );
};

const Features = (props: Props) => {
  return (
    <div className="xl:mt-24">
      <div className="flex flex-col justify-center items-center animate__animated animate__slideInUp">
        <h2 className="text-[#E7E3E3] text-2xl lg:text-4xl xl:text-5xl xl:px-44 px-3 tracking-wide mb-4 text-center font-semibold">
          Features to build the best multi-channel notification experience
        </h2>
        <p className="text-[#C0C0C8] xl:leading-9 xl:px-80  tracking-normal leading-7 lg:text-[16px] text-[14px]  px-8 xl:text-lg xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-semibold text-center">
          We&apos;ve built awesome features so you don&apos;t have to start from
          scratch. Just integrate our SDKs and APIs to build a scalable
          notification system for your product.
        </p>
        <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 sm:grid  sm:grid-cols-1 md:grid-cols-2 lg:gap-4 flex flex-col gap-4 px-6 w-full lg:px-12 xl:px-32 2xl:px-36 mt-8 animate__animated animate__fadeInUp">
          {Featurelist.map((feature) => {
            return (
              <Section
                key={feature.id}
                title={feature.title}
                description={feature.description}
                id={""}
                iconimage={feature.iconimage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
