import React from "react";
import Image from "next/image";
import Amazon from "/public/amazon.svg";
import Innovation from "/public/innovation.svg";
import Commitment from "/public/commitment.svg";
import Teamwork from "/public/teamwork.svg";
import Ownership from "/public/ownership.svg";
import Openness from "/public/openness.svg";
import Growth from "/public/growth.svg";

import { ValuesList } from "@/src/components/common/config";

type Props = {};
// const Section = ({
//   id,
//   iconimage,
//   title,
//   description,
// }: {
//   id: string;
//   iconimage: string;
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div className="flex flex-row items-start gap-3   ">
//       <Image src={iconimage} alt="Inapp" className="" />
//       <div className="flex flex-col text-left gap-2">
//         <h2 className="text-white text-2xl lg:text-3xl font-semibold tracking-wide p-6 px-14">
//           {title}
//         </h2>
//         <p className="text-white">{description}</p>
//       </div>
//     </div>
//   );
// };

const OurValues = (props: Props) => {
  return (
    <div className="xl:mt-32 mt-16">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#E7E3E3] text-3xl lg:text-4xl xl:text-5xl xl:px-44 px-3 tracking-wide mb-4 text-center font-semibold">
          Our Value
        </h2>
        <p className="text-[#C0C0C8] xl:leading-9 xl:px-80  tracking-normal leading-7 lg:text-[16px] text-[14px]  px-8 xl:text-lg xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-semibold text-center">
          Suspendisse sed sit non blandit augue cursus risus pharetra neque quam
          magna pharetra semper malesuada.{" "}
        </p>
        <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-6 lg:px-12 xl:px-36 pt-6 px-5 flex flex-col gap-4"data-aos="flip-down">
          <div className="flex flex-col gap-6 p-4 lg:p-8 xl:p-12 rounded-3xl bg-[#151516] hover:animate-pulse text-white">
            <div className="flex flex-row gap-4 justify-center">
              <Image src={Innovation} alt="Amazon" className="-mt-10" />
              <div className="flex flex-col gap-3 ">
                <h2 className="text-white text-2xl font-semibold">
                  Innovation
                </h2>
                <p className="text-[#C0C0C8] text-[14px] leading-6">
                  Vel mi enim pellentesque tincidunt ridiculus sed eget libero
                  odio dictum habitasse vitae morbi eros ut sed.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <Image src={Commitment} alt="Amazon" className="-mt-10" />
              <div className="flex flex-col gap-3 ">
                <h2 className="text-white text-2xl font-semibold">
                  Commitment
                </h2>
                <p className="text-[#C0C0C8] text-[14px] leading-6">
                  Vel mi enim pellentesque tincidunt ridiculus sed eget libero
                  odio dictum habitasse vitae morbi eros ut sed.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <Image src={Teamwork} alt="Amazon" className="-mt-10" />
              <div className="flex flex-col gap-3 ">
                <h2 className="text-white text-2xl font-semibold">Teamwork </h2>
                <p className="text-[#C0C0C8] text-[14px] leading-6">
                  Vel mi enim pellentesque tincidunt ridiculus sed eget libero
                  odio dictum habitasse vitae morbi eros ut sed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-8 xl:p-12 rounded-3xl bg-[#151516] hover:animate-pulse text-white"data-aos="flip-up">
            <div className="flex flex-row gap-4 justify-center">
              <Image src={Ownership} alt="Amazon" className="-mt-10" />
              <div className="flex flex-col gap-3 ">
                <h2 className="text-white text-2xl font-semibold">Ownership</h2>
                <p className="text-[#C0C0C8] text-[14px] leading-6">
                  Vel mi enim pellentesque tincidunt ridiculus sed eget libero
                  odio dictum habitasse vitae morbi eros ut sed.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <Image src={Openness} alt="Amazon" className="-mt-10" />
              <div className="flex flex-col gap-3 ">
                <h2 className="text-white text-2xl font-semibold">Openness</h2>
                <p className="text-[#C0C0C8] text-[14px] leading-6">
                  Vel mi enim pellentesque tincidunt ridiculus sed eget libero
                  odio dictum habitasse vitae morbi eros ut sed.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <Image src={Growth} alt="Amazon" className="-mt-10" />
              <div className="flex flex-col gap-3 ">
                <h2 className="text-white text-2xl font-semibold">Growth</h2>
                <p className="text-[#C0C0C8] text-[14px] leading-6">
                  Vel mi enim pellentesque tincidunt ridiculus sed eget libero
                  odio dictum habitasse vitae morbi eros ut sed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col gap-6 p-3 rounded-3xl bg-[#151516] hover:animate-pulse text-white">
            {ValuesList.map((value) => {
              return (
                <Section
                  key={value.id}
                  title={value.title}
                  id={""}
                  iconimage={value.iconimage}
                  description={value.description}
                />
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurValues;
