const Blogintro = () => {
  return (
    <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-20">
      <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
        <h1 className="text-white antialiased text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:px-80 xl:leading-tight">
          Explore Our Blogs{" "}
        </h1>{" "}
        <p className="text-[#C0C0C8] text-xs md:text-left xl:text-lg xl:leading-9 text-center">
          Stay Ahead of the Curve with EngageSpot. Your Destination for Proven
          Notification Strategies
        </p>
        <div className="md:flex md:flex-row grid grid-flow-row grid-cols-2 gap-3  md:gap-6 justify-center py-6">
          <button className=" rounded-full font-semibold px-10 p-4 xl:p-5 xl:px-10 xl:text-xl  bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white  transition duration-300 transform hover:scale-110">
            All{" "}
          </button>
          <button className="rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl text-white bg-[#212123] transition duration-300 transform hover:scale-110 hover:outline">
            Articles{" "}
          </button>
          <button className="rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl text-white bg-[#212123] transition duration-300 transform hover:scale-110 hover:outline">
            Resources{" "}
          </button>
          <button className="rounded-full font-semibold p-4 xl:p-5 xl:px-6 xl:text-xl text-white bg-[#212123] transition duration-300 transform hover:scale-110 hover:outline">
            Updates{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Blogintro;
