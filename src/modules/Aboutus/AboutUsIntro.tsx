import React from "react";

type Props = {};

const AboutUsIntro = (props: Props) => {
  return (
    <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-20">
      <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
        <h1 className="text-white text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:px-52 xl:leading-tight">
          Our mission is to make the best code editor of the world, period{" "}
        </h1>
        <p className=" text-[#C0C0C8] xl:leading-9 tracking-normal leading-7 lg:text-[16px] text-[14px]  px-8 sm:px-20 lg:px-32 xl:px-64 2xl:px-80 xl:text-lg xl:font-light xl:py-4 2xl:text-xl 2xl:font-semibold text-center">
          Suspendisse sed sit non blandit augue cursus risus pharetra neque quam
          magna pharetra semper malesuada ridiculus etiam pellentesque et
          tellus.
        </p>
        {/* <div className="flex flex-row gap-6 justify-center py-6">
        <button className=" rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl  bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white  transition duration-300 transform hover:scale-110">
          Join our team
        </button>
        <button className="rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl text-white bg-[#212123] transition duration-300 transform hover:scale-110 hover:outline">
          Learn more
        </button>
      </div> */}
      </div>
    </div>
  );
};
export default AboutUsIntro;
