import React from "react";
import Image from "next/image";
import Inapp from "public/inapp.svg";
import Email from "public/email.png";
import Search from "public/search.png";
import Slack from "public/slack.png";
import Notification from "public/noti.png";
import User from "public/user.png";
import Mobile from "public/mobilepush.png";
import Logs from "public/noti.png";
import Template from "public/noti.png";
import WhatsApp from "public/whatsapp.png";
import SMS from "public/sms.png";

type Props = {};

const Features = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center -mt-[440px]">
        <h2 className="text-[#E7E3E3] text-2xl lg:text-4xl xl:text-5xl xl:px-44 xl:-mt-24 px-3 tracking-wide mb-4 text-center font-semibold">
          Features to build the best multi-channel notification experience
        </h2>
        <p className="text-[#8B8B8B] lg:text-[#c3c3c3] xl:leading-9 xl:tracking-wide  tracking-normal leading-7 lg:text-[16px] text-[14px]  px-8 xl:text-lg xl:font-light xl:py-4 xl:pb-16 2xl:text-xl 2xl:font-semibold text-center shadow-2xl opacity-60">
          We&apos;ve built awesome features so you don&apos;t have to start from
          scratch. Just integrate our SDKs and APIs to build a scalable notification
          system for your product.
        </p>
        <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 lg:mx-8 2xl:mx-48 2xl:mt-6 xl:mx-36">
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* In-app notifications */}
              <Image src={Inapp} alt="In-app notifications" className="w-16" quality={80}/>
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                In-app notification
              </h2>
              <p className="text-[#8B8B8B] opa[16px]ty-80 text-sm text-center tracking-wider">
                In-app notification component for front-end apps.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Email notifications */}
              <Image src={Email} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                Email notifications
              </h2>
              <p className="text-[#8B8B8B] opa[16px]ty-80 text-sm text-center tracking-wider">
                Send email to users via Amazon SES, Sendgrid etc.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col 2xl:py-[34px] justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Web push */}
              <Image src={Search} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                Web push
              </h2>
              <p className="text-[#8B8B8B] opa[16px]ty-80 text-sm text-center tracking-wider">
                Built in support for browser push notifications.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Slack */}
              <Image src={Slack} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                Slack
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-[16px]nter lg:py-3 xl:py-[22px] tracking-wider">
                Send chat messages to your users via Slack.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Notification Batching */}
              <Image src={Notification} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                Notification Batching
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-ce[16px]er lg:py-0.5 xl:py-[12px] tracking-wider">
                Ability to combine frequent notifications into one to avoid
                spamming users.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Mobile push */}
              <Image src={Mobile} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                Mobile push
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-[16px]nter xl:py-[22px] lg:py-3 tracking-wider">
                Deliver push notifications via FCM, APNS etc{"    "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* WhatsApp */}
              <Image src={WhatsApp} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                WhatsApp
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-[16px]nter lg:py-5 xl:py-[30px] tracking-wider">
                Send WhatsApp messages to your users.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/*  User preferences */}
              <Image src={User} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide lg:py-2">
                User preferences{" "}
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-ce[16px]er lg:py-0.5 xl:py-[13px] tracking-wider">
                Allow your users to set their notification preferences. UI
                components included.{" "}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/*SMS */}
              <Image src={SMS} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                SMS
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-sm text-[16px]nter lg:py-5 xl:py-[30px] tracking-wider">
                Send SMS notifications to your users.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Template Editor */}
              <Image src={Template} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                Template Editor{" "}
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-[16px] text-center xl:py-[20px] tracking-wider">
                Manage notification content for all channels using our easy
                template editor.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Logs and monitoring */}
              <Image src={Logs} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-[21px] font-semibold tracking-wide">
                Logs and monitoring
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-[16px] text-center xl:py-[10px] tracking-wider">
                Get access to logs from providers to debug cross-channel
                delivery and analyze performance.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#9a9797] via-[#8D8D8D] p-[0.5px] rounded-xl m-4 mx-6">
            <div className="hidden lg:flex flex-col justify-center items-center gap-3 py-10 lg:py-6 px-4 rounded-xl bg-gradient-to-tl from-[#1c1b1b] to-[#323131] via-[#1a1a1a]">
              {/* Logs and monitoring */}
              <Image src={Logs} alt="In-app notifications" className="w-16" />
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Logs and monitoring
              </h2>
              <p className="text-[#8B8B8B] opacity-80 text-[16px] text-center xl:py-[12px] tracking-wider">
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
