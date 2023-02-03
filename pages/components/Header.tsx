import React from "react";
import Image from "next/image";
import Logo from "public/engagespotlogo.svg";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="xl:mx-6 flex lg:justify-between lg:items-center lg:p-4 lg:px-6 p-4 text-white lg:gap-24 2xl:justify-around xl:justify-between xl:gap-52 2xl:gap-[420px]">
        {/* LOGO */}
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width="150"
            className="lg:pb-5 md:pl-4"
          />
        </Link>

        {/* Menu */}
        <div className="hidden lg:flex lg:justify-center lg:gap-10">
          <ul className="lg:flex lg:justify-center lg:items-center lg:gap-10 2xl:gap-16 ">
            <li>Products</li>
            <li>Pricing</li>
            <Link href="/integration">
              <li>Integrations</li>
            </Link>
            <li>Documentation</li>
            <li>Blog</li>
          </ul>
          <div className="bg-gradient-to-r from-[#FF38D1] to-[#262626] via-[#FFFFFF] p-[0.5px] rounded-lg">
            <button className="border-none rounded-lg font-medium p-2 px-4 bg-[#262626]">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
