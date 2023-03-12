import React from "react";
import Image from "next/image";
import { TeamList } from "@/src/components/common/config";

type Props = {};
const Section = ({
  id,
  profileimage,
  name,

  designation,
}: {
  id: string;
  profileimage: string;
  name: string;

  designation: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10 xl:px-10 xl:py-16 rounded-3xl bg-[#151516] px-5 hover:animate-pulse "data-aos="zoom-out">
      <Image src={profileimage} alt="Displayimage" className="w-44" />
      <h2 className="text-white text-4xl font-semibold">
        {name}
      </h2>
      <button className="bg-[#212123] text-xs rounded-3xl flex px-8 py-1 text-white">
        {designation}
      </button>
    </div>
  );
};
const AboutUsDetail = (props: Props) => {
  return (
    <>
      <div className="xl:mt-24">
        <div className="flex flex-col justify-center items-center">
          <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 sm:grid  sm:grid-cols-1 md:grid-cols-2 lg:gap-4 flex flex-col gap-4 px-6 lg:px-24 w-full xl:px-32 2xl:px-48 2xl:gap-8 mt-8 ">
            {TeamList.map(
              (team) => {
                return (
                  <Section
                    key={team.id}
                    name={team.name}
                    id={""}
                    profileimage={team.profileimage}
                    designation={team.designation}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsDetail;
