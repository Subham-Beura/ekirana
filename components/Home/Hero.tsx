const Hero = () => {
  return (
    <>
      <section className=" h-screen  flex-grow bg-black bg-[url('/img/mobile-bg2.jpg')] bg-cover bg-center">
        <div className="h-full bg-gradient-to-b from-[#0000005b] to-[#1e1d1d00] ">
          <div className="flex h-screen  flex-col items-center  justify-center space-y-5 bg-[#0000003f] pt-[50px] ">
            <h2 className="w-[80vw] text-center font-lobster text-5xl font-extrabold leading-relaxed text-white">
              A Traditional View On Indian Festive Wear
            </h2>
            <div className="flex flex-col items-center space-y-6 md:w-fit md:flex-row md:space-x-6 md:space-y-0">
              <button className=" w-40 border-2 border-white bg-white py-2 hover:bg-transparent hover:text-white">
                Men
              </button>
              <button className="w-40 border-2 border-white bg-white py-2 hover:bg-transparent hover:text-white">
                Women
              </button>
              <button className="w-40 border-2 border-white bg-white py-2 hover:bg-transparent hover:text-white">
                Children
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
