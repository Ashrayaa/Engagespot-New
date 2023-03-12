import Image from "next/image";
import CTA from "public/ctaimage.svg";

const CTASection = () => {
  return (
    <>
      <section
        className="flex flex-col md:flex-row md:justify-between md:gap-12 rounded-3xl bg-[#151516] mt-20 mx-6 lg:mx-8 xl:mx-24"
        data-aos="zoom-in-up"
      >
        <div className="w-3/4 flex p-4 pl-10 pt-8 xl:pl-14 xl:pt-20 2xl:pt-24 flex-col gap-4 xl:gap-6 text-center md:text-left">
          <h2 className="text-[#E7E3E3] sm:px-14 md:px-0 text-2xl md:text-3xl lg:text-[38px] lg:leading-normal xl:text-5xl 2xl:text-6xl tracking-wide font-bold">
            Build your first notification in minutes
          </h2>
          <p className="text-[#C0C0C8] sm:px-16 md:px-0 tracking-normal leading-7 lg:leading-8 lg:text-[16px] md:text-xs text-[14px] xl:text-lg 2xl:text-xl 2xl:font-semibold">
            Create a free account and add a complete notification system to your
            product in minutes. No credit card required.
          </p>
          <button className="sm:mx-36 md:w-36 xl:w-44 md:items-start md:mx-0 rounded-full mt-2 font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
            Get Started
          </button>
        </div>
        <div className="w-1/2">
          <Image src={CTA} alt="cta" className="hidden md:flex" />
        </div>
      </section>
    </>
  );
};
export default CTASection;
