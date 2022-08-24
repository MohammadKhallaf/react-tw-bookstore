const HeroSection = () => {
  return (
    <section className="bg-lightCofee rounded-xl p-5 min-h-[15rem] flex flex-col justify-center">
      <div className="md:max-w-[40%] lg:max-w-[30%]">
        <h2 className="text-3xl font-black text-darkViolet">
          Build your library
        </h2>
        <p className="text-gray-500 mt-3">
          Buy two selected books and get one for free
        </p>
        <button className="bg-yellow-800 px-3 py-1 rounded-lg mt-5">
          View all
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
