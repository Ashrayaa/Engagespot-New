const IntegrationPage = () => {
  return (
    <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-20">
      <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
        <h1 className="text-white text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:px-80 xl:leading-tight">
          Connect with your favorite providers
        </h1>
        <p className="text-[#C0C0C8] text-xs lg:text-sm xl:text-xl px-5 sm:px-32 md:px-36 lg:px-44 xl:px-[310px]  2xl:font-semibold text-center shadow-2xl opacity-90">
          Suspendisse sed sit non blandit augue cursus risus pharetra neque quam
          magna pharetra semper malesuada ridiculus etiam pellentesque et
          tellus.
        </p>
        <div className="flex flex-row gap-6 justify-center py-6">
          <button className=" rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl  bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white  transition duration-300 transform hover:scale-110">
            Join our team
          </button>
          <button className="rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl text-white bg-[#212123] transition duration-300 transform hover:scale-110 hover:outline">
            Learn more{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default IntegrationPage;
