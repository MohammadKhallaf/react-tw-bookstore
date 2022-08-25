import {
  SearchIcon,
  HeartIcon as OutlinedHeart,
  MenuIcon,
} from "@heroicons/react/outline";
import Sitebar from "./Sitebar";
interface Props {
  isShow: boolean;
  toggleShow: () => void;
}
const MobileNavbar = (props: Props) => {
  return (
    <div
      className={`
      flex flex-col md:hidden  
      rounded-b-xl
      pt-3 pb-3 px-5 w-full mt-[3rem]
      transition-all ease-out duration-500 drop-shadow-md
      fixed left-0 right-0 z-10 bg-calmWhite
      ${props.isShow ? "top-0" : "-top-[30rem]"}`}
    >
      <Sitebar direction="col" />
      <div className="flex flex-row space-x-3 items-baseline justify-around py-3 ">
        <OutlinedHeart className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:stroke-red-700 hover:cursor-pointer" />
        <span className="flex items-center justify-center p-4 w-5 h-5 text-calmWhite bg-lightViolet rounded-full font-semibold">
          0
        </span>
        <span>EN</span>
      </div>
      <form className="w-full">
        <div className="relative">
          <input
            type="search"
            id="site-search"
            className="w-full rounded-2xl px-5 pr-8 bg-slate-100 py-3"
            placeholder="search by author, title, name ..."
            required
          />
          <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MobileNavbar;
