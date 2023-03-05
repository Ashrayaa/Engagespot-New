const Blogintro = () => {
  return (
    <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-20">
      <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
        <h1 className="text-white text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:text-7xl xl:px-80 xl:leading-tight">
          Explore Our Blogs{" "}
        </h1>{" "}
        <p className="text-[#C0C0C8] text-xs lg:text-sm xl:text-xl px-5 sm:px-32 md:px-36 lg:px-44 xl:px-[310px]  2xl:font-semibold text-center shadow-2xl opacity-90">
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
