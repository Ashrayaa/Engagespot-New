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
    <div className="flex flex-col justify-center items-start gap-3   rounded-3xl bg-[#151516]  hover:animate-none ">
      <Image src={iconimage} alt="Inapp" className="rounded-t-3xl" />

      <h2 className="text-white text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-wide p-6 px-14 hover:text-[#aa4875]">
        {title}
      </h2>
      <h5 className="text-sm text-white px-14 pb-4">Read more</h5>
    </div>
  );
};

const BlogsGrid = () => {
  return (
    <div className="xl:mt-32 mt-16">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#E7E3E3] text-3xl lg:text-4xl xl:text-5xl xl:px-44 px-3 tracking-wide mb-4 text-center font-semibold">
          Latest posts{" "}
        </h2>

        <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 2xl:grid-cols- sm:grid-cols-1 sm:grid md:grid-cols-2 lg:gap-6 flex flex-col gap-4 px-6 w-full lg:px-6 xl:px-28 2xl:px-40 2xl:gap-12 mt-5 ">
          {BlogList.map((blog) => {
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
        <button className="mt-10 rounded-full font-semibold p-4 xl:px-8 xl:text-2xl bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
            Next
          </button>
      </div>
    </div>
  );
};

export default BlogsGrid;
