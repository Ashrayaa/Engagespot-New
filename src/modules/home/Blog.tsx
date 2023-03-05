import React from "react";
import Image from "next/image";

import { BlogList } from "src/components/common/config";

type Props = {};

const Section = ({
  id,
  iconimage,
  title,
}: {
  id: string;
  iconimage: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-3   rounded-3xl bg-[#151516]  hover:animate-pulse ">
      <Image src={iconimage} alt="Inapp" className="rounded-t-3xl"/>

      <h2 className="text-white text-2xl lg:text-3xl font-semibold tracking-wide p-6 px-14">
        {title}
      </h2>
      <h5 className="text-sm text-white px-14 pb-4">Read more</h5>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="xl:mt-32 mt-16">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#E7E3E3] text-3xl lg:text-4xl xl:text-5xl xl:px-44 px-3 tracking-wide mb-4 text-center font-semibold">
          Our blog
        </h2>
        <p className="text-[#C0C0C8] xl:leading-9 xl:px-80  tracking-normal leading-7 lg:text-[16px] text-[14px]  px-8 xl:text-lg xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-semibold text-center">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat aute irure dolor in
          reprehenderit.
        </p>
        <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 sm:grid-cols-1 sm:grid md:grid-cols-2 lg:gap-6 flex flex-col gap-4 px-6 w-full lg:px-12 xl:px-56 2xl:px-72 mt-5 ">
          {BlogList.slice(0, 2).map((blog) => {
            return (
              <Section
                key={blog.id}
                title={blog.title}
                id={""}
                iconimage={blog.iconimage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
