import {
  MagnifyingGlassIcon,
  HeartIcon as OutlinedHeart,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import SearchForm from "../SearchForm";
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
      <SearchForm className="w-full px-3 mx-auto" />
    </div>
  );
};

export default MobileNavbar;
