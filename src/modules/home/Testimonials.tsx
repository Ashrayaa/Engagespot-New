import React from "react";
import Image from "next/image";

import { TestimonialList } from "src/components/common/config";
type Props = {};

const Section = ({
  id,
  iconimage,
  title,
  description,
  name,
  designation,
}: {
  id: string;
  iconimage: string;
  title: string;
  description: string;
  name: string;
  designation: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-3 py-10 xl:px-10 2xl:py-16 rounded-3xl bg-[#151516] px-5 hover:animate-pulse ">
      <h2 className="text-white text-[21px] font-semibold tracking-wide">
        {title}
      </h2>
      <p className="text-[#C0C0C8] opacity-80 text-sm ">
        {description}
      </p>
      <div className="flex gap-3 mt-3">
        <Image src={iconimage} alt="Inapp" className="w-16" />

        <div className="flex flex-col gap-2 justify-center ">
          <h2 className="text-[#FFFFFF] font-semibold text-base">{name}</h2>
          <h4 className="text-[#C0C0C8] font-normal text-sm">{designation}</h4>
        </div>
      </div>
    </div>
  );
};
const Testimonials = () => {
  return (
    <div className="xl:mt-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#E7E3E3] text-2xl lg:text-4xl xl:text-5xl xl:px-44 px-3 tracking-wide mb-4 text-center font-semibold">
          What our clients say
        </h2>
        <p className="text-[#C0C0C8] xl:leading-9 xl:px-80  tracking-normal leading-7 lg:text-[16px] text-[14px]  px-8 xl:text-lg xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-semibold text-center">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat aute irure dolor in
          reprehenderit.
        </p>
        <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:gap-4 flex flex-col gap-4 px-6 w-full lg:px-12 xl:px-32 2xl:px-36 mt-5 ">
          {TestimonialList.map((testimonial) => {
            return (
              <Section
                key={testimonial.id}
                title={testimonial.title}
                description={testimonial.description}
                id={""}
                iconimage={testimonial.iconimage}
                name={testimonial.name}
                designation={testimonial.designation}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
