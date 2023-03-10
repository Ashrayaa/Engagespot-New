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
    <>
    <div className="relative top-6 p-6 bg-[#212123] rounded-xl shadow-xl w-full">
                    {/* <div className="w-10 h-10 bg-[#212123] transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:ranslate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                    <div className="grid grid-flow-row grid-cols-2 gap-4 ">
                      <div className="flex gap-4 items-start ">
                        <Image
                          src={Multi}
                          alt="In-app notifications"
                          className="w-20"
                        />
                        <div className="flex flex-col">
                          <h2 className="text-white text-[18px] font-semibold tracking-wide">
                            <Link href="/Multichannel">
                              Multi-channel notifications
                            </Link>
                          </h2>
                          <p className="text-[#8B8B8B] opacity-80 text-left text-sm">
                            Single API to send notifications via Push, Em
                            WhatsApp, SMS, Slack etc{" "}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start ">
                        <Image
                          src={Inapp}
                          alt="In-app notifications"
                          className="w-20"
                        />
                        <div className="flex flex-col">
                          <h2 className="text-white text-[18px] font-semibold tracking-wide">
                            In-app notification feed{" "}
                          </h2>
                          <p className="text-[#8B8B8B] opacity-80 text-left text-sm">
                            Components to build a realtime message inbox inside
                            your app
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start ">
                        <Image
                          src={Template}
                          alt="In-app notifications"
                          className="w-14"
                        />
                        <div className="flex flex-col">
                          <h2 className="text-white text-[18px] font-semibold tracking-wide">
                            Notification templates{" "}
                          </h2>
                          <p className="text-[#8B8B8B] opacity-80 text-left text-sm">
                            Design notification for every channel in one place{" "}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start ">
                        <Image
                          src={Batched}
                          alt="In-app notifications"
                          className="w-[49px]"
                        />
                        <div className="flex flex-col">
                          <h2 className="text-white text-[18px] font-semibold tracking-wide">
                            Batched notifications{" "}
                          </h2>
                          <p className="text-[#8B8B8B] opacity-80 text-left text-sm">
                            Combine multiple notifications into one{" "}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start ">
                        <Image
                          src={Unified}
                          alt="In-app notifications"
                          className="w-14"
                        />
                        <div className="flex flex-col">
                          <h2 className="text-white text-[18px] font-semibold tracking-wide">
                            Unified Logging{" "}
                          </h2>
                          <p className="text-[#8B8B8B] opacity-80 text-left text-sm">
                            Track notifications across channels in one place{" "}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start ">
                        <Image
                          src={Preference}
                          alt="In-app notifications"
                          className="w-14"
                        />
                        <div className="flex flex-col">
                          <h2 className="text-white text-[18px] font-semibold tracking-wide">
                            Preference Manager{" "}
                          </h2>
                          <p className="text-[#8B8B8B] opacity-80 text-left text-sm">
                            Let users control how they want to be notified{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
    </>
  );
};
export default ProductMenu;
