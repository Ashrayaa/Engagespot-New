import React from "react";
import Image from "next/image";
import Multi from "public/megamenu-products/multi-channel.svg";
import Inapp from "public/megamenu-products/in-app-notif.svg";
import Template from "public/megamenu-products/notif-templates.svg";
import Batched from "public/megamenu-products/batched.svg";
import Unified from "public/megamenu-products/unifiedlogging.svg";
import Preference from "public/megamenu-products/preferrence.svg";
import Link from "next/link";
type Props = {};

const ProductMenu = (props: Props) => {
  return (
    <section>
      <div className="relative top-6 p-6 bg-[#151516]  rounded-xl shadow-xl w-full">
        {/* <div className="w-10 h-10 bg-[#212123] transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:ranslate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
        <div className="flex flex-col gap-3 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-4 ">
          <Link href="/Multichannels">
            <div className="flex gap-4 items-start ">
              <Image src={Multi} alt="In-app notifications" className="w-20 hidden lg:flex" />
              <div className="flex flex-col">
                <h2 className="text-white hover:text-[#aa4875] lg:text-[18px] lg:font-semibold lg:tracking-wide">
                  Multi-channel notifications
                </h2>
                <p className="text-[#8B8B8B] hidden lg:flex opacity-80 text-left text-sm">
                  Single API to send notifications via Push, Em WhatsApp, SMS,
                  Slack etc{" "}
                </p>
              </div>
            </div>
          </Link>

          <Link href="/Inapp">
            <div className="flex gap-4 items-start ">
              <Image src={Inapp} alt="In-app notifications" className="w-20 hidden lg:flex" />
              <div className="flex flex-col">
                <h2 className="text-white hover:text-[#aa4875] lg:text-[18px] lg:font-semibold lg:tracking-wide">
                  In-app notification feed{" "}
                </h2>
                <p className="text-[#8B8B8B] hidden lg:flex opacity-80 text-left text-sm">
                  Components to build a realtime message inbox inside your app
                </p>
              </div>
            </div>
          </Link>

          <Link href="/Template">
            <div className="flex gap-4 items-start ">
              <Image
                src={Template}
                alt="In-app notifications"
                className="w-14 hidden lg:flex"
              />
              <div className="flex flex-col">
                <h2 className="text-white lg:text-[18px] hover:text-[#aa4875] lg:font-semibold lg:tracking-wide">
                  Notification templates{" "}
                </h2>
                <p className="text-[#8B8B8B] hidden lg:flex opacity-80 text-left text-sm">
                  Design notification for every channel in one place{" "}
                </p>
              </div>
            </div>
          </Link>

          <Link href="/Batched">
            <div className="flex gap-4 items-start ">
              <Image
                src={Batched}
                alt="In-app notifications"
                className="w-[49px] hidden lg:flex"
              />
              <div className="flex flex-col">
                <h2 className="text-white hover:text-[#aa4875] lg:text-[18px] lg:font-semibold lg:tracking-wide">
                  Batched notifications{" "}
                </h2>
                <p className="text-[#8B8B8B] hidden lg:flex opacity-80 text-left text-sm">
                  Combine multiple notifications into one{" "}
                </p>
              </div>
            </div>
          </Link>

          <Link href="/Unifiedlogging">
            <div className="flex gap-4 items-start ">
              <Image
                src={Unified}
                alt="In-app notifications"
                className="w-14 hidden lg:flex"
              />
              <div className="flex flex-col">
                <h2 className="text-white hover:text-[#aa4875] lg:text-[18px] lg:font-semibold lg:tracking-wide">
                  Unified Logging{" "}
                </h2>
                <p className="text-[#8B8B8B] hidden lg:flex opacity-80 text-left text-sm">
                  Track notifications across channels in one place{" "}
                </p>
              </div>
            </div>
          </Link>

          <Link href="/Preference">
            <div className="flex gap-4 items-start ">
              <Image
                src={Preference}
                alt="In-app notifications"
                className="w-14 hidden lg:flex"
              />
              <div className="flex flex-col">
                <h2 className="text-white hover:text-[#aa4875] lg:text-[18px] lg:font-semibold lg:tracking-wide">
                  Preference Manager{" "}
                </h2>
                <p className="text-[#8B8B8B] hidden lg:flex hover:text-[#aa4875] opacity-80 text-left text-sm">
                  Let users control how they want to be notified{" "}
                </p>
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </section>
  );
};
export default ProductMenu;
