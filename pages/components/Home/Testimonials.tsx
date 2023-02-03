import React from "react";
import Image from "next/image";
import Person from "public/person.png";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 -mt-36 lg:-mt-[350px] xl:-mt-[480px] 2xl:-mt-[440px]">
        <h1 className="text-[#8B8B8B] xl:text-2xl">TESTIMONIALS</h1>
        <h1 className="text-[#E7E3E3] text-2xl xl:text-5xl px-10 text-center font-semibold">
          Love from Customers
        </h1>

        <div className="px-1 lg:grid lg:grid-flow-row lg:grid-cols-3 lg:mx-4 xl:mt-12 xl:mx-32 2xl:mx-40">
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-start gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              <div className="flex justify-center gap-4">
                <Image
                  src={Person}
                  alt="In-app notifications"
                  className="w-16"
                />
                <div className="flex flex-col">
                  <h2 className="text-white text-lg font-semibold tracking-wide">
                    John Luther{" "}
                  </h2>
                  <h3 className="text-white opacity-80 ">@john_luther</h3>{" "}
                </div>
              </div>
              <p className="text-[#8B8B8B] opacity-80 text-xs xl:text-[14px] leading-5">
                It&apos;s one of those tools that feels so intuitive, and so
                obvious, that any terminal experience without it feels broken by
                comparison.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-start gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              <div className="flex justify-center gap-4">
                <Image
                  src={Person}
                  alt="In-app notifications"
                  className="w-16"
                />
                <div className="flex flex-col">
                  <h2 className="text-white text-lg font-semibold tracking-wide">
                    John Luther{" "}
                  </h2>
                  <h3 className="text-white opacity-80 ">@john_luther</h3>{" "}
                </div>
              </div>

              <p className="text-[#8B8B8B] opacity-80 text-xs xl:text-[14px] leading-5">
                It&apos;s one of those tools that feels so intuitive, and so
                obvious, that any terminal experience without it feels broken by
                comparison.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-start gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              <div className="flex justify-center gap-4">
                <Image
                  src={Person}
                  alt="In-app notifications"
                  className="w-16"
                />
                <div className="flex flex-col">
                  <h2 className="text-white text-lg font-semibold tracking-wide">
                    John Luther{" "}
                  </h2>
                  <h3 className="text-white opacity-80 ">@john_luther</h3>{" "}
                </div>
              </div>

              <p className="text-[#8B8B8B] opacity-80 text-xs xl:text-[14px] leading-5">
                It&apos;s one of those tools that feels so intuitive, and so
                obvious, that any terminal experience without it feels broken by
                comparison.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-start gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              <div className="flex justify-center gap-4">
                <Image
                  src={Person}
                  alt="In-app notifications"
                  className="w-16"
                />
                <div className="flex flex-col">
                  <h2 className="text-white text-lg font-semibold tracking-wide">
                    John Luther{" "}
                  </h2>
                  <h3 className="text-white opacity-80 ">@john_luther</h3>{" "}
                </div>
              </div>

              <p className="text-[#8B8B8B] opacity-80 text-xs xl:text-[14px] leading-5">
                It&apos;s one of those tools that feels so intuitive, and so
                obvious, that any terminal experience without it feels broken by
                comparison.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-start gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              <div className="flex justify-center gap-4">
                <Image
                  src={Person}
                  alt="In-app notifications"
                  className="w-16"
                />
                <div className="flex flex-col">
                  <h2 className="text-white text-lg font-semibold tracking-wide">
                    John Luther{" "}
                  </h2>
                  <h3 className="text-white opacity-80 ">@john_luther</h3>{" "}
                </div>
              </div>

              <p className="text-[#8B8B8B] opacity-80 text-xs xl:text-[14px] leading-5">
                It&apos;s one of those tools that feels so intuitive, and so
                obvious, that any terminal experience without it feels broken by
                comparison.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-start gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              <div className="flex justify-center gap-4">
                <Image
                  src={Person}
                  alt="In-app notifications"
                  className="w-16"
                />
                <div className="flex flex-col">
                  <h2 className="text-white text-lg font-semibold tracking-wide">
                    John Luther{" "}
                  </h2>
                  <h3 className="text-white opacity-80 ">@john_luther</h3>{" "}
                </div>
              </div>

              <p className="text-[#8B8B8B] opacity-80 text-xs xl:text-[14px] leading-5">
                It&apos;s one of those tools that feels so intuitive, and so
                obvious, that any terminal experience without it feels broken by
                comparison.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
