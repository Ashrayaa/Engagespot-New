import React from "react";
import Image from "next/image";
import Twilio from "/public/twilio.svg";
import Sendgrid from "/public/sendgrid.svg";
import Amazon from "/public/amazon.svg";
import Mailgun from "/public/mailgun.svg";

import Firebase from "/public/firebase.svg";

import Message from "/public/messagebird.svg";
import Sinch from "/public/sinch.svg";
import Gupshup from "/public/gupshup.svg";
import Karix from "/public/karix.svg";

import Arrow from "/public/arrow.svg";

type Props = {};

const Integration_intro = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center gap-6 xl:mx-12 2xl:mx-44 mx-8 ">
          <div className="md:grid md:grid-cols-3 md:grid-flow-row lg:gap-10 grid gap-6 md:text-center md:justify-center mb-12">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl">
              <div className="border flex flex-col justify-center items-center  gap-5 p-4 lg:py-8 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
                {/* logo */}
                <div className="">
                  <Image src={Amazon} alt="Twilio Sendgrid" />
                </div>

                <h1 className="font-semibold text-[21px] text-[#EAEAEA]">
                  Amazon SES
                </h1>
                <button className="border border-[#929292] rounded-lg flex px-2 w-16 text-[#929292]">
                  email
                </button>
                <p className="text-[14px] text-center leading-7 text-[#858585]">
                  Leverage the email service that customer-first brands trust
                  for reliable inbox delivery at scale.
                </p>
                <div className="flex gap-2">
                  <button className="text-[#C5C5C5] font-medium text-sm">
                    Learn More
                  </button>
                  <Image src={Arrow} alt="arrow" width={12} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl">
              <div className="border flex flex-col justify-center items-center  gap-5 p-4 lg:py-8 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
                {/* logo */}
                <div className="">
                  <Image src={Mailgun} alt="Twilio Sendgrid" />
                </div>

                <h1 className="font-semibold text-[21px] text-[#EAEAEA]">
                  Mailgun
                </h1>
                <button className="border border-[#929292] rounded-lg flex px-2 w-16 text-[#929292]">
                  email
                </button>
                <p className="text-[14px] text-center leading-7 text-[#858585]">
                  Leverage the email service that customer-first brands trust
                  for reliable inbox delivery at scale.
                </p>
                <div className="flex gap-2">
                  <button className="text-[#C5C5C5] font-medium text-sm">
                    Learn More
                  </button>
                  <Image src={Arrow} alt="arrow" width={12} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl">
              <div className="border flex flex-col justify-center items-center  gap-5 p-4 lg:py-8 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
                {/* logo */}
                <div className="">
                  <Image src={Sendgrid} alt="Twilio Sendgrid" />
                </div>

                <h1 className="font-semibold text-[21px] text-[#EAEAEA]">
                  Sendgrid
                </h1>
                <button className="border border-[#929292] rounded-lg flex px-2 w-16 text-[#929292]">
                  email
                </button>
                <p className="text-[14px] text-center leading-7 text-[#858585]">
                  Leverage the email service that customer-first brands trust
                  for reliable inbox delivery at scale.
                </p>
                <div className="flex gap-2">
                  <button className="text-[#C5C5C5] font-medium text-sm">
                    Learn More
                  </button>
                  <Image src={Arrow} alt="arrow" width={12} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl">
              <div className="border flex flex-col justify-center items-center  gap-5 p-4 lg:py-8 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
                {/* logo */}
                <div className="">
                  <Image src={Twilio} alt="Twilio Sendgrid" />
                </div>

                <h1 className="font-semibold text-[21px] text-[#EAEAEA]">
                  Twilio
                </h1>
                <button className="border border-[#929292] rounded-lg flex px-2 w-16 text-[#929292]">
                  email
                </button>
                <p className="text-[14px] text-center leading-7 text-[#858585]">
                  Leverage the email service that customer-first brands trust
                  for reliable inbox delivery at scale.
                </p>
                <div className="flex gap-2">
                  <button className="text-[#C5C5C5] font-medium text-sm">
                    Learn More
                  </button>
                  <Image src={Arrow} alt="arrow" width={12} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl">
              <div className="border flex flex-col justify-center items-center  gap-5 p-4 lg:py-8 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
                {/* logo */}
                <div className="">
                  <Image src={Message} alt="Twilio Sendgrid" />
                </div>

                <h1 className="font-semibold text-[21px] text-[#EAEAEA]">
                  Message bird
                </h1>
                <button className="border border-[#929292] rounded-lg flex px-2 w-16 text-[#929292]">
                  email
                </button>
                <p className="text-[14px] text-center leading-7 text-[#858585]">
                  Leverage the email service that customer-first brands trust
                  for reliable inbox delivery at scale.
                </p>
                <div className="flex gap-2">
                  <button className="text-[#C5C5C5] font-medium text-sm">
                    Learn More
                  </button>
                  <Image src={Arrow} alt="arrow" width={12} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl">
              <div className="border flex flex-col justify-center items-center  gap-5 p-4 lg:py-8 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
                {/* logo */}
                <div className="">
                  <Image src={Sinch} alt="Twilio Sendgrid" />
                </div>

                <h1 className="font-semibold text-[21px] text-[#EAEAEA]">
                  Sinch
                </h1>
                <button className="border border-[#929292] rounded-lg flex px-2 w-16 text-[#929292]">
                  email
                </button>
                <p className="text-[14px] text-center leading-7 text-[#858585]">
                  Leverage the email service that customer-first brands trust
                  for reliable inbox delivery at scale.
                </p>
                <div className="flex gap-2">
                  <button className="text-[#C5C5C5] font-medium text-sm">
                    Learn More
                  </button>
                  <Image src={Arrow} alt="arrow" width={12} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl">
              <div className="border flex flex-col justify-center items-center  gap-5 p-4 lg:py-8 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
                {/* logo */}
                <div className="">
                  <Image src={Karix} alt="Twilio Sendgrid" />
                </div>

                <h1 className="font-semibold text-[21px] text-[#EAEAEA]">
                  Karix
                </h1>
                <button className="border border-[#929292] rounded-lg flex px-2 w-16 text-[#929292]">
                  email
                </button>
                <p className="text-[14px] text-center leading-7 text-[#858585]">
                  Leverage the email service that customer-first brands trust
                  for reliable inbox delivery at scale.
                </p>
                <div className="flex gap-2">
                  <button className="text-[#C5C5C5] font-medium text-sm">
                    Learn More
                  </button>
                  <Image src={Arrow} alt="arrow" width={12} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl">
              <div className="border flex flex-col justify-center items-center  gap-5 p-4 lg:py-8 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
                {/* logo */}
                <div className="">
                  <Image src={Gupshup} alt="Twilio Sendgrid" />
                </div>

                <h1 className="font-semibold text-[21px] text-[#EAEAEA]">
                  Gupshup
                </h1>
                <button className="border border-[#929292] rounded-lg flex px-2 w-16 text-[#929292]">
                  email
                </button>
                <p className="text-[14px] text-center leading-7 text-[#858585]">
                  Leverage the email service that customer-first brands trust
                  for reliable inbox delivery at scale.
                </p>
                <div className="flex gap-2">
                  <button className="text-[#C5C5C5] font-medium text-sm">
                    Learn More
                  </button>
                  <Image src={Arrow} alt="arrow" width={12} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl">
              <div className="border flex flex-col justify-center items-center  gap-5 p-4 lg:py-8 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
                {/* logo */}
                <div className="">
                  <Image src={Firebase} alt="Twilio Sendgrid" />
                </div>

                <h1 className="font-semibold text-[21px] text-[#EAEAEA]">
                  Firebase
                </h1>
                <button className="border border-[#929292] rounded-lg flex px-2 w-16 text-[#929292]">
                  email
                </button>
                <p className="text-[14px] text-center leading-7 text-[#858585]">
                  Leverage the email service that customer-first brands trust
                  for reliable inbox delivery at scale.
                </p>
                <div className="flex gap-2">
                  <button className="text-[#C5C5C5] font-medium text-sm">
                    Learn More
                  </button>
                  <Image src={Arrow} alt="arrow" width={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Integration_intro;
