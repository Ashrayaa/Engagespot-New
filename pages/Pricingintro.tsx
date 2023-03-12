import React from "react";
import { useState } from "react";
import clsx from "clsx";

const Pricingintro = () => {
  const [selectedOption, setSelectedOption] = useState("Notification");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option === selectedOption ? "Notification" : option);
  };
  return (
    <>
      <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-20">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
          <h1 className="text-white text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:px-72 xl:leading-tight">
            Flexible Pricing for companies and developers{" "}
          </h1>{" "}
          <p className="text-[#C0C0C8] text-xs xl:text-lg xl:leading-9 text-center xl:px-80 lg:px-64 md:px-44">
            Transparent, simple, pay-as-you-go monthly pricing
          </p>
          <div className="flex justify-center mt-4 text-white gap-3 border bg-[#0D0D0E] border-[#353535] p-3 rounded-full">
            <button
              className={clsx(
                "p-4 px-6 border rounded-full border-[#616161] font-semibold text-sm md:text-lg",
                selectedOption === "Notification"
                  ? "bg-[#aa4875]"
                  : "bg-[#151516]"
              )}
              onClick={() => handleOptionClick("Notification")}
            >
              Notification
            </button>
            <button
              className={clsx(
                "p-4 px-6 border rounded-full border-[#616161] font-semibold text-sm md:text-lg",
                selectedOption === "MAU" ? "bg-[#aa4875]" : "bg-[#151516]"
              )}
              onClick={() => handleOptionClick("MAU")}
            >
              MAU
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pricingintro;
