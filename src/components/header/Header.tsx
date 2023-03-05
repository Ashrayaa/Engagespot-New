import React from "react";
import Image from "next/image";
import Logo from "src/assets/logo/engagespotlogo.svg";
import Link from "next/link";

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
            <Link href="/products">
              <li className="hover:text-[#aa4875]">Products</li>
            </Link>
            <Link href="/pricing">
              <li className="hover:text-[#aa4875]">Pricing</li>
            </Link>
            <Link href="/integration">
              <li className="hover:text-[#aa4875]">Integrations</li>
            </Link>
            <li className="hover:text-[#aa4875]">Documentation</li>
            <Link href="/blogs">
              <li className="hover:text-[#aa4875]">Blog</li>
            </Link>
          </ul>
          <button className=" rounded-full font-semibold p-4 bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
            Get Started
          </button>
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
