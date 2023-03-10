import React from "react";
import Image from "next/image";
import Logo from "src/assets/logo/engagespotlogo.svg";
import Link from "next/link";
import Multi from "public/megamenu-products/multi-channel.svg";
import Inapp from "public/megamenu-products/in-app-notif.svg";
import Template from "public/megamenu-products/notif-templates.svg";
import Batched from "public/megamenu-products/batched.svg";
import Unified from "public/megamenu-products/unifiedlogging.svg";
import Preference from "public/megamenu-products/preferrence.svg";
import ProductMenu from "@/src/modules/Products/productsmenu";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="flex p-4 lg:justify-between lg:items-center text-white border-none sm:bg-[#161618] sm:mx-8 lg:p-2.5 lg:mx-10 xl:mx-48 2xl:mx-[260px] xl:px-6 rounded-full">
        {/* LOGO */}
        <Link href="/">
          <Image src={Logo} alt="logo" width="150" className="lg:pb-4" />
        </Link>

        {/* Menu */}
        <div className="hidden lg:flex lg:justify-center lg:gap-6">
          <ul className="lg:flex lg:justify-center lg:items-center lg:gap-8 2xl:gap-10 ">
            <Link href="">
              <li className="relative group px-3 py-2">
                <button className="hover:opacity-50 cursor-default">
                  Products
                </button>
                <div className="absolute top-0 -left-48 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:visible duration-500 ease-in-out group-hover:opacity-100 group-hover:transform z-50 min-w-[760px] transform">
                  <ProductMenu/>
                </div>
              </li>
            </Link>
            <Link href="/pricingpage">
              <li className="hover:text-[#aa4875]">Pricing</li>
            </Link>
            <Link href="/integration">
              <li className="hover:text-[#aa4875]">Integrations</li>
            </Link>
            <li className="hover:text-[#aa4875]">Documentation</li>
            <Link href="/blog">
              <li className="hover:text-[#aa4875]">Blog</li>
            </Link>
          </ul>
          <Link href="/pricingpage">
          <button className=" rounded-full font-semibold p-4 bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
            Get Started
          </button></Link>
          {/* <div className="bg-gradient-to-r from-[#FF38D1] to-[#262626] via-[#FFFFFF] p-[0.5px] rounded-lg">
            <button className="border-none rounded-lg font-medium p-2 px-4 bg-[#262626]">
              Book Demo
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Header;
