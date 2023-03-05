import React from "react";
import Image from "next/image";
import Newsletterimg from "public/newsletter.svg";
import Link from "next/link";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <>
      <section className="flex flex-col md:flex-row md:justify-between md:gap-12 rounded-3xl bg-[#151516] mt-20 mx-6 lg:mx-8 xl:mx-24">
        <div className="md:w-3/5 flex items-start justify-center p-8 xl:pl-14 flex-col gap-4 lg:gap-10 text-center md:text-left ">
          {/* md:w-[2500px] lg:w-[900px] xl:w-[1100px] */}
          <h2 className="text-[#E7E3E3] sm:px-14 md:px-0 text-2xl md:text-3xl lg:text-5xl xl:text-6xl tracking-wide font-bold">
            Subscribe to our newsletter
          </h2>

          <div className="relative flex justify-end items-center">
            <input
              type="email"
              className="xl:w-[600px] lg:w-[500px] w-[290px] p-6 md:p-8 rounded-full outline-none outline-[#aa4875] text-[#b8b8bf] bg-[#212123] font-medium  lg:text-2xl"
              placeholder="Enter your email" required
            />
            <button className="absolute mr-2 lg:mr-4 md:items-start rounded-full font-semibold p-4 lg:p-5 lg:px-6 lg:text-xl bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
              Subscribe
            </button>
          </div>
        </div>
        <div className="md:w-2/5 hidden md:flex md:h-auto md:overflow-hidden">
          <Image
            src={Newsletterimg}
            alt="newsletter"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </>
  );
};
export default Newsletter;
