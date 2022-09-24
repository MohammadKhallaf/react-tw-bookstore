// import "./HeroSection.css";
import HeroImg from "../../assets/images/banner.svg";
import { ReactComponent as HeroSVG } from "../../assets/images/banner.svg";
const HeroSection = () => {
  return (
    <section className="bg-lightCofee rounded-xl p-5 min-h-[15rem] flex flex-col-reverse md:flex-row justify-around items-center gap-8 py-8">
      <div className="md:max-w-[40%] lg:max-w-[30%]">
        <h2 className="text-4xl font-black text-lightViolet">
          Build your library
        </h2>
        <p className="text-gray-500 mt-3">
          Buy two selected books and get one for free
        </p>
        <button className="bg-yellow-800 px-3 py-1 rounded-lg mt-5">
          View all
        </button>
      </div>
      <div>
        <HeroSVG width={"300px"} className="max-w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
