import React from "react";
import { useState } from "react";
import Image from "next/image";
import Logo from "src/assets/logo/engagespotlogo.svg";
import Link from "next/link";
import Multi from "public/megamenu-products/multi-channel.svg";
import Inapp from "public/megamenu-products/in-app-notif.svg";
import Template from "public/megamenu-products/notif-templates.svg";
import Batched from "public/megamenu-products/batched.svg";
import Unified from "public/megamenu-products/unifiedlogging.svg";
import Preference from "public/megamenu-products/preferrence.svg";
import ProductMenu from "@/pages/megamenu";

type Props = {};

function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <div
      className={`absolute top-0 left-0 w-screen bg-black px-4 pb-8 z-20 transform ${
        open ? "translate-y-20 sm:translate-y-28" : "-translate-y-full"
      } transition-transform duration-500 ease-in-out filter`}
    >
      <div className=" flex lg:hidden flex-col gap-6 pl-8 antialiased bg-[#161618] rounded-3xl py-8 lg:py-0 lg:pl-0 lg:flex-row justify-center mt-10 lg:mt-0 lg:gap-6">
        <ul className="flex flex-col gap-3 lg:flex-row justify-center lg:items-center lg:gap-8 2xl:gap-10 ">
          <Link href="">
            <li className="relative group lg:px-3 lg:py-2">
              <button className="hover:opacity-50 cursor-default">
                Products
              </button>
              <div className="absolute hidden lg:flex top-0 -left-48 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:visible duration-500 ease-in-out group-hover:opacity-100 group-hover:transform z-50 min-w-[760px] transform">
                <ProductMenu />
              </div>
            </li>
          </Link>
          <Link href="/pricingpage">
            <li className="hover:text-[#aa4875]">Pricing</li>
          </Link>
          <Link href="/integration">
            <li className="hover:text-[#aa4875]">Integrations</li>
          </Link>
          <Link href="https://documentation.engagespot.co/docs/introduction/getting-started">
            <li className="hover:text-[#aa4875]">Documentation</li>
          </Link>
          <Link href="/blog">
            <li className="hover:text-[#aa4875]">Blog</li>
          </Link>
        </ul>
        <Link href="/pricingpage">
          <button className=" rounded-full font-semibold lg:p-4 px-24  py-4 bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

const Header = (props: Props) => {
  const [open, setOpen] = useState(false); //initial stage is false because the button is not open
  return (
    <nav>
      <div className="flex flex-col lg:flex-row p-4 lg:justify-between lg:items-center text-white border-none lg:bg-[#161618] sm:mx-8 lg:p-2.5 lg:mx-10 xl:mx-48 2xl:mx-[260px] xl:px-6 rounded-full">
        {/* LOGO */}
        <div className="flex justify-between items-center align-middle px-4">
          <Link href="/">
            <Image src={Logo} alt="logo" width="150" className="lg:pb-4" />
          </Link>
          <MobileNav open={open} setOpen={setOpen} />
          <div className=" flex lg:hidden justify-center items-center -mt-6">
            <div
              className="group z-50 relative w-8 h-6 mt-10 cursor-pointer flex-col justify-between items-center flex"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger menu */}
              <span
                className={`h-1 w-full bg-white rounded-lg group-hover:text-[#aa4875] cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              {/* <span
                className={`h-1 w-full bg-white rounded-lg group-hover:text-[#aa4875] cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "w-0" : "w-full"
                }`}
              /> */}
              <span
                className={`h-1 w-full bg-white rounded-lg group-hover:text-[#aa4875] cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex flex-col gap-6 pl-8 antialiased bg-[#161618] rounded-3xl py-8 lg:py-0 lg:pl-0 lg:flex-row justify-center mt-10 lg:mt-0 lg:gap-6">
          <ul className="flex flex-col gap-3 lg:flex-row justify-center lg:items-center lg:gap-8 2xl:gap-10 ">
            <Link href="">
              <li className="relative group lg:px-3 lg:py-2">
                <button className="hover:text-[#aa4875]">
                  Products
                </button>
                <div className="absolute hidden lg:flex top-0 -left-48 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:visible duration-500 ease-in-out group-hover:opacity-100 group-hover:transform z-50 min-w-[760px] transform">
                  <ProductMenu />
                </div>
              </li>
            </Link>
            <Link href="/pricingpage">
              <li className="hover:text-[#aa4875]">Pricing</li>
            </Link>
            <Link href="/integration">
              <li className="hover:text-[#aa4875]">Integrations</li>
            </Link>
            <Link href="https://documentation.engagespot.co/docs/introduction/getting-started/">
              <li className="hover:text-[#aa4875]">Documentation</li>
            </Link>
            <Link href="/blog">
              <li className="hover:text-[#aa4875]">Blog</li>
            </Link>
          </ul>
          <Link href="/pricingpage">
            <button className=" rounded-full font-semibold lg:p-4 px-24  py-4 bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
              Get Started
            </button>
          </Link>
          {/* <div className="bg-gradient-to-r from-[#FF38D1] to-[#262626] via-[#FFFFFF] p-[0.5px] rounded-lg">
            <button className="border-none rounded-lg font-medium p-2 px-4 bg-[#262626]">
              Book Demo
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};
export default Header;
