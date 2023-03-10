import React from "react";
import Image from "next/image";
import Logo from "src/assets/logo/engagespotlogo.svg";
import Linkedin from "public/linkedin.svg";
import Twitter from "public/twitter.svg";
import Github from "public/github.svg";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="mt-12 lg:mx-12 lg:flex lg:flex-col">
        <div className="lg:flex xl:gap-24 lg:justify-center xl:mb-12 lg:items-baseline">
          <div className="flex flex-col gap-6">
            <div>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="logo"
                  width="150"
                  className="mx-4 xl:w-44"
                />
              </Link>
            </div>
            <p className="text-[#B4B4B4] xl:tracking-wide xl:leading-8 text-xs xl:text-[17px] mx-4">
              The complete notification infrastructure for your product{" "}
            </p>
            <div className="flex gap-5 mx-4 lg:mx-0">
              <Link href="/">
                <Image
                  src={Linkedin}
                  alt="Linkedin"
                  width="27"
                  className="lg:pb-5 xl:w-[55px] md:pl-4"
                />
              </Link>
              <Link href="/">
                <Image
                  src={Github}
                  alt="Github"
                  width="27"
                  className="lg:pb-5 xl:w-[55px] md:pl-4"
                />
              </Link>
              <Link href="/">
                <Image
                  src={Twitter}
                  alt="Twitter"
                  width="27"
                  className="lg:pb-5 xl:w-[55px] md:pl-4"
                />
              </Link>
              <Link href="/">
                <Image
                  src={Github}
                  alt="Github"
                  width="27"
                  className="lg:pb-5 xl:w-[55px] md:pl-4"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-flow-row grid-cols-2 gap-12 mx-4 mt-12 lg:flex lg:gap-12">
            <div className="text-left">
              <h2 className="text-white text-sm lg:text-xl lg:font-semibold font-medium">
                Product
              </h2>
              <ul className="text-[#9E9E9E] text-[10px] xl:text-[16px] lg:text-sm lg:font-medium font-normal flex flex-col gap-5 mt-6">
                <Link href="/pricingpage">
                  <li>Pricing</li>
                </Link>
                <li>React Notifications</li>
                <Link href="/uikit">
                  <li>Notification UI kit</li>
                </Link>
                <li>Features</li>
                <li>Disposabel email Detector</li>
              </ul>
            </div>

            <div className="text-right lg:text-left">
              <h2 className="text-white text-sm lg:text-xl lg:font-semibold font-medium">
                Company
              </h2>
              <ul className="text-[#9E9E9E] text-[10px] xl:text-[16px] lg:text-sm lg:font-medium font-normal flex flex-col gap-5 mt-6">
                <Link href="/aboutus">
                  {" "}
                  <li>About Us</li>
                </Link>
                <Link href="/blog">
                  <li>Blog</li>
                </Link>
              
                <li>Discord</li>
                <li>Doc</li>
                <li>Roadmap</li>
                <Link href="/termsandconditions">
                  <li>Terms & Conditions</li>
                </Link>
                <Link href="/privacypolicy">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>

            <div className="text-left">
              <h2 className="text-white text-sm lg:text-xl lg:font-semibold font-medium">
                Channels
              </h2>
              <ul className="text-[#9E9E9E]  text-[10px] xl:text-[16px] lg:text-sm lg:font-medium  font-normal flex flex-col gap-5 mt-6">
                <li>In-App</li>
                <li>Web Push</li>
                <li>SMS</li>
                <li>Mail</li>
                <li>Whatsapp</li>
                <li>Slack</li>
              </ul>
            </div>

            <div className="text-right lg:text-left">
              <h2 className="text-white text-sm lg:text-xl lg:font-semibold font-medium">
                SDKs & Libraries
              </h2>
              <ul className="text-[#9E9E9E] text-[10px] xl:text-[16px] lg:text-sm lg:font-medium font-normal flex flex-col gap-5 mt-6">
                <li>React</li>
                <li>Angular</li>
                <li>Javascript</li>
                <li>VueJS</li>
                <li>Browser Javascript</li>
                <li>Node.js</li>
                <li>Laravel</li>
                <li>Symfony</li>
                <li>Go</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="mx-10 h-[1px] bg-[#D4D4D4] mt-10"></div> */}

        <div className="lg:flex lg:gap-28 lg:justify-between lg:mx-16 lg:items-center lg:flex-row-reverse">
          <div className="mt-6 lg:mt-0">
            <ul className="text-[#989292] text-xs flex gap-4 justify-center items-center ">
              <li>Help</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="">
            <p className="text-[#989292] text-xs flex justify-center items-center mt-4 lg:mt-0 py-4">
              © 2022 Engagespot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
