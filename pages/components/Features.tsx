import React from "react";
import Image from "next/image";
import Inapp from "public/inapp.svg";
type Props = {};

const Features = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center -mt-[440px]">
        <h2 className="text-[#E7E3E3] text-xl lg:text-4xl xl:px-44 xl:-mt-24 px-10 mb-4 text-center font-semibold">
          Features to build the best multi-channel notification experience
        </h2>
        <p className="text-[#8B8B8B] lg:text-[#c3c3c3]  tracking-normal leading-7 lg:text-[16px] text-xs  px-9 xl:text-lg xl:font-semibold 2xl:text-xl 2xl:font-semibold text-center shadow-2xl opacity-60">
          We&apos;ve built awesome features so you don&apos;t have to start from
          scratch.<br></br>
          Just integrate our SDKs and APIs to build a scalable notification
          system for your product.
        </p>
        <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 lg:mx-8 2xl:mx-48 2xl:mt-6">
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* In-app notifications */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                In-app notification
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center">
                In-app notification component for front-end apps.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Email notifications */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Email notifications
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center">
                Send email to users via Amazon SES, Sendgrid etc.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Web push */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Web push
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center xl:py-[10px]">
                Built in support for browser push notifications.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Slack */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Slack
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center lg:py-3">
                Send chat messages to your users via Slack.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Notification Batching */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Notification Batching
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center lg:py-0.5">
                Ability to combine frequent notifications into one to avoid
                spamming users.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Mobile push */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Mobile push
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center lg:py-3">
                Deliver push notifications via FCM, APNS etc{"    "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* WhatsApp */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                WhatsApp
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center lg:py-5">
                Send WhatsApp messages to your users.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/*  User preferences */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide lg:py-2">
                User preferences{" "}
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center lg:py-0.5">
                Allow your users to set their notification preferences. UI
                components included.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/*SMS */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                SMS
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center lg:py-5">
                Send SMS notifications to your users.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Template Editor */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Template Editor{" "}
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center xl:py-[10px]">
                Manage notification content for all channels using our easy
                template editor.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Logs and monitoring */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Logs and monitoring
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center">
                Get access to logs from providers to debug cross-channel
                delivery and analyze performance.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4">
            <div className="flex flex-col justify-center items-center gap-3 py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Logs and monitoring */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Logs and monitoring
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-center">
                Get access to logs from providers to debug cross-channel
                delivery and analyze performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
