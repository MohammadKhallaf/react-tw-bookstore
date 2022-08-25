import { useState } from "react";

import {
  SearchIcon,
  HeartIcon as OutlinedHeart,
  XIcon,
} from "@heroicons/react/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/solid";
import MenuIcon from "@heroicons/react/solid/MenuIcon";
import MobileNavbar from "./MobileNavbar";
import Sitebar from "./Sitebar";
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const [isShow, setShow] = useState(false);
  const toggleMobileNav = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <header className="pt-5 pb-3 mx-auto fixed z-20 top-0 bg-calmWhite left-0 right-0 px-5">
        <div className="flex w-full items-center relative container">
          {/* logo */}
          <h1 className=" text-xl font-bold font-nova select-none whitespace-nowrap basis-[100%] md:basis-[25%]">
            Pyramids Store
          </h1>
          {/* search */}
          <form className="hidden md:flex basis-[50%]">
            <div className="relative w-full">
              <input
                type="search"
                id="site-search"
                className="w-full rounded-2xl px-5 bg-slate-100 py-3"
                placeholder="search by author, title, name ..."
                required
              />
              <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </form>
          {/* fav settings btns - > md */}
          <div className="hidden md:flex row space-x-3 items-center basis-[25%] justify-end">
            <OutlinedHeart className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:stroke-red-700 hover:cursor-pointer" />
            <span className="flex items-center justify-center p-4 w-5 h-5 text-calmWhite bg-lightViolet rounded-full font-semibold">
              0
            </span>
            <span>EN</span>
          </div>
          {!isShow ? (
            <MenuIcon
              className="w-5 h-5 md:hidden hover:cursor-pointer hover:text-lightViolet"
              onClick={toggleMobileNav}
            />
          ) : (
            <XIcon
              className="w-5 h-5 md:hidden hover:cursor-pointer hover:text-lightViolet"
              onClick={toggleMobileNav}
            />
          )}
        </div>

        <Sitebar direction="row" />
      </header>
      <MobileNavbar isShow={isShow} toggleShow={toggleMobileNav} />
    </>
  );
}
