import RangeBar from "@/src/components/common/RangeBar";
import React from "react";
type Props = {};
const Payahead = () => {
  return (
    <>
      <div className="bg-[#151516] text-white rounded-3xl mt-12 lg:mt-24 p-4 mx-4 sm:mx-8 sm:gap-10 md:p-6 2xl:mx-44 xl:mx-44">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-4xl text-white font-semibold">
              Pay Ahead Save Money
            </h1>
            <p className="text-[#C0C0C8] text-sm text-center px-6 md:px-20 lg:px-24 xl:px-36">
              Commit upfront by paying a little more than you require to avoid
              paying on-demand rates and get huge volume discounts. Ideal for
              companies with large volumes and predictable requirements.
            </p>
          </div>

          <div className="flex flex-col gap-8 xl:px-16">
            <div className="flex flex-col gap-4 md:flex-row md:gap-12">
              <div className="flex flex-col gap-4">
                <p>Which plan would you like to buy?</p>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio text-[#212123] bg-[#fff] focus:border-[#fff] focus:shadow-outline-[#fff] "
                    name="radio-option"
                    value="option2"
                  />
                  <span className="ml-2">Standard</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio text-[#212123] bg-[#fff] focus:border-[#fff] focus:shadow-outline-[#fff] "
                    name="radio-option"
                    value="option3"
                  />
                  <span className="ml-2">Premium</span>
                </label>
              </div>
              <div className="flex flex-col gap-4">
                <p>How often do you want to pay?</p>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio text-[#fff] bg-[#059669] focus:border-[#059669] focus:shadow-outline-[#059669] "
                    name="radio-option"
                    value="option2"
                  />
                  <span className="ml-2">Annual</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio text-[#fff] bg-[#059669] focus:border-[#059669] focus:shadow-outline-[#059669] "
                    name="radio-option"
                    value="option3"
                  />
                  <span className="ml-2">Monthly</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-center md:gap-10 2xl:gap-36">
              <div className="flex flex-col gap-4 lg:w-[500px]">
                <h5>Notification triggers per month</h5>
                <p className="">
                  Commit upfront by paying a little more than you require to
                  avoid paying on-demand rates and get huge volume
                  discounts.Ideal for companies with large volumes and
                  predictable requirements.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#7662AB] to-[#B261A6] rounded-xl text-white flex flex-col gap-2 p-6 px-10 justify-center items-center">
                <h5 className="text-2xl font-semibold">Total Cost</h5>
                <h1 className="font-extrabold text-4xl">$149.00</h1>
                <p className="font-medium text-center text-[13px]">
                  You save $41 compared to on-demanded price
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center text-center items-center gap-4">
              <h4>How many monthly active users?</h4>
              <div className="container mx-auto px-4">
                <RangeBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payahead;
