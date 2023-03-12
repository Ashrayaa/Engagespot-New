import React from "react";
import Image from "next/image";
import Batchedimage from "public/batched.svg";
import Extension from "public/extension1.svg";
import Extensiontwo from "public/extension2.svg";
import Header from "src/components/header/Header";
import Footer from "src/components/footer/Footer";
import Build from "src/components/common/Build";
import Code from "public/codewidth.svg";

const Batched = () => {
  return (
    <div className="bg-black sm:pt-8 antialiased">
      <Header />

      <section className="flex flex-col md:flex-row md:justify-between xl:gap-6 mt-16 mx-6 lg:px-6">
        <div
          className="md:w-1/2 xl:w-2/3 2xl:w-1/2 flex items-start justify-center p-8 xl:pl-14 flex-col gap-3 lg:gap-6 text-center md:text-left "
          data-aos="fade-right"
        >
          <h2 className="text-[#FFFF] text-2xl md:text-3xl xl:text-6xl xl:leading-tight font-bold">
            Real-time notification components for your in-app inbox{" "}
          </h2>

          <p className="text-[#C0C0C8] text-xs md:text-left xl:text-lg xl:leading-9 text-center">
            Add a beautiful notification inbox component to your React, Angular,
            Vue.JS & HTML app using our pre-built UI-Kit. Show all notifications
            in a single component inside your app.
          </p>

          <div className="flex flex-row gap-6 justify-center py-6">
            <button className=" rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl  bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white  transition duration-300 transform hover:scale-110">
              Get Started
            </button>
            <button className="rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl text-white bg-[#212123] transition duration-300 transform hover:scale-110 hover:outline">
              View Pricing
            </button>
          </div>
        </div>
        <div
          className="md:w-1/2 hidden md:flex md:h-auto md:overflow-hidden"
          data-aos="fade-left"
        >
          <Image
            src={Batchedimage}
            alt="newsletter"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <section
        className="flex flex-col py-10 md:flex-row md:justify-between rounded-3xl bg-[#151516] xl:gap-6 mt-20 mx-6 lg:mx-8 xl:mx-32"
        data-aos="flip-up"
      >
        <div className="md:w-1/2 flex items-start justify-center p-8 xl:pl-14 flex-col gap-3 lg:gap-9 text-center md:text-left ">
          <h2 className="text-[#FFFF] sm:px-14 md:px-0 text-2xl md:text-3xl tracking-wide font-bold">
            About the extension{" "}
          </h2>

          <p className="text-[#C0C0C8] text-xs md:text-left xl:text-sm xl:leading-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim prae elementum facilisis leo,
            vel fringilla est ullamcorper eget.{" "}
          </p>

          <ul className="text-[#C0C0C8] text-xs md:text-left xl:text-sm xl:leading-6 text-center pl-12">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Mauris aliquet faucibus iaculis dui vitae ullamco</li>
            <li>Posuere enim mi pharetra neque proin dic</li>
          </ul>
          <h2 className="text-[#FFFF] text-lg xl:text-xl font-bold">
            Relevant information
          </h2>
          <p className="text-[#C0C0C8] text-xs md:text-left xl:text-sm xl:leading-6 text-center">
            Ullamcorper eget nulla facilisi etiam dignissim diam quis enim
            lobortis scelerisque fermentum dui faucibus in ornare quam viverra
            orci sagittis eu volutpat odio facilisis.
          </p>
          <button className=" rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl  bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white  transition duration-300 transform hover:scale-110">
            AddHTMLextension
          </button>
        </div>
        <div className="md:w-1/2 hidden md:flex md:h-auto md:overflow-hidden">
          <Image
            src={Extension}
            alt="newsletter"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <section
        className="flex flex-col py-10 md:flex-row md:justify-between rounded-3xl bg-[#151516] xl:gap-6 mt-20 mx-6 lg:mx-8 xl:mx-32"
        data-aos="flip-down"
      >
        <div className="md:w-1/2 hidden md:flex md:h-auto md:overflow-hidden">
          <Image
            src={Extensiontwo}
            alt="newsletter"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="md:w-1/2 flex items-start justify-center p-8 xl:pl-14 flex-col gap-3 lg:gap-9 text-center md:text-left ">
          <h2 className="text-[#FFFF] sm:px-14 md:px-0 text-2xl md:text-3xl tracking-wide font-bold">
            About the extension{" "}
          </h2>

          <p className="text-[#C0C0C8] text-xs md:text-left xl:text-sm xl:leading-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim prae elementum facilisis leo,
            vel fringilla est ullamcorper eget.{" "}
          </p>

          <ul className="text-[#C0C0C8] text-xs md:text-left xl:text-sm xl:leading-6 text-center pl-12">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Mauris aliquet faucibus iaculis dui vitae ullamco</li>
            <li>Posuere enim mi pharetra neque proin dic</li>
          </ul>
          <h2 className="text-[#FFFF] text-lg xl:text-xl font-bold">
            Relevant information
          </h2>
          <p className="text-[#C0C0C8] text-xs md:text-left xl:text-sm xl:leading-6 text-center">
            Ullamcorper eget nulla facilisi etiam dignissim diam quis enim
            lobortis scelerisque fermentum dui faucibus in ornare quam viverra
            orci sagittis eu volutpat odio facilisis.
          </p>
          <button className=" rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl  bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white  transition duration-300 transform hover:scale-110">
            AddHTMLextension
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Batched;
